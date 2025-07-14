<script lang="ts">
	import { onMount } from 'svelte';
	import { authStore } from '$lib/stores/auth';
	import { authService } from '$lib/services/authService';
	import Header from '$lib/components/layout/Header.svelte';
	import UserDashboard from '$lib/components/layout/UserDashboard.svelte';
	import AnonymousHero from '$lib/components/layout/AnonymousHero.svelte';
	import AboutSection from '$lib/components/layout/AboutSection.svelte';
	import PublicGallery from '$lib/components/layout/PublicGallery.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import { buildApiUrl, API_ENDPOINTS } from '$lib/constants/api';

	let publicDesigns: any[] = [];

	async function fetchPublicDesigns() {
		try {
			const publicUrl = buildApiUrl(API_ENDPOINTS.DESIGNS.PUBLIC);
			const response = await fetch(publicUrl);
			
			if (response.ok) {
				const data = await response.json();
				publicDesigns = (data.designs || []).slice(0, 6); // Show 6 public designs
			}
		} catch (error) {
			console.error('Failed to fetch public designs:', error);
		}
	}

	onMount(() => {
		authService.checkAuth();
		fetchPublicDesigns();
	});
</script>

<svelte:head>
	<title>ZINE LIFE - DIY GRAPHICS FOR THE UNDERGROUND</title>
	<meta name="description" content="Create punk flyers, zines, and underground graphics. No corporate BS." />
</svelte:head>

<!-- Header -->
<Header />

<main class="bg-black min-h-screen photocopied relative" style="margin-top: 64px;">
	{#if $authStore.user}
		<UserDashboard user={$authStore.user} />
	{:else}
		<AnonymousHero />
		<AboutSection />
	{/if}

	<PublicGallery {publicDesigns} />
</main>

<Footer />