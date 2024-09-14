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

<section class="flex flex-col justify-center items-center min-h-screen p-4 bg-white text-black relative overflow-hidden">
	<div class="absolute inset-0 z-0 opacity-5">
		<div class="absolute top-0 left-0 w-40 h-40 border-t-4 border-l-4 border-black"></div>
		<div class="absolute bottom-0 right-0 w-40 h-40 border-b-4 border-r-4 border-black"></div>
		<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 border-4 border-black rounded-full"></div>
	</div>

	<div class="text-center space-y-8 w-full max-w-md z-10" in:fade="{{ duration: 300, delay: 300 }}">
		<h1 class="text-6xl font-bold" in:fly="{{ y: 50, duration: 500, delay: 300 }}">Peacetime Simulator</h1>
		<h2 class="text-3xl font-light" in:fly="{{ y: 50, duration: 500, delay: 400 }}">
			Wondering what your Church, Family, or Friends need? &#129302;
		</h2>
		<form
			on:submit={handleSendUsername}
			class="flex flex-col items-center space-y-4 w-full"
			method="POST"
			action="?/joinGame"
		>
			<input
				type="text"
				name="username"
				placeholder="Enter a username"
				class="w-full p-4 border-2 border-black bg-white text-black placeholder-gray-500 rounded-none focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
				bind:value={inputValue}
			/>

			<button 
				class="w-full p-4 bg-black text-white text-2xl rounded-none hover:bg-white hover:text-black border-2 border-black transition-all duration-300"
				type="submit"
			>
				Run Peacetime Simulations
			</button>
		</form>
	</div>
</section>

<style>
	:global(body) {
		background-color: white;
		color: black;
	}

	input::placeholder {
		color: #a0a0a0;
	}

	input:focus::placeholder {
		color: #d0d0d0;
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