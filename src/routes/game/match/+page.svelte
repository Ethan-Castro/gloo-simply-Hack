<script lang="ts">
	import { initWebSocket, sendWebSocketMessage } from '$lib/utils/websocket';
	import { messagesStore } from '$lib/store/store';
	import { onMount } from 'svelte';
	import type { Message } from '$lib/models/socketio';
	import { fly } from 'svelte/transition';
  
	onMount(() => {
	  initWebSocket();
	});
  
	let messages: any = $messagesStore;
	let username: string | null = localStorage.getItem('username');
	let numberOfUsers = 50; // Assuming 50 AImigos in the chat
  
	// Typing indicator state
	let isTyping = true; // Set this dynamically based on events
	let typingUser = 'AImiga'; // Name of the user who is typing
  
	async function handleSendMessage(event: Event): Promise<void> {
	  event.preventDefault(); // Prevent the default form submission
	  const form = event.target as HTMLFormElement;
	  const messageInput = form.querySelector('#message') as HTMLTextAreaElement;
  
	  try {
		let newMessage: Message = {
		  username: username,
		  status: 'Sent',
		  message: messageInput.value,
		  time: Date.now()
		};
  
		sendWebSocketMessage(newMessage);
		messageInput.value = '';
	  } catch (error) {
		console.log('Message send failed');
	  }
	}
  </script>
  
  <section class="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
	<div class="shadow-2xl rounded-lg container w-full max-w-md mx-auto flex flex-col h-[80vh] bg-white overflow-hidden">
	  <!-- Header -->
	  <div class="p-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center">
		<h1 class="text-2xl font-bold">Simulation Environment</h1>
		<p class="text-sm mt-1">{numberOfUsers} AImigos in the chat</p>
	  </div>
  
	  <!-- Chat Messages Container -->
	  <div class="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
		{#each $messagesStore as message (message.time)}
		  <div
			class="chat {message.username === username ? 'chat-end' : 'chat-start'}"
			in:fly={{ y: 20, duration: 300 }}
		  >
			<div class="chat-image avatar">
			  <div class="w-10 h-10 rounded-full overflow-hidden">
				<!-- User Avatar -->
				<img src="{message.username === username ? 'path_to_user_avatar' : 'path_to_other_user_avatar'}" alt="{message.username} Avatar" />
			  </div>
			</div>
			<div class="chat-header text-gray-700">
			  {message.username}
			  <time class="text-xs opacity-50 ml-2">
				{new Date(message.time).toLocaleTimeString()}
			  </time>
			</div>
			<div class="chat-bubble {message.username === username ? 'bg-blue-500 text-white' : 'bg-white text-gray-900'} shadow-md">
			  {message.message}
			</div>
			<div class="chat-footer text-xs opacity-50 text-gray-600">
			  {message.status}
			</div>
		  </div>
		{/each}
  
		<!-- Typing Indicator -->
		{#if isTyping}
		  <div
			class="chat chat-start"
			in:fly={{ y: 20, duration: 300 }}
		  >
			<div class="chat-image avatar">
			  <div class="w-10 h-10 rounded-full overflow-hidden">
				<!-- AImiga Avatar -->
				<img src="path_to_aimiga_avatar" alt="AImiga Avatar" />
			  </div>
			</div>
			<div class="chat-header text-gray-700">
			  {typingUser}
			  <span class="text-xs opacity-50 ml-2">is typing...</span>
			</div>
			<div class="chat-bubble bg-gray-300 text-gray-900">
			  <!-- Typing Indicator Animation -->
			  <div class="typing-indicator flex space-x-1">
				<div class="dot bg-gray-500 animate-bounce"></div>
				<div class="dot bg-gray-500 animate-bounce animation-delay-200"></div>
				<div class="dot bg-gray-500 animate-bounce animation-delay-400"></div>
			  </div>
			</div>
		  </div>
		{/if}
	  </div>
  
	  <!-- Message Input Form -->
	  <form
		on:submit={handleSendMessage}
		class="flex items-center p-4 space-x-2 bg-gray-100"
	  >
		<textarea
		  class="textarea textarea-bordered flex-1 resize-none h-12 px-4 py-2 rounded-full bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
		  placeholder="Type your message..."
		  id="message"
		  name="message"
		  rows="1"
		></textarea>
		<button
		  type="submit"
		  class="btn btn-primary h-12 w-12 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
		>
		  <!-- Send Icon -->
		  <svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6 transform rotate-45"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		  >
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
			  d="M3 10l9-9m0 0l9 9m-9-9v18" />
		  </svg>
		</button>
	  </form>
	</div>
  </section>
  
  <style>
	/* Custom scrollbar for the chat messages */
	.flex-1::-webkit-scrollbar {
	  width: 6px;
	}
	.flex-1::-webkit-scrollbar-track {
	  background: transparent;
	}
	.flex-1::-webkit-scrollbar-thumb {
	  background-color: rgba(107, 114, 128, 0.5);
	  border-radius: 3px;
	}
  
	/* Typing indicator animation */
	.typing-indicator .dot {
	  width: 8px;
	  height: 8px;
	  background-color: #6b7280; /* Gray-500 */
	  border-radius: 50%;
	}
  
	.animate-bounce {
	  animation: bounce 1s infinite;
	}
  
	.animation-delay-200 {
	  animation-delay: 0.2s;
	}
  
	.animation-delay-400 {
	  animation-delay: 0.4s;
	}
  
	@keyframes bounce {
	  0%, 80%, 100% {
		transform: translateY(0);
	  }
	  40% {
		transform: translateY(-8px);
	  }
	}
  </style>
  