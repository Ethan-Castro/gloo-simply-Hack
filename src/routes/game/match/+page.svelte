<script lang="ts">
    import { onMount } from 'svelte';
    import { fade, fly, scale } from 'svelte/transition';
    import { messagesStore } from '$lib/store/store';
    import { initWebSocket } from '$lib/utils/websocket';
    import { cubicInOut } from 'svelte/easing';

    onMount(() => {
        initWebSocket();
    });

    let messages: Message[] = [];
    messagesStore.subscribe(value => {
        messages = value;
        scrollToBottom();
    });

    let username: string | null = localStorage.getItem('username') || 'You';
    let numberOfUsers = 50; // Assuming 50 AImigos in the chat

    // Typing indicator state
    let isTyping = false; // Set this dynamically based on events
    let typingUser = 'AImiga'; // Name of the user who is typing

    // Function to generate initials from name
    function getInitials(name: string): string {
        return name.split(' ').map(word => word[0]).join('').toUpperCase();
    }

    // Function to scroll to the bottom of the chat container
    function scrollToBottom() {
        const chatContainer = document.getElementById('chat-container');
        if (chatContainer) {
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    }
</script>

<section class="relative min-h-screen bg-gradient-to-r from-purple-50 to-white overflow-hidden text-gray-900 font-poppins">
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
    <div class="relative z-10 container mx-auto px-4 py-12 flex flex-col items-center">
        <!-- Header -->
        <div class="w-full max-w-2xl bg-white rounded-3xl shadow-xl overflow-hidden">
            <div class="p-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center">
                <h1 class="text-2xl font-bold">Simulation Environment</h1>
                <p class="text-sm mt-1">{numberOfUsers} AImigos in the chat</p>
            </div>

            <!-- Chat Messages Container -->
            <div id="chat-container" class="flex-1 overflow-y-auto p-6 bg-gray-50 space-y-6">
                {#each messages as message (message.time)}
                    <div
                        class="chat {message.username === username ? 'chat-end' : 'chat-start'} flex items-start"
                        in:fly={{ y: 20, duration: 300, easing: cubicInOut }}
                    >
                        <!-- Initials Avatar -->
                        <div class="avatar flex-shrink-0">
                            <div class="initials-avatar bg-purple-600 text-white flex items-center justify-center rounded-full w-12 h-12 font-bold">
                                {getInitials(message.username)}
                            </div>
                        </div>

                        <!-- Message Content -->
                        <div class="ml-4">
                            <div class="flex items-center">
                                <h3 class="text-sm font-semibold text-purple-800">{message.username}</h3>
                                <time class="text-xs text-gray-500 ml-2">
                                    {new Date(message.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </time>
                            </div>
                            <div class="mt-1">
                                <div class="inline-block px-4 py-2 rounded-lg shadow-md {message.username === username ? 'bg-blue-500 text-white' : 'bg-white text-gray-900'}">
                                    {message.message}
                                </div>
                            </div>
                            <div class="text-xs text-gray-400 mt-1">
                                {message.status}
                            </div>
                        </div>
                    </div>
                {/each}

                <!-- Typing Indicator -->
                {#if isTyping}
                    <div
                        class="chat chat-start flex items-start"
                        in:fly={{ y: 20, duration: 300, easing: cubicInOut }}
                    >
                        <!-- Initials Avatar -->
                        <div class="avatar flex-shrink-0">
                            <div class="initials-avatar bg-purple-600 text-white flex items-center justify-center rounded-full w-12 h-12 font-bold">
                                {getInitials(typingUser)}
                            </div>
                        </div>

                        <!-- Typing Indicator Content -->
                        <div class="ml-4">
                            <div class="flex items-center">
                                <h3 class="text-sm font-semibold text-purple-800">{typingUser}</h3>
                                <span class="text-xs text-gray-500 ml-2">is typing...</span>
                            </div>
                            <div class="mt-1">
                                <div class="inline-block px-4 py-2 rounded-lg bg-gray-300 text-gray-900">
                                    <div class="flex space-x-1">
                                        <div class="dot bg-gray-500 w-2 h-2 rounded-full animate-bounce"></div>
                                        <div class="dot bg-gray-500 w-2 h-2 rounded-full animate-bounce animation-delay-200"></div>
                                        <div class="dot bg-gray-500 w-2 h-2 rounded-full animate-bounce animation-delay-400"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/if}
            </div>
        </div>
    </div>
</section>

<style>
    @keyframes float {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(180deg); }
    }

    @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-8px); }
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

    /* Initials Avatar Styles */
    .initials-avatar {
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
        font-size: 0.875rem;
    }

    /* Custom scrollbar for the chat messages */
    #chat-container::-webkit-scrollbar {
        width: 8px;
    }
    #chat-container::-webkit-scrollbar-track {
        background: transparent;
    }
    #chat-container::-webkit-scrollbar-thumb {
        background-color: rgba(107, 114, 128, 0.5);
        border-radius: 4px;
    }

    /* Chat Bubble Styles */
    .chat-bubble {
        transition: background-color 0.3s ease, color 0.3s ease;
    }

    /* Typing Indicator Dots */
    .dot {
        width: 8px;
        height: 8px;
        background-color: #6b7280; /* Gray-500 */
        border-radius: 50%;
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
        .container {
            max-width: 90%;
        }

        #chat-container {
            max-height: 70vh;
        }

        .initials-avatar {
            width: 3rem;
            height: 3rem;
            font-size: 1rem;
        }

        .chat-header {
            font-size: 0.9rem;
        }

        .chat-bubble {
            font-size: 0.9rem;
        }

        .chat-footer {
            font-size: 0.7rem;
        }
    }

    /* Poppins Font Import */
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

    /* Smooth scroll behavior */
    html {
        scroll-behavior: smooth;
    }
</style>
