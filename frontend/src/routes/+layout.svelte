<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { authService } from '$lib/services/authService';
	import '$lib/stores/theme'; // Initialize theme store

	let { children } = $props();

	onMount(() => {
		// Check auth status when the app loads
		authService.checkAuth();
		// Theme is automatically initialized in the store
	});
</script>

{@render children()}
