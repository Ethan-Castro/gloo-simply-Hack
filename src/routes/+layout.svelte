<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';

	let showContent = false;

	onMount(() => {
		showContent = true;
	});
</script>

<!-- Background and main layout -->
<div class="bg-white min-h-screen text-black">
	<!-- Optional overlay (adjust opacity or remove if not needed) -->
	<div class="absolute inset-0 bg-gray-300 opacity-30"></div>
	
	<div class="relative z-10">
		<Navbar />

		<main class="pt-16"> <!-- Added padding-top to account for fixed navbar -->
			{#if showContent}
				<div in:fade="{{ duration: 300 }}">
					<slot />
				</div>
			{/if}
		</main>
	</div>

	<!-- Animated background elements -->
	<div class="fixed inset-0 overflow-hidden pointer-events-none">
		{#each Array(10) as _, i}
			<div
				class="absolute rounded-full bg-gray-700 opacity-10"
				style="
					width: {Math.random() * 300 + 50}px;
					height: {Math.random() * 300 + 50}px;
					left: {Math.random() * 100}%;
					top: {Math.random() * 100}%;
					animation: float {Math.random() * 10 + 5}s infinite ease-in-out;
				"
			></div>
		{/each}
	</div>
</div>

<style>
	@keyframes float {
		0%, 100% { transform: translateY(0) rotate(0deg); }
		50% { transform: translateY(-20px) rotate(180deg); }
	}

	/* Additional styles for any other specific needs */
</style>
