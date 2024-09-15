<script lang="ts">
    import { onMount } from 'svelte';
    import { fade, fly, scale } from 'svelte/transition';
    
    let showCommunities = false;
    let searchQuery = '';

    // Sample data for church groups
    const churchGroups = [
        { id: 1, name: "Summit Church NYC", members: 120, image: "https://scontent-den2-1.xx.fbcdn.net/v/t39.30808-6/297278564_5641978642488939_1149765511848333368_n.png?stp=dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=536f4a&_nc_ohc=d7FD5wDtVNUQ7kNvgGg1mUx&_nc_ht=scontent-den2-1.xx&_nc_gid=AH-K3wJNY6UQhuGxUpvC7b0&oh=00_AYDNntMMdrJ7YA35hmNvEB1EDfGlnXtOFJKhheMiM1iT_A&oe=66EC7487" },
        { id: 2, name: "Brooklyn Tabernacle", members: 200, image: "https://www.goingbeyond.com/www14/wp-content/uploads/2018/04/Event-Brooklyn-Tab-6x6.jpg" },
        { id: 3, name: "Iglesia de Dios", members: 85, image: "https://mieditorial.b-cdn.net/wp-content/uploads/2020/01/COG-SHIELD-DECAL-SP.jpg" },
        { id: 4, name: "Times Square Church", members: 150, image: "https://storage.googleapis.com/clio-images/large_8766_TSChurch.jpg" },
        { id: 5, name: "Hillsong Church Manhattan", members: 95, image: "https://cdn.hillsong.com/wp-content/themes/hillsong/images/logo-outline-small.png" },
        { id: 6, name: "C3 Church", members: 110, image: "https://upload.wikimedia.org/wikipedia/commons/3/39/C3_Church_Global_logo.png" },
    ];

    onMount(() => {
        showCommunities = true;
    });

    function handleGroupClick(id: number) {
        console.log(`Clicked on group ${id}`);
        // Navigate to the group's detailed page if applicable
        // goto(`/community/${id}`);
    }

    function handleCreateChurch() {
        console.log("Create church clicked");
        // Implement navigation or modal for creating a church
    }

    function handleJoinChurch() {
        console.log("Join church clicked");
        // Implement navigation or modal for joining a church
    }

    $: filteredGroups = churchGroups.filter(group => 
        group.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
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
        {#if showCommunities}
            <h1 in:fly={{ y: 50, duration: 1000, delay: 300 }} class="text-5xl sm:text-7xl font-extrabold text-purple-800 mb-8 text-center">
                Church Communities
            </h1>
            
            <!-- Search and Action Buttons -->
            <div class="flex flex-col md:flex-row justify-between items-center mb-12 space-y-4 md:space-y-0">
                <input
                    type="text"
                    bind:value={searchQuery}
                    placeholder="Search communities..."
                    class="w-full md:w-1/2 px-6 py-3 rounded-full border-2 border-purple-500 bg-white text-gray-900 placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                />
                
                <div class="flex space-x-4">
                    <button
                        on:click={handleJoinChurch}
                        class="px-6 py-3 bg-purple-600 text-white text-lg font-semibold rounded-full hover:bg-purple-700 transition duration-300 transform hover:scale-105"
                    >
                       Join Community
                    </button>
                    <button
                        on:click={handleCreateChurch}
                        class="px-6 py-3 bg-purple-600 text-white text-lg font-semibold rounded-full hover:bg-purple-700 transition duration-300 transform hover:scale-105"
                    >
                        Create Community
                    </button>
                </div>
            </div>
            
            <!-- Communities Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {#each filteredGroups as group, index}
                    <div 
                        in:scale={{ delay: index * 50, duration: 300 }}
                        out:fade
                        class="bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                        on:click={() => handleGroupClick(group.id)}
                    >
                        <img src={group.image} alt={group.name} class="w-full h-48 object-cover rounded-t-3xl" />
                        <div class="p-6">
                            <h2 class="text-2xl font-semibold text-purple-800 mb-2">{group.name}</h2>
                            <p class="text-purple-600">{group.members} members</p>
                        </div>
                    </div>
                {/each}
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

    /* Button Pulse Animation */
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
            font-size: 3rem;
        }

        h2 {
            font-size: 1.5rem;
        }
    }
</style>
