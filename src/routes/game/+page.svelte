<script lang="ts">
	import { sendWebSocketMessage } from '$lib/utils/websocket';
	import type { Message } from '$lib/models/socketio';
	import { goto } from '$app/navigation';
	import { fade, fly } from 'svelte/transition';

	let inputValue: string = '';

	async function handleSendUsername(event: Event): Promise<any> {
		localStorage.setItem('username', inputValue);
		const stringUsername: string | null = localStorage.getItem('username');

		let userJoining: Message = {
			username: stringUsername,
			status: 'Sent',
			message: `${stringUsername} connected`,
			time: Date.now()
		};

		event.preventDefault();
		console.log(inputValue);
		sendWebSocketMessage(userJoining);

		goto('/game/match');
	}
</script>

<section class="relative min-h-screen bg-gradient-to-r from-purple-50 to-white overflow-hidden">
	<div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex flex-col justify-center items-center text-center">
		<div class="text-center space-y-8 w-full max-w-md" in:fade="{{ duration: 300, delay: 300 }}">
			<h1 in:fly="{{ y: 50, duration: 1000, delay: 300 }}" class="text-5xl sm:text-7xl font-extrabold text-gray-900 mb-4">
				Peacetime Simulator
			</h1>
			
			<p in:fade="{{ duration: 1000, delay: 800 }}" class="text-xl sm:text-2xl text-gray-700 mb-8">
				In the text box below, enter a scenario, sermon, or situation you would like to simulate.
			</p>
			
			<form
				on:submit={handleSendUsername}
				class="flex flex-col items-center space-y-4 w-full"
				method="POST"
				action="?/joinGame"
			>
				<input
					type="text"
					name="username"
					placeholder="Enter a scenario to simulate"
					class="w-full p-4 border-2 border-purple-600 bg-white text-gray-900 placeholder-gray-500 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300"
					bind:value={inputValue}
				/>

				<button 
					class="w-full px-8 py-3 bg-purple-600 text-white text-xl font-bold rounded-full hover:bg-purple-700 transition duration-300 transform hover:scale-105"
					type="submit"
				>
					Run Peacetime Simulations
				</button>
			</form>
		</div>
	</div>

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
	:global(body) {
		background-color: white;
		color: #111827; /* gray-900 */
	}

	@keyframes float {
		0%, 100% { transform: translateY(0) rotate(0deg); }
		50% { transform: translateY(-20px) rotate(180deg); }
	}

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
</style>