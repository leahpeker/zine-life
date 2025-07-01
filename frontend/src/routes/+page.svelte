<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	// Mock data for now - will connect to API later
	let featuredDesigns = $state([
		{
			id: '1',
			title: 'Modern Poster',
			thumbnail: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=400&fit=crop',
			user: { name: 'Sarah Design', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face' }
		},
		{
			id: '2',
			title: 'Vintage Flyer',
			thumbnail: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=400&fit=crop',
			user: { name: 'Mike Creative', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face' }
		},
		{
			id: '3',
			title: 'Event Banner',
			thumbnail: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=400&fit=crop',
			user: { name: 'Alex Studio', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face' }
		},
		{
			id: '4',
			title: 'Brand Identity',
			thumbnail: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=300&h=400&fit=crop',
			user: { name: 'Emma Brand', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face' }
		},
		{
			id: '5',
			title: 'Social Media Post',
			thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=400&fit=crop',
			user: { name: 'David Social', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face' }
		},
		{
			id: '6',
			title: 'Minimalist Design',
			thumbnail: 'https://images.unsplash.com/photo-1545670723-196ed0954986?w=300&h=400&fit=crop',
			user: { name: 'Luna Minimal', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face' }
		}
	]);

	let templates = $state([
		{ id: '1', title: 'Poster', category: 'Print', thumbnail: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=200&h=280&fit=crop' },
		{ id: '2', title: 'Social Post', category: 'Social Media', thumbnail: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=200&h=280&fit=crop' },
		{ id: '3', title: 'Business Card', category: 'Print', thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=280&fit=crop' },
		{ id: '4', title: 'Presentation', category: 'Business', thumbnail: 'https://images.unsplash.com/photo-1558655146-9f40138c9e9e?w=200&h=280&fit=crop' }
	]);

	let user = $state(null); // Will be set from auth

	function startNewDesign() {
		goto('/editor');
	}

	function openTemplate(templateId: string) {
		goto(`/editor?template=${templateId}`);
	}

	function viewDesign(designId: string) {
		goto(`/design/${designId}`);
	}

	function signIn() {
		// Will redirect to OAuth
		window.location.href = '/auth/google';
	}
</script>

<svelte:head>
	<title>Zine Life - Create Amazing Designs</title>
	<meta name="description" content="Create stunning posters, flyers, and social media graphics with our easy-to-use design tool." />
</svelte:head>

<!-- Header -->
<header class="bg-white border-b border-gray-200 sticky top-0 z-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center h-16">
			<!-- Logo -->
			<div class="flex items-center">
				<h1 class="text-2xl font-bold text-purple-600">Zine Life</h1>
			</div>

			<!-- Navigation -->
			<nav class="hidden md:flex space-x-8">
				<a href="#" class="text-gray-700 hover:text-purple-600 transition-colors">Home</a>
				<a href="#templates" class="text-gray-700 hover:text-purple-600 transition-colors">Templates</a>
				<a href="#gallery" class="text-gray-700 hover:text-purple-600 transition-colors">Gallery</a>
			</nav>

			<!-- Auth Section -->
			<div class="flex items-center space-x-4">
				{#if user}
					<div class="flex items-center space-x-3">
						<img src={user.avatar} alt={user.name} class="w-8 h-8 rounded-full">
						<span class="text-gray-700">{user.name}</span>
						<button class="text-gray-500 hover:text-gray-700">
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
							</svg>
						</button>
					</div>
				{:else}
					<button 
						onclick={signIn}
						class="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
					>
						Sign In
					</button>
				{/if}
			</div>
		</div>
	</div>
</header>

<main>
	<!-- Hero Section -->
	<section class="bg-gradient-to-br from-purple-50 to-blue-50 py-20">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
				Design anything,
				<span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
					publish everywhere
				</span>
			</h1>
			<p class="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
				Create stunning posters, flyers, social media graphics, and more with our intuitive design editor. 
				No design experience needed.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<button 
					onclick={startNewDesign}
					class="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg"
				>
					Start Creating
				</button>
				<button 
					onclick={() => document.getElementById('templates')?.scrollIntoView({ behavior: 'smooth' })}
					class="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-50 transition-colors"
				>
					Browse Templates
				</button>
			</div>
		</div>
	</section>

	<!-- Templates Section -->
	<section id="templates" class="py-20 bg-white">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold text-gray-900 mb-4">Start with a template</h2>
				<p class="text-xl text-gray-600">Choose from hundreds of professional templates</p>
			</div>

			<!-- Template Categories -->
			<div class="flex flex-wrap justify-center gap-4 mb-12">
				<button class="px-6 py-3 bg-purple-600 text-white rounded-full font-medium">All</button>
				<button class="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors">Social Media</button>
				<button class="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors">Print</button>
				<button class="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors">Business</button>
				<button class="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors">Marketing</button>
			</div>

			<!-- Templates Grid -->
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				{#each templates as template}
					<div 
						class="group cursor-pointer bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
						onclick={() => openTemplate(template.id)}
					>
						<div class="aspect-[3/4] bg-gray-100 relative overflow-hidden">
							<img 
								src={template.thumbnail} 
								alt={template.title}
								class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
							>
							<div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
								<div class="bg-white bg-opacity-0 group-hover:bg-opacity-100 px-4 py-2 rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
									<span class="text-gray-900 font-medium opacity-0 group-hover:opacity-100">Use Template</span>
								</div>
							</div>
						</div>
						<div class="p-4">
							<h3 class="font-semibold text-gray-900 mb-1">{template.title}</h3>
							<p class="text-sm text-gray-500">{template.category}</p>
						</div>
					</div>
				{/each}
			</div>

			<div class="text-center mt-12">
				<button class="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-purple-600 hover:text-purple-600 transition-colors">
					View All Templates
				</button>
			</div>
		</div>
	</section>

	<!-- Featured Gallery Section -->
	<section id="gallery" class="py-20 bg-gray-50">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold text-gray-900 mb-4">Featured designs</h2>
				<p class="text-xl text-gray-600">Get inspired by what others have created</p>
			</div>

			<!-- Featured Designs Grid -->
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each featuredDesigns as design}
					<div 
						class="group cursor-pointer bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
						onclick={() => viewDesign(design.id)}
					>
						<div class="aspect-[3/4] bg-gray-100 relative overflow-hidden">
							<img 
								src={design.thumbnail} 
								alt={design.title}
								class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
							>
							<div class="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
								</svg>
							</div>
						</div>
						<div class="p-6">
							<h3 class="font-semibold text-gray-900 mb-3 text-lg">{design.title}</h3>
							<div class="flex items-center">
								<img 
									src={design.user.avatar} 
									alt={design.user.name}
									class="w-8 h-8 rounded-full mr-3"
								>
								<span class="text-gray-600 text-sm">{design.user.name}</span>
							</div>
						</div>
					</div>
				{/each}
			</div>

			<div class="text-center mt-12">
				<button class="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-purple-600 hover:text-purple-600 transition-colors">
					Explore Gallery
				</button>
			</div>
		</div>
	</section>

	<!-- Features Section -->
	<section class="py-20 bg-white">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold text-gray-900 mb-4">Everything you need to create</h2>
				<p class="text-xl text-gray-600">Powerful tools made simple</p>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-12">
				<div class="text-center">
					<div class="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
						<svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"/>
						</svg>
					</div>
					<h3 class="text-xl font-bold text-gray-900 mb-3">Drag & Drop Editor</h3>
					<p class="text-gray-600">Intuitive interface that makes designing as easy as dragging and dropping elements.</p>
				</div>

				<div class="text-center">
					<div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
						<svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
						</svg>
					</div>
					<h3 class="text-xl font-bold text-gray-900 mb-3">Rich Media Library</h3>
					<p class="text-gray-600">Access millions of photos, icons, and graphics to bring your designs to life.</p>
				</div>

				<div class="text-center">
					<div class="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
						<svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
						</svg>
					</div>
					<h3 class="text-xl font-bold text-gray-900 mb-3">Export Anywhere</h3>
					<p class="text-gray-600">Download your designs in high quality or share them directly to social media.</p>
				</div>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
		<div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
			<h2 class="text-4xl font-bold text-white mb-6">Ready to start creating?</h2>
			<p class="text-xl text-purple-100 mb-10">
				Join thousands of creators who use Zine Life to bring their ideas to life.
			</p>
			<button 
				onclick={startNewDesign}
				class="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg"
			>
				Get Started - It's Free
			</button>
		</div>
	</section>
</main>

<!-- Footer -->
<footer class="bg-gray-900 text-gray-300 py-12">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
			<div>
				<h3 class="text-2xl font-bold text-white mb-4">Zine Life</h3>
				<p class="text-gray-400">Create amazing designs with our intuitive editor.</p>
			</div>
			<div>
				<h4 class="font-semibold text-white mb-4">Product</h4>
				<ul class="space-y-2">
					<li><a href="#" class="hover:text-white transition-colors">Templates</a></li>
					<li><a href="#" class="hover:text-white transition-colors">Gallery</a></li>
					<li><a href="#" class="hover:text-white transition-colors">Features</a></li>
				</ul>
			</div>
			<div>
				<h4 class="font-semibold text-white mb-4">Support</h4>
				<ul class="space-y-2">
					<li><a href="#" class="hover:text-white transition-colors">Help Center</a></li>
					<li><a href="#" class="hover:text-white transition-colors">Contact</a></li>
					<li><a href="#" class="hover:text-white transition-colors">Community</a></li>
				</ul>
			</div>
			<div>
				<h4 class="font-semibold text-white mb-4">Company</h4>
				<ul class="space-y-2">
					<li><a href="#" class="hover:text-white transition-colors">About</a></li>
					<li><a href="#" class="hover:text-white transition-colors">Privacy</a></li>
					<li><a href="#" class="hover:text-white transition-colors">Terms</a></li>
				</ul>
			</div>
		</div>
		<div class="border-t border-gray-800 mt-8 pt-8 text-center">
			<p class="text-gray-400">&copy; 2024 Zine Life. All rights reserved.</p>
		</div>
	</div>
</footer>