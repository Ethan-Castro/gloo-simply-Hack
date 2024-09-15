<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import type { Message } from '$lib/models/socketio';
	import { sendWebSocketMessage } from '$lib/utils/websocket';
	import { goto } from '$app/navigation';
	
	let user = {
		name: "Pastor Ed Castro",
		profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdg2oyDvUCwbeWRsobZRrk_h82Vu2JOdOadw&s",
		chatsCount: 30,
		savedChatsCount: 57,
		contactsCount: 283
	};
	
	let showContent = false;
	
	onMount(() => {
		showContent = true;
	});
	
	let savedChats = [
		{ id: 1, title: "How will the members of my Church react to the election?", date: "2024-09-10" },
		{ id: 2, title: "If there is a new outbreak, how should I support the members?", date: "2024-09-08" },
		{ id: 3, title: "What would members say in the sermon recap if I preached on...", date: "2024-09-05" }
	];
	
	let contacts = [
		{ id: 1, name: "Joel Osteen", avatar: "https://cdn.uncf.org/wp-content/uploads/Joel_Osteen-400.png" },
		{ id: 2, name: "Rick Warren", avatar: "https://pbs.twimg.com/profile_images/378800000799284515/29a425d0cacdfe1c01d2be096854a5a6_400x400.jpeg" },

	];
</script>

<section class="relative min-h-screen bg-gradient-to-r from-purple-50 to-white overflow-hidden text-gray-900">
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

	<!-- Content Section -->
	<div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
		{#if showContent}
			<!-- Profile Card -->
			<div in:fade={{ duration: 300 }} class="bg-white rounded-3xl shadow-lg overflow-hidden transition transform hover:scale-105">
				<div class="relative h-48 bg-gradient-to-r from-purple-500 to-purple-600">
					<div class="absolute -bottom-16 left-6">
						<img in:fly={{ y: 50, duration: 500 }} src={user.profilePic} alt={user.name} class="w-32 h-32 rounded-full border-4 border-white shadow-xl" />
					</div>
				</div>
				<div class="pt-20 px-6 pb-6 text-center">
					<h1 class="text-3xl font-semibold text-gray-900">{user.name}</h1>
					<div class="mt-4 flex justify-center space-x-6 text-gray-600">
						<div>
							<span class="font-bold text-xl">{user.chatsCount}</span>
							<span class="ml-1">Chats</span>
						</div>
						<div>
							<span class="font-bold text-xl">{user.savedChatsCount}</span>
							<span class="ml-1">Saved</span>
						</div>
						<div>
							<span class="font-bold text-xl">{user.contactsCount}</span>
							<span class="ml-1">Contacts</span>
						</div>
					</div>
				</div>
			</div>

			<!-- Saved Chats & Contacts -->
			<div class="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
				<!-- Saved Chats -->
				<div in:fly={{ x: -50, duration: 500, delay: 300 }} class="bg-white rounded-2xl shadow-md p-6 transition hover:shadow-lg">
					<h2 class="text-2xl font-semibold text-gray-900 mb-4">Saved Simulations</h2>
					<ul class="space-y-4">
						{#each savedChats as chat}
							<li class="bg-purple-50 rounded-lg p-4 hover:bg-purple-100 transition duration-300">
								<a href={`/chat/${chat.id}`} class="text-purple-600 hover:text-purple-800 font-medium">{chat.title}</a>
								<p class="text-sm text-gray-600 mt-1">{chat.date}</p>
							</li>
						{/each}
					</ul>
				</div>

				<!-- Contacts -->
				<div in:fly={{ x: 50, duration: 500, delay: 300 }} class="bg-white rounded-2xl shadow-md p-6 transition hover:shadow-lg">
					<h2 class="text-2xl font-semibold text-gray-900 mb-4">Contacts</h2>
					<ul class="grid grid-cols-1 sm:grid-cols-2 gap-4">
						{#each contacts as contact}
							<li class="flex items-center space-x-4 bg-purple-50 rounded-lg p-4 hover:bg-purple-100 transition duration-300">
								<img src={contact.avatar} alt={contact.name} class="w-10 h-10 rounded-full shadow-sm" />
								<span class="text-gray-800">{contact.name}</span>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		{/if}
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
	h1, h2 {
		font-family: 'Poppins', sans-serif;
	}

	/* Button Pulse Animation (if any buttons are added) */
	@keyframes pulse {
		0%, 100% { transform: scale(1); }
		50% { transform: scale(1.05); }
	}

	button {
		animation: pulse 2s infinite;
	}

	button:hover {
		animation: none;
	}

	/* Responsive adjustments */
	@media (max-width: 640px) {
		h1 {
			font-size: 2.5rem;
		}

		h2 {
			font-size: 1.5rem;
		}
	}
</style>
