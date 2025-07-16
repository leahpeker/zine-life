<script lang="ts">
	import { authStore } from '$lib/stores/auth';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import { buildApiUrl, API_ENDPOINTS } from '$lib/constants/api';
	import { FETCH_OPTIONS, createFetchOptions, FETCH_METHODS } from '$lib/constants/http';
	import { DESIGN_FILTERS, FILTER_CONFIG, type DesignFilter } from '$lib/constants/filters';
	import { ROUTES } from '$lib/constants/routes';
	import { UI_TEXT } from '$lib/constants/ui-text';
	import { StyleGuide } from '$lib/constants/styleGuide';
	import SimpleThumbnail from '$lib/components/design/SimpleThumbnail.svelte';
	import NewDesignButton from '$lib/components/layout/NewDesignButton.svelte';

	let designs = [];
	let loading = true;
	let error = null;
	let filter: DesignFilter = DESIGN_FILTERS.ALL;
	let hasInitiallyFetched = false;

	// Redirect to home if not authenticated
	onMount(() => {
		if (!$authStore.user && !$authStore.loading) {
			goto('/');
		} else if ($authStore.user) {
			fetchDesigns();
		}
	});

	// Fetch designs when user becomes authenticated (only once)
	$: if ($authStore.user && !hasInitiallyFetched) {
		fetchDesigns();
	}

	async function fetchDesigns() {
		if (!$authStore.user) return;

		try {
			loading = true;
			error = null;
			const designsUrl = buildApiUrl(API_ENDPOINTS.DESIGNS.BASE);
			const response = await fetch(designsUrl, FETCH_OPTIONS.DEFAULT);

			if (response.ok) {
				const data = await response.json();
				designs = data.designs || [];
			} else {
				error = 'Failed to fetch designs';
			}
		} catch (err) {
			error = 'Failed to connect to server';
			console.error('Failed to fetch designs:', err);
		} finally {
			loading = false;
			hasInitiallyFetched = true;
		}
	}

	async function deleteDesign(id) {
		if (!confirm(UI_TEXT.MESSAGES.DELETE_CONFIRM)) {
			return;
		}

		try {
			const deleteUrl = buildApiUrl(API_ENDPOINTS.DESIGNS.BY_ID(id));
			const response = await fetch(
				deleteUrl,
				createFetchOptions(FETCH_METHODS.DELETE, $authStore.csrfToken)
			);

			if (response.ok) {
				designs = designs.filter((d) => d.id !== id);
			} else {
				alert('Failed to delete design');
			}
		} catch (err) {
			alert('Failed to delete design');
			console.error('Delete failed:', err);
		}
	}

	function editDesign(id) {
		goto(ROUTES.EDITOR_WITH_ID(id));
	}

	function refreshDesigns() {
		hasInitiallyFetched = false;
		fetchDesigns();
	}

	// Filter designs based on current filter
	$: filteredDesigns = designs.filter((design) => {
		if (filter === DESIGN_FILTERS.ALL) return true;
		if (filter === DESIGN_FILTERS.PUBLIC) return design.is_public;
		if (filter === DESIGN_FILTERS.PRIVATE) return !design.is_public;
		return true;
	});
</script>

<svelte:head>
	<title>Dashboard - ZINE LIFE</title>
</svelte:head>

<!-- Header -->
<Header showBackButton={true} />

