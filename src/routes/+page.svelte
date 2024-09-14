<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
  
	let showContent = false;
  
	onMount(() => {
	  showContent = true;
	});
  </script>
  
  <section class="relative min-h-screen bg-gradient-to-r from-purple-50 to-white overflow-hidden">
	<!-- Hero Section -->
	<div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex flex-col justify-center items-center text-center">
	  {#if showContent}
		<h1 in:fly={{ y: 50, duration: 1000, delay: 300 }} class="text-5xl sm:text-7xl font-extrabold text-gray-900 mb-4">
		  SIMplify
		</h1>
		
		<p in:fade={{ duration: 1000, delay: 800 }} class="text-xl sm:text-2xl text-gray-700 mb-8 max-w-3xl">
		  Simplify ministry, check-ups, and human flourishing through peacetime simulations.
		</p>
		
		<div in:fade={{ duration: 1000, delay: 1300 }} class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
		  <a href="/game" class="px-8 py-3 bg-purple-600 text-white font-bold rounded-full hover:bg-purple-700 transition duration-300 transform hover:scale-105">
			Create a Simulation
		  </a>
		  <a href="/learn" class="px-8 py-3 bg-transparent border-2 border-purple-600 text-purple-600 font-bold rounded-full hover:bg-purple-600 hover:text-white transition duration-300 transform hover:scale-105">
			Learn More
		  </a>
		</div>
	  {/if}
	</div>
  
	<!-- Features Section -->
	<div class="py-20 bg-white">
	  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<h2 class="text-3xl font-extrabold text-gray-900 text-center mb-12">Features</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
		  <div class="text-center">
			<div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-purple-100">
			  <!-- Icon -->
			  <svg class="h-6 w-6 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
			  </svg>
			</div>
			<h3 class="mt-4 text-xl font-semibold text-gray-800">User-Friendly Interface</h3>
			<p class="mt-2 text-gray-600">Intuitive design that makes creating simulations effortless.</p>
		  </div>
		  <!-- Repeat for other features -->
		  <div class="text-center">
			<div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-purple-100">
			  <!-- Icon -->
			  <svg class="h-6 w-6 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-6a2 2 0 114 0v6m5-12H4" />
			  </svg>
			</div>
			<h3 class="mt-4 text-xl font-semibold text-gray-800">Real-Time Analytics</h3>
			<p class="mt-2 text-gray-600">Monitor simulation performance with comprehensive sentiment analysis.</p>
		  </div>
		  <div class="text-center">
			<div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-purple-100">
			  <!-- Icon -->
			  <svg class="h-6 w-6 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
			  </svg>
			</div>
			<h3 class="mt-4 text-xl font-semibold text-gray-800">Secure & Reliable</h3>
			<p class="mt-2 text-gray-600">Top-notch security measures to protect your data.</p>
		  </div>
		</div>
	  </div>
	</div>
  
	<!-- Testimonials Section -->
	
  
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
	  {#each Array(20) as _, i}
		<div
		  class="absolute rounded-full bg-purple-200 opacity-20"
		  style="
			width: {Math.random() * 200 + 50}px;
			height: {Math.random() * 200 + 50}px;
			left: {Math.random() * 100}%;
			top: {Math.random() * 100}%;
			animation: float {Math.random() * 20 + 10}s infinite ease-in-out;
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
  
	/* Smooth scrolling for anchor links */
	html {
	  scroll-behavior: smooth;
	}
  
	/* Responsive Typography */
	h1 {
	  font-family: 'Poppins', sans-serif;
	}
  
	h2 {
	  font-family: 'Poppins', sans-serif;
	}
  </style>
  