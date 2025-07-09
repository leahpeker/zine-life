<script lang="ts">
	import { authStore, authService } from '$lib/stores/auth';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let designs = [];
	let loading = true;
	let error = null;
	let filter = 'all'; // 'all', 'private', 'public'

	// Redirect to home if not authenticated
	onMount(() => {
		if (!$authStore.user && !$authStore.loading) {
			goto('/');
		} else if ($authStore.user) {
			fetchDesigns();
		}
	});

	// Fetch designs when user becomes authenticated
	$: if ($authStore.user && designs.length === 0) {
		fetchDesigns();
	}

	async function fetchDesigns() {
		if (!$authStore.user) return;
		
		try {
			loading = true;
			error = null;
			const response = await fetch('http://localhost:8000/api/designs', {
				credentials: 'include'
			});
			
			if (response.ok) {
				designs = await response.json();
			} else {
				error = 'Failed to fetch designs';
			}
		} catch (err) {
			error = 'Failed to connect to server';
			console.error('Failed to fetch designs:', err);
		} finally {
			loading = false;
		}
	}

	async function deleteDesign(id) {
		if (!confirm('Are you sure you want to delete this design? This action cannot be undone.')) {
			return;
		}

		try {
			const response = await fetch(`http://localhost:8000/api/designs/${id}`, {
				method: 'DELETE',
				credentials: 'include'
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
		goto(`/editor?id=${id}`);
	}

	function newDesign() {
		goto('/editor');
	}

	// Filter designs based on current filter
	$: filteredDesigns = designs.filter(design => {
		if (filter === 'all') return true;
		if (filter === 'public') return design.is_public;
		if (filter === 'private') return !design.is_public;
		return true;
	});
</script>

<svelte:head>
	<title>Dashboard - ZINE LIFE</title>
</svelte:head>

<!-- Dashboard -->
<div class="min-h-screen bg-black text-white photocopied scan-lines">
	<div class="max-w-6xl mx-auto px-4 py-8">
		<!-- Header -->
		<div class="mb-8">
			<h1 class="text-4xl font-black text-green-400 font-punk tracking-wider transform -skew-x-3 mb-2">
				MY DESIGNS
			</h1>
			<p class="text-gray-400 font-mono">
				Your underground graphics collection
			</p>
		</div>

		<!-- Action Bar -->
		<div class="flex flex-wrap justify-between items-center mb-8 gap-4">
			<!-- New Design Button -->
			<button 
				onclick={newDesign}
				class="bg-green-400 text-black px-6 py-3 font-black tracking-wide transform -skew-x-6 hover:bg-green-300 transition-colors border-2 border-green-400 font-industrial"
				aria-label="Create a new design"
			>
				NEW DESIGN
			</button>

			<!-- Filter Buttons -->
			<div class="flex gap-2">
				<button 
					onclick={() => filter = 'all'}
					class="px-4 py-2 font-black tracking-wide border-2 font-industrial transition-colors {filter === 'all' ? 'bg-green-400 text-black border-green-400' : 'bg-transparent text-green-400 border-green-400 hover:bg-green-400 hover:text-black'}"
					aria-label="Show all designs"
					aria-pressed={filter === 'all'}
				>
					ALL
				</button>
				<button 
					onclick={() => filter = 'private'}
					class="px-4 py-2 font-black tracking-wide border-2 font-industrial transition-colors {filter === 'private' ? 'bg-green-400 text-black border-green-400' : 'bg-transparent text-green-400 border-green-400 hover:bg-green-400 hover:text-black'}"
					aria-label="Show only private designs"
					aria-pressed={filter === 'private'}
				>
					PRIVATE
				</button>
				<button 
					onclick={() => filter = 'public'}
					class="px-4 py-2 font-black tracking-wide border-2 font-industrial transition-colors {filter === 'public' ? 'bg-green-400 text-black border-green-400' : 'bg-transparent text-green-400 border-green-400 hover:bg-green-400 hover:text-black'}"
					aria-label="Show only public designs"
					aria-pressed={filter === 'public'}
				>
					PUBLIC
				</button>
			</div>
		</div>

		<!-- Loading State -->
		{#if loading}
			<div class="text-center py-16">
				<div class="text-green-400 font-mono text-xl">Loading your designs...</div>
			</div>
		
		<!-- Error State -->
		{:else if error}
			<div class="text-center py-16">
				<div class="text-red-400 font-mono text-xl mb-4">{error}</div>
				<button 
					onclick={fetchDesigns}
					class="bg-green-400 text-black px-6 py-2 font-black tracking-wide transform -skew-x-6 hover:bg-green-300 transition-colors border-2 border-green-400 font-industrial"
					aria-label="Retry loading designs"
				>
					RETRY
				</button>
			</div>
		
		<!-- Empty State -->
		{:else if filteredDesigns.length === 0}
			<div class="text-center py-16 border-2 border-gray-800 bg-gray-900">
				<div class="text-green-400 text-6xl mb-4">[+]</div>
				<h2 class="text-2xl font-black text-white mb-4 font-industrial">
					{filter === 'all' ? 'NO DESIGNS YET' : filter === 'private' ? 'NO PRIVATE DESIGNS' : 'NO PUBLIC DESIGNS'}
				</h2>
				<p class="text-gray-400 font-mono mb-6">
					{filter === 'all' ? 'Time to create your first underground masterpiece' : 
					 filter === 'private' ? 'All your designs are public' : 
					 'None of your designs are public yet'}
				</p>
				<button 
					onclick={newDesign}
					class="bg-green-400 text-black px-6 py-3 font-black tracking-wide transform -skew-x-6 hover:bg-green-300 transition-colors border-2 border-green-400 font-industrial"
					aria-label="Create your first design"
				>
					CREATE FIRST DESIGN
				</button>
			</div>
		
		<!-- Designs Grid -->
		{:else}
			<ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list" aria-label="Your designs">
				{#each filteredDesigns as design}
					<li class="border-2 border-gray-800 bg-gray-900 hover:border-green-400 transition-colors photocopied">
						<!-- Design Preview -->
						<div class="bg-gray-800 h-48 flex items-center justify-center relative">
							<div class="text-gray-600 font-mono text-sm">DESIGN PREVIEW</div>
							
							<!-- Privacy Badge -->
							<div class="absolute top-2 right-2">
								<span class="px-2 py-1 text-xs font-black tracking-wide font-industrial {design.is_public ? 'bg-green-400 text-black' : 'bg-gray-700 text-gray-300'}">
									{design.is_public ? 'PUBLIC' : 'PRIVATE'}
								</span>
							</div>
						</div>

						<!-- Design Info -->
						<div class="p-4">
							<h3 class="text-lg font-black text-white mb-2 font-industrial">{design.title}</h3>
							<p class="text-gray-400 font-mono text-xs mb-4">
								Created: {new Date(design.created_at).toLocaleDateString()}<br>
								Updated: {new Date(design.updated_at).toLocaleDateString()}
							</p>

							<!-- Actions -->
							<div class="flex gap-2">
								<button 
									onclick={() => editDesign(design.id)}
									class="bg-green-400 text-black px-3 py-1 text-sm font-black tracking-wide hover:bg-green-300 transition-colors border border-green-400 font-industrial"
									aria-label="Edit {design.title}"
								>
									EDIT
								</button>
								<button 
									onclick={() => deleteDesign(design.id)}
									class="bg-transparent text-red-400 px-3 py-1 text-sm font-black tracking-wide border border-red-400 hover:bg-red-400 hover:text-black transition-colors font-industrial"
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