<!-- Dashboard -->
<div class="photocopied min-h-screen bg-background text-text" style="margin-top: 64px;">
	<div class="mx-auto max-w-6xl px-4 py-8">
		<!-- Header -->
		<div class="mb-8">
			<h1
				class="text-primary font-punk mb-2 -skew-x-3 transform text-4xl font-black tracking-wider"
			>
				MY DESIGNS
			</h1>
			<p class="text-text-muted font-mono">Your underground graphics collection</p>
		</div>

		<!-- Action Bar -->
		<div class="mb-8 flex flex-wrap items-center justify-between gap-4">
			<!-- New Design Button -->
			<NewDesignButton
				class="{StyleGuide.PrimaryButton}"
			>
				NEW DESIGN
			</NewDesignButton>

			<!-- Filter Buttons -->
			<div class="flex gap-2">
				{#each Object.entries(FILTER_CONFIG) as [filterKey, config]}
					<button
						onclick={() => (filter = filterKey)}
						class="{filter === filterKey ? StyleGuide.PrimaryButton : StyleGuide.SecondaryButton} group relative px-4 py-2"
						aria-label={config.ariaLabel}
						aria-pressed={filter === filterKey}
					>
						<span class="{filter === filterKey ? '' : 'group-hover:opacity-0'} transition-opacity">
							{config.label}
						</span>
						{#if filter !== filterKey}
							<span
								class="absolute inset-0 flex items-center justify-center font-black opacity-0 transition-opacity group-hover:opacity-100 bg-primary text-black"
							>
								{config.label}
							</span>
						{/if}
					</button>
				{/each}
			</div>
		</div>

		<!-- Loading State -->
		{#if loading}
			<div class="py-16 text-center">
				<div class="text-primary font-mono text-xl">Loading your designs...</div>
			</div>

			<!-- Error State -->
		{:else if error}
			<div class="py-16 text-center">
				<div class="text-danger mb-4 font-mono text-xl">{error}</div>
				<button
					onclick={refreshDesigns}
					class="{StyleGuide.PrimaryButton}"
					aria-label="Retry loading designs"
				>
					RETRY
				</button>
			</div>

			<!-- Empty State -->
		{:else if filteredDesigns.length === 0}
			<div class="{StyleGuide.Card} py-16 text-center">
				<div class="text-primary mb-4 text-6xl">[+]</div>
				<h2 class="font-industrial mb-4 text-2xl font-black text-text">
					{UI_TEXT.MESSAGES.EMPTY_STATE_TITLE(filter)}
				</h2>
				<p class="text-text-muted mb-6 font-mono">
					{UI_TEXT.MESSAGES.EMPTY_STATE_DESCRIPTION(filter)}
				</p>
				<NewDesignButton
					class="{StyleGuide.PrimaryButton}"
				>
					CREATE FIRST DESIGN
				</NewDesignButton>
			</div>

			<!-- Designs Grid -->
		{:else}
			<ul
				class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
				role="list"
				aria-label="Your designs"
			>
				{#each filteredDesigns as design}
					<li
						class="{StyleGuide.Card}"
					>
						<!-- Design Preview -->
						<div class="bg-background-card relative flex h-48 items-center justify-center">
							<SimpleThumbnail {design} size="large" className="bg-white" />

							<!-- Privacy Badge -->
							<div class="absolute right-2 top-2">
								<span
									class="font-industrial px-2 py-1 text-xs font-black tracking-wide {design.is_public
										? StyleGuide.PublicBadge
										: StyleGuide.PrivateBadge}"
								>
									{design.is_public ? 'PUBLIC' : 'PRIVATE'}
								</span>
							</div>
						</div>

						<!-- Design Info -->
						<div class="p-4">
							<h3 class="font-industrial mb-2 text-lg font-black text-text">{design.title}</h3>
							<p class="text-text-muted mb-4 font-mono text-xs">
								Created: {new Date(design.created_at).toLocaleDateString()}<br />
								Updated: {new Date(design.updated_at).toLocaleDateString()}
							</p>

							<!-- Actions -->
							<div class="flex gap-2">
								<button
									onclick={() => editDesign(design.id)}
									class="{StyleGuide.SmallButton}"
									aria-label="Edit {design.title}"
								>
									EDIT
								</button>
								<button
									onclick={() => deleteDesign(design.id)}
									class="{StyleGuide.DangerButton}"
									aria-label="Delete {design.title}"
								>
									DELETE
								</button>
							</div>
						</div>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</div>
