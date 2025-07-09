<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { authStore, authService } from '$lib/stores/auth';
	import UserDropdown from '$lib/components/auth/UserDropdown.svelte';

	let recentDesigns = [];
	let publicDesigns = [];
	let loading = false;

	function startNewDesign() {
		goto('/editor');
	}

	function goToDashboard() {
		goto('/dashboard');
	}

	function signIn() {
		console.log('Login button clicked');
		authService.signInWithGoogle();
	}

	async function fetchRecentDesigns() {
		if (!$authStore.user) return;
		
		try {
			loading = true;
			const response = await fetch('http://localhost:8000/api/designs', {
				credentials: 'include'
			});
			
			if (response.ok) {
				const designs = await response.json();
				recentDesigns = designs.slice(0, 3); // Show only 3 most recent
			}
		} catch (error) {
			console.error('Failed to fetch recent designs:', error);
		} finally {
			loading = false;
		}
	}

	async function fetchPublicDesigns() {
		try {
			const response = await fetch('http://localhost:8000/api/designs/public');
			
			if (response.ok) {
				const designs = await response.json();
				publicDesigns = designs.slice(0, 6); // Show 6 public designs
			}
		} catch (error) {
			console.error('Failed to fetch public designs:', error);
		}
	}

	onMount(() => {
		authService.checkAuth();
		fetchPublicDesigns();
	});

	// Fetch recent designs when user becomes authenticated
	$: if ($authStore.user) {
		fetchRecentDesigns();
	}
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
	{#if $authStore.user}
		<!-- Logged-in User View: Personal Dashboard -->
		<section class="bg-black py-12 px-4">
			<div class="max-w-6xl mx-auto">
				<div class="mb-12">
					<h1 class="text-4xl md:text-6xl font-black text-white mb-4 tracking-wider transform -skew-x-6 font-punk">
						WELCOME BACK, {$authStore.user.name.toUpperCase()}
					</h1>
					<p class="text-xl text-green-400 font-mono">Ready to create more underground graphics?</p>
				</div>
				
				<!-- Action Buttons -->
				<div class="flex flex-wrap gap-4 mb-12">
					<button 
						onclick={startNewDesign}
						class="bg-green-400 text-black px-8 py-3 text-xl font-black tracking-wide transform -skew-x-6 hover:bg-green-300 transition-colors border-2 border-green-400 font-industrial"
						aria-label="Create a new design in the editor"
					>
						NEW DESIGN
					</button>
					<button 
						onclick={goToDashboard}
						class="bg-transparent text-green-400 px-8 py-3 text-xl font-black tracking-wide border-2 border-green-400 hover:bg-green-400 hover:text-black transition-colors font-industrial"
						aria-label="View all your designs in the dashboard"
					>
						VIEW ALL DESIGNS
					</button>
				</div>

				<!-- Recent Designs -->
				<div class="mb-12">
					<h2 class="text-3xl font-black text-white mb-6 transform -skew-x-3 font-punk border-b-2 border-gray-800 pb-2">
						YOUR RECENT WORK
					</h2>
					
					{#if loading}
						<div class="text-green-400 font-mono">Loading your designs...</div>
					{:else if recentDesigns.length === 0}
						<div class="text-center py-12 border-2 border-gray-800 bg-gray-900">
							<div class="text-green-400 text-6xl mb-4">[+]</div>
							<h3 class="text-xl font-black text-white mb-2 font-industrial">NO DESIGNS YET</h3>
							<p class="text-gray-400 font-mono mb-4">Time to create your first underground masterpiece</p>
							<button 
								onclick={startNewDesign}
								class="bg-green-400 text-black px-6 py-2 font-black tracking-wide transform -skew-x-6 hover:bg-green-300 transition-colors border-2 border-green-400 font-industrial"
								aria-label="Start creating your first design"
							>
								START NOW
							</button>
						</div>
					{:else}
						<ul class="grid grid-cols-1 md:grid-cols-3 gap-6" role="list" aria-label="Recent designs">
							{#each recentDesigns as design}
								<li class="border-2 border-gray-800 bg-gray-900 p-4 hover:border-green-400 transition-colors photocopied">
									<div class="bg-gray-800 h-40 mb-4 flex items-center justify-center">
										<div class="text-gray-600 font-mono text-sm">DESIGN PREVIEW</div>
									</div>
									<h3 class="text-lg font-black text-white mb-2 font-industrial">{design.title}</h3>
									<p class="text-gray-400 font-mono text-xs mb-3">
										{new Date(design.updated_at).toLocaleDateString()}
									</p>
									<button 
										class="bg-transparent text-green-400 px-4 py-1 text-sm font-black border border-green-400 hover:bg-green-400 hover:text-black transition-colors font-industrial"
										aria-label="Edit {design.title}"
									>
										EDIT
									</button>
								</li>
							{/each}
						</ul>
					{/if}
				</div>
			</div>
		</section>
	{:else}
		<!-- Anonymous User View: Underground Showcase -->
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
						aria-label="Start creating underground graphics"
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
	{/if}

	<!-- Public Gallery Section (shown for both auth states) -->
	{#if publicDesigns.length > 0}
		<section class="bg-black py-16 px-4 border-t-2 border-gray-800">
			<div class="max-w-6xl mx-auto">
				<div class="text-center mb-12">
					<h2 class="text-4xl font-black text-white mb-6 transform -skew-x-3 font-punk">
						UNDERGROUND GALLERY
					</h2>
					<p class="text-gray-400 font-mono">Real designs from real rebels</p>
				</div>

				<ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list" aria-label="Public designs gallery">
					{#each publicDesigns as design}
						<li class="border-2 border-gray-800 bg-gray-900 hover:border-green-400 transition-colors photocopied">
							<div class="bg-gray-800 h-48 flex items-center justify-center">
								<div class="text-gray-600 font-mono text-sm">PUBLIC DESIGN</div>
							</div>
							<div class="p-4">
								<h3 class="text-lg font-black text-white mb-2 font-industrial">{design.title}</h3>
								<p class="text-gray-400 font-mono text-xs mb-3">
									by underground artist • {new Date(design.created_at).toLocaleDateString()}
								</p>
								<button 
									class="bg-transparent text-green-400 px-4 py-1 text-sm font-black border border-green-400 hover:bg-green-400 hover:text-black transition-colors font-industrial"
									aria-label="Duplicate {design.title}"
								>
									DUPLICATE
								</button>
							</div>
						</li>
					{/each}
				</ul>
			</div>
		</section>
	{/if}
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