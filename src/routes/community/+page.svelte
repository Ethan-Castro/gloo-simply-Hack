<script lang="ts">
    import { onMount } from 'svelte';
    import { fade, scale } from 'svelte/transition';

    let showCommunities = false;
    let searchQuery = '';

    // Sample data for church groups
    const churchGroups = [
        { id: 1, name: "First Baptist Church", members: 120, image: "https://picsum.photos/200/200?random=1" },
        { id: 2, name: "St. Mary's Catholic Church", members: 200, image: "https://picsum.photos/200/200?random=2" },
        { id: 3, name: "Grace Community Church", members: 85, image: "https://picsum.photos/200/200?random=3" },
        { id: 4, name: "Hope Lutheran Church", members: 150, image: "https://picsum.photos/200/200?random=4" },
        { id: 5, name: "Calvary Chapel", members: 95, image: "https://picsum.photos/200/200?random=5" },
        { id: 6, name: "New Life Assembly", members: 110, image: "https://picsum.photos/200/200?random=6" },
        { id: 7, name: "Cornerstone Presbyterian", members: 75, image: "https://picsum.photos/200/200?random=7" },
        { id: 8, name: "Bethel AME Church", members: 130, image: "https://picsum.photos/200/200?random=8" },
    ];

    onMount(() => {
        showCommunities = true;
    });

    function handleGroupClick(id: number) {
        console.log(`Clicked on group ${id}`);
    }

    function handleCreateChurch() {
        console.log("Create church clicked");
    }

    function handleJoinChurch() {
        console.log("Join church clicked");
    }

    $: filteredGroups = churchGroups.filter(group => 
        group.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
</script>

<div class="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
        <h1 class="text-4xl font-bold text-black mb-8 text-center">Church Communities</h1>
        
        <div class="flex justify-between items-center mb-6">
            <input
                type="text"
                bind:value={searchQuery}
                placeholder="Search communities..."
                class="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            
            <div class="space-x-4">
                <button
                    on:click={handleJoinChurch}
                    class="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-300"
                >
                   Join Community
                </button>
                <button
                    on:click={handleCreateChurch}
                    class="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-300"
                >
                    Create Community
                </button>
            </div>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {#if showCommunities}
                {#each filteredGroups as group, index}
                    <div 
                        in:scale={{delay: index * 50, duration: 300}}
                        out:fade
                        class="bg-gray-100 rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-xl"
                        on:click={() => handleGroupClick(group.id)}
                    >
                        <img src={group.image} alt={group.name} class="w-full h-48 object-cover" />
                        <div class="p-4">
                            <h2 class="text-xl font-semibold text-black mb-2">{group.name}</h2>
                            <p class="text-gray-600">{group.members} members</p>
                        </div>
                    </div>
                {/each}
            {/if}
        </div>
    </div>
</div> 