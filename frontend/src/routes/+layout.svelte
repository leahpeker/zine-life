<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { authService } from '$lib/services/authService';

	let { children } = $props();

	onMount(() => {
		// Check auth status when the app loads
		authService.checkAuth();
	});
</script>

{@render children()}
