<script lang="ts">
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';
    
    // Mock data - replace with actual data fetching logic
    let user = {
      name: "Alex Johnson",
      profilePic: "https://i.pravatar.cc/300",
      chatsCount: 30,
      savedChatsCount: 57,
      contactsCount: 283
    };
    
    let showContent = false;
    
    onMount(() => {
      showContent = true;
    });
    
    // Mock saved chats - replace with actual data
    let savedChats = [
      { id: 1, title: "How do I share my faith at work?", date: "2024-09-10" },
      { id: 2, title: "Praise Report: Found a new job!", date: "2024-09-08" },
      { id: 3, title: "Prayer for a new job!", date: "2024-09-05" }
    ];
    
    // Mock contacts - replace with actual data
    let contacts = [
      { id: 1, name: "Emma Watson", avatar: "https://i.pravatar.cc/150?img=1" },
      { id: 2, name: "John Doe", avatar: "https://i.pravatar.cc/150?img=2" },
      { id: 3, name: "Sarah Smith", avatar: "https://i.pravatar.cc/150?img=3" }
    ];
  </script>
  
  <div class="container mx-auto px-4 py-8">
    {#if showContent}
      <!-- Profile Card -->
      <div in:fade="{{ duration: 300 }}" class="bg-gray-900 rounded-3xl shadow-lg overflow-hidden transition transform hover:scale-105">
        <div class="relative h-48 bg-gradient-to-r from-blue-500 to-purple-600">
          <div class="absolute -bottom-16 left-6">
            <img in:fly="{{ y: 50, duration: 500 }}" src={user.profilePic} alt={user.name} class="w-32 h-32 rounded-full border-4 border-white shadow-xl" />
          </div>
        </div>
        <div class="pt-20 px-6 pb-6">
          <h1 class="text-3xl font-semibold text-white">{user.name}</h1>
          <div class="mt-4 flex space-x-6 text-gray-300">
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
      <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Saved Chats -->
        <div in:fly="{{ x: -50, duration: 500, delay: 300 }}" class="bg-gray-900 rounded-2xl shadow-md p-6 transition hover:shadow-lg">
          <h2 class="text-2xl font-semibold text-white mb-4">Saved Chats</h2>
          <ul class="space-y-4">
            {#each savedChats as chat}
              <li class="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition duration-300">
                <a href={`/chat/${chat.id}`} class="text-blue-400 hover:text-blue-300 font-medium">{chat.title}</a>
                <p class="text-sm text-gray-400 mt-1">{chat.date}</p>
              </li>
            {/each}
          </ul>
        </div>
  
        <!-- Contacts -->
        <div in:fly="{{ x: 50, duration: 500, delay: 300 }}" class="bg-gray-900 rounded-2xl shadow-md p-6 transition hover:shadow-lg">
          <h2 class="text-2xl font-semibold text-white mb-4">Contacts</h2>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {#each contacts as contact}
              <li class="flex items-center space-x-4 bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition duration-300">
                <img src={contact.avatar} alt={contact.name} class="w-10 h-10 rounded-full shadow-sm" />
                <span class="text-white">{contact.name}</span>
              </li>
            {/each}
          </ul>
        </div>
      </div>
    {/if}
  </div>
  
  <style>
    /* Custom Styles for Enhanced Aesthetics */
    :global(body) {
      background-color: #ffffff; /* White Background */
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      color: #000000; /* Black Text */
    }
  
    .container {
      max-width: 900px;
    }
  
    h1, h2 {
      transition: color 0.3s ease;
    }
  
    h1:hover, h2:hover {
      color: #4f46e5; /* Indigo-600 on hover */
    }
  
    /* Responsive Image Adjustment */
    @media (max-width: 768px) {
      .container {
        padding: 2rem 1rem;
      }
  
      .absolute.-bottom-16.left-6 {
        left: 50%;
        transform: translateX(-50%);
      }
    }
  </style>
  