<script lang="ts">
	import { authStore } from '$lib/stores/auth';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	// Redirect to home if not authenticated
	onMount(() => {
		if (!$authStore.user && !$authStore.loading) {
			goto('/');
		}
	});
</script>

<svelte:head>
	<title>Dashboard - ZINE LIFE</title>
</svelte:head>

<!-- Simple placeholder dashboard -->
<div class="min-h-screen bg-black text-white">
	<div class="max-w-6xl mx-auto px-4 py-8">
		<div class="mb-8">
			<h1 class="text-4xl font-black text-green-400 font-punk tracking-wider transform -skew-x-3 mb-2">
				MY DESIGNS
			</h1>
			<p class="text-gray-400 font-mono">
				Your underground graphics collection
			</p>
		</div>

		<!-- Coming soon placeholder -->
		<div class="border-2 border-green-400 bg-gray-900 p-8 text-center transform -skew-x-1">
			<div class="transform skew-x-1">
				<h2 class="text-2xl font-black text-green-400 font-industrial mb-4">
					DASHBOARD COMING SOON
				</h2>
				<p class="text-gray-300 mb-6 font-mono">
					Grid view of your designs, filters, and management tools will be here
				</p>
				<a 
					href="/editor" 
					class="inline-block bg-green-400 text-black px-6 py-3 font-black tracking-wide transform -skew-x-6 hover:bg-green-300 transition-colors border-2 border-green-400 font-industrial"
				>
					START CREATING
				</a>
			</div>
		</div>
	</div>
</div>