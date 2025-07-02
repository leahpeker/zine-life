<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { authService } from '$lib/stores/auth';

	let { children } = $props();

	onMount(() => {
		// Check auth status when the app loads
		authService.checkAuth();
	});
</script>

{@render children()}
