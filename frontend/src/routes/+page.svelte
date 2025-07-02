<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { authStore, authService } from '$lib/stores/auth';
	import UserDropdown from '$lib/components/auth/UserDropdown.svelte';

	function startNewDesign() {
		goto('/editor');
	}

	function signIn() {
		console.log('Login button clicked');
		authService.signInWithGoogle();
	}

	onMount(() => {
		authService.checkAuth();
	});
</script>

<svelte:head>
	<title>ZINE LIFE - DIY GRAPHICS FOR THE UNDERGROUND</title>
	<meta name="description" content="Create punk flyers, zines, and underground graphics. No corporate BS." />
</svelte:head>

<!-- Header -->
<header class="bg-black border-b-2 border-green-400 sticky top-0 z-50">
	<div class="max-w-4xl mx-auto px-4 py-3">
		<div class="flex justify-between items-center">
			<!-- Logo -->
			<div class="flex items-center">
				<h1 class="text-3xl font-black text-white tracking-wider transform -skew-x-12 font-punk">ZINE LIFE</h1>
			</div>

			<!-- Auth Section -->
			<div class="flex items-center space-x-4">
				{#if $authStore.loading}
					<div class="text-green-400 font-mono text-sm">loading...</div>
				{:else if $authStore.user}
					<UserDropdown user={$authStore.user} />
				{:else}
					<button 
						type="button"
						onclick={signIn}
						class="bg-green-400 text-black px-4 py-2 font-black tracking-wide transform -skew-x-6 hover:bg-green-300 transition-colors border-2 border-green-400 font-industrial"
						aria-label="Sign in with Google"
					>
						LOGIN
					</button>
				{/if}
			</div>
		</div>
	</div>
</header>

<main class="bg-black min-h-screen photocopied scan-lines relative">
	<!-- Hero Section -->
	<section class="bg-black py-20 px-4">
		<div class="max-w-4xl mx-auto text-center">
			<div class="mb-8">
				<h1 class="text-6xl md:text-8xl font-black text-white mb-4 tracking-wider transform -skew-x-6 font-punk glitch-text" data-text="DIY GRAPHICS">
					DIY GRAPHICS
				</h1>
				<h2 class="text-3xl md:text-5xl font-black text-green-400 mb-6 transform skew-x-3 font-industrial">
					FOR THE UNDERGROUND
				</h2>
			</div>
			
			<p class="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-mono">
				Make punk flyers, zines, and underground graphics.<br>
				No corporate bullshit.
			</p>
			
			<div class="space-y-4">
				<button 
					onclick={startNewDesign}
					class="bg-green-400 text-black px-12 py-4 text-2xl font-black tracking-wide transform -skew-x-6 hover:bg-green-300 transition-colors border-4 border-green-400 shadow-lg hover:shadow-green-400/50 font-industrial"
				>
					START CREATING
				</button>
				
				<div class="text-gray-500 font-mono text-sm">
					no signup required to start
				</div>
			</div>
		</div>
	</section>

	<!-- What We're About Section -->
	<section class="bg-black py-16 px-4 border-t-2 border-gray-800">
		<div class="max-w-4xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="text-4xl font-black text-white mb-6 transform -skew-x-3 font-punk">
					WHAT WE'RE ABOUT
				</h2>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				<div class="text-center p-6 border-2 border-gray-800 bg-gray-900 photocopied hover:border-green-400 transition-colors">
					<div class="text-green-400 text-4xl mb-4 font-black">
						[✗]
					</div>
					<h3 class="text-xl font-black text-white mb-3 tracking-wide font-industrial">PUNK FLYERS</h3>
					<p class="text-gray-400 font-mono text-sm">Raw, aggressive show posters that cut through the noise</p>
				</div>

				<div class="text-center p-6 border-2 border-gray-800 bg-gray-900 photocopied hover:border-green-400 transition-colors">
					<div class="text-green-400 text-4xl mb-4 font-black">
						[✗]
					</div>
					<h3 class="text-xl font-black text-white mb-3 tracking-wide font-industrial">ZINES</h3>
					<p class="text-gray-400 font-mono text-sm">DIY publications with that photocopied underground feel</p>
				</div>

				<div class="text-center p-6 border-2 border-gray-800 bg-gray-900 photocopied hover:border-green-400 transition-colors">
					<div class="text-green-400 text-4xl mb-4 font-black">
						[✗]
					</div>
					<h3 class="text-xl font-black text-white mb-3 tracking-wide font-industrial">PROTEST ART</h3>
					<p class="text-gray-400 font-mono text-sm">Bold graphics that actually say something</p>
				</div>
			</div>
		</div>
	</section>
</main>

<!-- Footer -->
<footer class="bg-gray-900 border-t-2 border-green-400 py-8">
	<div class="max-w-4xl mx-auto px-4 text-center">
		<div class="mb-6">
			<h3 class="text-2xl font-black text-white tracking-wider transform -skew-x-6 mb-2 font-punk">ZINE LIFE</h3>
			<p class="text-gray-400 font-mono text-sm">anti-corporate design tools</p>
		</div>
		<div class="border-t border-gray-800 pt-6">
			<p class="text-gray-500 font-mono text-xs">
				no venture capital • no tracking • just tools
			</p>
		</div>
	</div>
</footer>