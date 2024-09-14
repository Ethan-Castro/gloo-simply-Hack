<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import Leaderboard from '$lib/components/Leaderboard.svelte';
  
	let showContent = false;
	let activeTab = 'topSimulators';
  
	// Mock data - replace with actual data fetching logic and reword this section as PRAYER REQUESTS
	let topSimulators = [
	  { rank: 1, name: "Eddie", avatar: "https://i.pravatar.cc/150?img=1", specialty: "For peace in this country.", score: 9850 },
	  { rank: 2, name: "Malik", avatar: "https://i.pravatar.cc/150?img=2", specialty: "For a job in my specialty to provide for my family.", score: 9720 },
	  { rank: 3, name: "Ethan", avatar: "https://i.pravatar.cc/150?img=3", specialty: "To stay consistent with my daily devotional.", score: 9540 },
	  // Add more simulators as needed
	];
  //Reword this section as PRAISE REPORTS
	let popularScenarios = [
	  { rank: 1, title: "I am healed of my physical & emotional pain.", creator: "Stacy", participants: 15280 },
	  { rank: 2, title: "God blessed me with a job in a health atmosphere.", creator: "Avis", participants: 12450 },
	  { rank: 3, title: "I evangelized to two co-workers.", creator: "Pete", participants: 11890 },
	  // Add more scenarios as needed
	];
  
	onMount(() => {
	  showContent = true;
	});
  </script>
  
  <section class="bg-white min-h-screen container mx-auto px-4 py-8">
	{#if showContent}
	  <div in:fade="{{ duration: 300 }}" class="text-center">
		<h1 class="text-5xl font-bold mb-4 text-black">Simulation Leaderboard</h1>
		<p class="text-xl text-gray-700 mb-8">Discover top simulators and popular scenarios in our community</p>
  
		<div class="bg-white rounded-xl shadow-xl overflow-hidden">
		  <div class="flex border-b border-gray-300">
			<button 
			  class="flex-1 py-4 px-6 text-lg font-semibold transition duration-300 {activeTab === 'topSimulators' ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-200'}"
			  on:click={() => activeTab = 'topSimulators'}
			>
			  Top Simulators
			</button>
			<button 
			  class="flex-1 py-4 px-6 text-lg font-semibold transition duration-300 {activeTab === 'popularScenarios' ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-200'}"
			  on:click={() => activeTab = 'popularScenarios'}
			>
			  Popular Scenarios
			</button>
		  </div>
  
		  <div class="p-6">
			{#if activeTab === 'topSimulators'}
			  <ul class="space-y-6">
				{#each topSimulators as simulator, index}
				  <li in:fly="{{ y: 50, duration: 300, delay: index * 100 }}" class="flex items-center bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition duration-300">
					<span class="text-2xl font-bold text-black w-12">{simulator.rank}</span>
					<img src={simulator.avatar} alt={simulator.name} class="w-12 h-12 rounded-full mx-4" />
					<div class="flex-grow">
					  <h3 class="text-xl font-semibold text-gray-800">{simulator.name}</h3>
					  <p class="text-gray-600">Specialty: {simulator.specialty}</p>
					</div>
					<span class="text-xl font-bold text-black">{simulator.score.toLocaleString()} pts</span>
				  </li>
				{/each}
			  </ul>
			{:else}
			  <ul class="space-y-6">
				{#each popularScenarios as scenario, index}
				  <li in:fly="{{ y: 50, duration: 300, delay: index * 100 }}" class="bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition duration-300">
					<div class="flex items-center">
					  <span class="text-2xl font-bold text-black w-12">{scenario.rank}</span>
					  <div class="flex-grow">
						<h3 class="text-xl font-semibold text-gray-800">{scenario.title}</h3>
						<p class="text-gray-600">Created by: {scenario.creator}</p>
					  </div>
					  <span class="text-xl font-bold text-black">{scenario.participants.toLocaleString()} participants</span>
					</div>
				  </li>
				{/each}
			  </ul>
			{/if}
		  </div>
		</div>
	  </div>
	{/if}
  </section>
  
  <style>
	/* Add any additional styles here if needed */
  </style>
  