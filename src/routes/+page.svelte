<script>
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
  
	let showContent = false;
  
	onMount(() => {
	  showContent = true;
	});
  
	const backgroundElements = Array(20).fill(null).map(() => ({
	  width: Math.random() * 200 + 50,
	  height: Math.random() * 200 + 50,
	  left: Math.random() * 100,
	  top: Math.random() * 100,
	  duration: Math.random() * 20 + 10
	}));
  </script>
  
  <section class="relative min-h-screen bg-gradient-to-r from-purple-50 to-white overflow-hidden">
	<!-- Hero Section -->
	<div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex flex-col justify-center items-center text-center">
	  {#if showContent}
		<h1 in:fly={{ y: 50, duration: 1000, delay: 300 }} class="text-5xl sm:text-7xl font-extrabold text-gray-900 mb-4">
		  SIMplify: <br>
		  Foresight for Flourishing
		</h1>
		
		<p in:fade={{ duration: 1000, delay: 800 }} class="text-xl sm:text-2xl text-gray-700 mb-8 max-w-3xl">
		  Empower your ministry with AI-driven peacetime simulations. Make informed decisions and nurture your congregation's growth.
		</p>
		
		<div in:fade={{ duration: 1000, delay: 1300 }} class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
		  <a href="/demo" class="px-8 py-3 bg-purple-600 text-white font-bold rounded-full hover:bg-purple-700 transition duration-300 transform hover:scale-105">
			Try a Demo Simulation
		  </a>
		  <a href="#how-it-helps" class="px-8 py-3 bg-transparent border-2 border-purple-600 text-purple-600 font-bold rounded-full hover:bg-purple-600 hover:text-white transition duration-300 transform hover:scale-105">
			See How It Helps
		  </a>
		</div>
	  {/if}
	</div>
  
	<!-- How It Helps Church Leaders Section -->
	<div id="how-it-helps" class="py-20 bg-white">
	  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<h2 class="text-3xl font-extrabold text-gray-900 text-center mb-12">How SIMplify Empowers Church Leaders</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
		  {#each ['Informed Decision Making', 'Resource Optimization', 'Congregational Understanding', 'Conflict Prevention'] as benefit}
			<div class="bg-purple-50 p-6 rounded-lg">
			  <h3 class="text-xl font-semibold text-gray-800 mb-3">{benefit}</h3>
			  <p class="text-gray-600">
				{#if benefit === 'Informed Decision Making'}
				  Simulate responses to new initiatives, sermon topics, or community outreach programs before implementation, allowing you to refine your approach for maximum impact.
				{:else if benefit === 'Resource Optimization'}
				  Identify the most effective use of your time, budget, and volunteer resources by testing different scenarios in a risk-free environment.
				{:else if benefit === 'Congregational Understanding'}
				  Gain deeper insights into your congregation's needs, concerns, and spiritual growth areas through AI-powered simulations of member responses.
				{:else}
				  Anticipate potential issues and practice addressing sensitive topics in a safe, simulated environment before engaging with your real congregation.
				{/if}
			  </p>
			</div>
		  {/each}
		</div>
	  </div>
	</div>
  
	<!-- Features Section -->
	<div class="py-20 bg-gray-50">
	  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<h2 class="text-3xl font-extrabold text-gray-900 text-center mb-12">Key Features</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
		  {#each [
			{ title: 'AI-Powered Digital Twins', description: 'Create realistic simulations of your congregation members for accurate scenario testing.' },
			{ title: 'Real-Time Analytics', description: 'Monitor simulation outcomes with comprehensive natural language sentiment and impact analysis.' },
			{ title: 'Scripture-Based Insights', description: 'Receive biblically-grounded suggestions for addressing simulated scenarios.' }
		  ] as feature}
			<div class="text-center">
			  <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-purple-100">
				<!-- Icon would go here -->
			  </div>
			  <h3 class="mt-4 text-xl font-semibold text-gray-800">{feature.title}</h3>
			  <p class="mt-2 text-gray-600">{feature.description}</p>
			</div>
		  {/each}
		</div>
	  </div>
	</div>
  
	<!-- Call to Action -->
	<div class="bg-purple-600 text-white py-16">
	  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<h2 class="text-3xl font-extrabold mb-4">Ready to Transform Your Ministry?</h2>
		<p class="text-xl mb-8">Join the growing community of church leaders using SIMplify to nurture thriving congregations.</p>
		<a href="/signup" class="px-8 py-3 bg-white text-purple-600 font-bold rounded-full hover:bg-gray-100 transition duration-300 transform hover:scale-105">
		  Get Started Free
		</a>
	  </div>
	</div>
  
	<!-- Footer -->
	<footer class="bg-gray-800 text-white py-6">
	  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
		<p class="text-sm">&copy; 2024 SIMplify. All rights reserved.</p>
		<div class="flex space-x-4 mt-4 md:mt-0">
		  <a href="#" class="hover:text-gray-400">Privacy Policy</a>
		  <a href="#" class="hover:text-gray-400">Terms of Service</a>
		  <a href="#" class="hover:text-gray-400">Contact</a>
		</div>
	  </div>
	</footer>
  
	<!-- Animated Background Elements -->
	<div class="absolute inset-0 overflow-hidden pointer-events-none">
	  {#each backgroundElements as element}
		<div
		  class="absolute rounded-full bg-purple-200 opacity-20"
		  style="
			width: {element.width}px;
			height: {element.height}px;
			left: {element.left}%;
			top: {element.top}%;
			animation: float {element.duration}s infinite ease-in-out;
		  "
		></div>
	  {/each}
	</div>
  </section>
  
  <style>
	@keyframes float {
	  0%, 100% { transform: translateY(0) rotate(0deg); }
	  50% { transform: translateY(-20px) rotate(180deg); }
	}
  
	:global(html) {
	  scroll-behavior: smooth;
	}
  
	h1, h2, h3 {
	  font-family: 'Poppins', sans-serif;
	}
  </style>