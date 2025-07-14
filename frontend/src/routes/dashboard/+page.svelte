<script lang="ts">
	import { authStore, authService } from '$lib/stores/auth';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import { buildApiUrl, API_ENDPOINTS } from '$lib/constants/api';
	import { FETCH_OPTIONS } from '$lib/constants/http';
	import { DESIGN_FILTERS, FILTER_CONFIG, type DesignFilter } from '$lib/constants/filters';
	import { ROUTES } from '$lib/constants/routes';
	import { UI_TEXT } from '$lib/constants/ui-text';
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
			const response = await fetch(deleteUrl, {
				method: 'DELETE',
				...FETCH_OPTIONS.DEFAULT
			});

			if (response.ok) {
				designs = designs.filter(d => d.id !== id);
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
	$: filteredDesigns = designs.filter(design => {
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
<div class="min-h-screen bg-black text-white photocopied" style="margin-top: 64px;">
	<div class="max-w-6xl mx-auto px-4 py-8">
		<!-- Header -->
		<div class="mb-8">
			<h1 class="text-4xl font-black text-primary font-punk tracking-wider transform -skew-x-3 mb-2">
				MY DESIGNS
			</h1>
			<p class="text-text-muted font-mono">
				Your underground graphics collection
			</p>
		</div>

		<!-- Action Bar -->
		<div class="flex flex-wrap justify-between items-center mb-8 gap-4">
			<!-- New Design Button -->
			<NewDesignButton 
				class="px-6 py-3 font-black tracking-wide transform -skew-x-6 transition-all border-2 font-industrial hover:brightness-110"
				style="background-color: var(--color-primary); color: black; border-color: var(--color-primary);"
			>
				NEW DESIGN
			</NewDesignButton>

			<!-- Filter Buttons -->
			<div class="flex gap-2">
				{#each Object.entries(FILTER_CONFIG) as [filterKey, config]}
					<button 
						onclick={() => filter = filterKey}
						class="px-4 py-2 font-black tracking-wide border-2 font-industrial transition-all relative group"
						style="
							background-color: {filter === filterKey ? 'var(--color-primary)' : 'transparent'};
							color: {filter === filterKey ? 'black' : 'var(--color-primary)'};
							border-color: var(--color-primary);
						"
						aria-label={config.ariaLabel}
						aria-pressed={filter === filterKey}
					>
						<span class="{filter === filterKey ? '' : 'group-hover:opacity-0'} transition-opacity">
							{config.label}
						</span>
						{#if filter !== filterKey}
							<span 
								class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity font-black"
								style="background-color: var(--color-primary); color: black;"
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
			<div class="text-center py-16">
				<div class="text-primary font-mono text-xl">Loading your designs...</div>
			</div>
		
		<!-- Error State -->
		{:else if error}
			<div class="text-center py-16">
				<div class="text-danger font-mono text-xl mb-4">{error}</div>
				<button 
					onclick={refreshDesigns}
					class="bg-primary text-black px-6 py-2 font-black tracking-wide transform -skew-x-6 hover:bg-primary-light transition-colors border-2 border-primary font-industrial"
					aria-label="Retry loading designs"
				>
					RETRY
				</button>
			</div>
		
		<!-- Empty State -->
		{:else if filteredDesigns.length === 0}
			<div class="text-center py-16 border-2 border-background-card bg-background-panel">
				<div class="text-primary text-6xl mb-4">[+]</div>
				<h2 class="text-2xl font-black text-white mb-4 font-industrial">
					{UI_TEXT.MESSAGES.EMPTY_STATE_TITLE(filter)}
				</h2>
				<p class="text-text-muted font-mono mb-6">
					{UI_TEXT.MESSAGES.EMPTY_STATE_DESCRIPTION(filter)}
				</p>
				<NewDesignButton 
					class="bg-primary text-black px-6 py-3 font-black tracking-wide transform -skew-x-6 hover:bg-primary-light transition-colors border-2 border-primary font-industrial"
				>
					CREATE FIRST DESIGN
				</NewDesignButton>
			</div>
		
		<!-- Designs Grid -->
		{:else}
			<ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list" aria-label="Your designs">
				{#each filteredDesigns as design}
					<li class="border-2 border-background-card bg-background-panel hover:border-primary transition-colors photocopied">
						<!-- Design Preview -->
						<div class="bg-background-card h-48 flex items-center justify-center relative">
							<SimpleThumbnail {design} size="large" className="bg-white" />
							
							<!-- Privacy Badge -->
							<div class="absolute top-2 right-2">
								<span class="px-2 py-1 text-xs font-black tracking-wide font-industrial {design.is_public ? 'bg-primary text-black' : 'bg-background-input text-text-muted'}">
									{design.is_public ? 'PUBLIC' : 'PRIVATE'}
								</span>
							</div>
						</div>

						<!-- Design Info -->
						<div class="p-4">
							<h3 class="text-lg font-black text-white mb-2 font-industrial">{design.title}</h3>
							<p class="text-text-muted font-mono text-xs mb-4">
								Created: {new Date(design.created_at).toLocaleDateString()}<br>
								Updated: {new Date(design.updated_at).toLocaleDateString()}
							</p>

							<!-- Actions -->
							<div class="flex gap-2">
								<button 
									onclick={() => editDesign(design.id)}
									class="bg-primary text-black px-3 py-1 text-sm font-black tracking-wide hover:bg-primary-light transition-colors border border-primary font-industrial"
									aria-label="Edit {design.title}"
								>
									EDIT
								</button>
								<button 
									onclick={() => deleteDesign(design.id)}
									class="bg-transparent text-danger px-3 py-1 text-sm font-black tracking-wide border border-danger hover:bg-danger hover:text-black transition-colors font-industrial"
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