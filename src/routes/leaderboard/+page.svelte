<script lang="ts">
    import { onMount } from 'svelte';
    import { fade, fly, scale } from 'svelte/transition';

    let showContent = false;
    let activeTab = 'prayerRequests';

    // Mock data - replace with actual data fetching logic
    let prayerRequests = [
        { rank: 1, name: "Summit Church NYC", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdg2oyDvUCwbeWRsobZRrk_h82Vu2JOdOadw&s", request: "Prayer", priority: 9850 },
        { rank: 2, name: "NYC Church", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdg2oyDvUCwbeWRsobZRrk_h82Vu2JOdOadw&s", request: "Funds.", priority: 9720 },
        { rank: 3, name: "Church NY", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdg2oyDvUCwbeWRsobZRrk_h82Vu2JOdOadw&s", request: "Caretakers.", priority: 9540 },
        // Add more prayer requests as needed
    ];

    let praiseReports = [
        { rank: 1, title: "Community food drive fed 200 families", reporter: "Stacy", participants: 15280 },
        { rank: 2, title: "Youth mentorship program launched with 50 mentors.", reporter: "Avis", participants: 12450 },
        { rank: 3, title: "Free health clinic served 150 uninsured individuals.", reporter: "Pete", participants: 11890 },
        // Add more praise reports as needed
    ];

    onMount(() => {
        showContent = true;
    });

    function handleTabClick(tab: string) {
        activeTab = tab;
    }

    function handleRequestClick(id: number) {
        console.log(`Clicked on prayer request ${id}`);
        // Implement navigation or modal for detailed view if needed
    }

    function handleReportClick(id: number) {
        console.log(`Clicked on praise report ${id}`);
        // Implement navigation or modal for detailed view if needed
    }
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
            <div in:fade={{ duration: 300 }} class="text-center">
                <h1 in:fly={{ y: 50, duration: 1000, delay: 300 }} class="text-5xl sm:text-7xl font-extrabold text-purple-800 mb-4">
                    Community Impact Board
                </h1>
                <p in:fade={{ duration: 1000, delay: 800 }} class="text-lg sm:text-xl font-semibold text-purple-700 mb-8">
                    Explore and celebrate the prayers and praises of our community
                </p>

                <!-- Tabs for Prayer Requests and Praise Reports -->
                <div class="bg-white rounded-3xl shadow-lg overflow-hidden mx-auto max-w-3xl">
                    <div class="flex border-b border-purple-300">
                        <button 
                            class="flex-1 py-4 px-6 text-lg font-semibold transition duration-300 {activeTab === 'prayerRequests' ? 'bg-purple-600 text-white' : 'text-purple-600 hover:bg-purple-100'}"
                            on:click={() => handleTabClick('prayerRequests')}
                        >
                            Needs Addressed
                        </button>
                        <button 
                            class="flex-1 py-4 px-6 text-lg font-semibold transition duration-300 {activeTab === 'praiseReports' ? 'bg-purple-600 text-white' : 'text-purple-600 hover:bg-purple-100'}"
                            on:click={() => handleTabClick('praiseReports')}
                        >
                            Positive Outcomes
                        </button>
                    </div>

                    <div class="p-6">
                        {#if activeTab === 'prayerRequests'}
                            <ul class="space-y-6">
                                {#each prayerRequests as request, index}
                                    <li 
                                        in:fly={{ y: 50, duration: 300, delay: index * 100 }} 
                                        class="flex items-center bg-white rounded-3xl p-4 shadow-md hover:shadow-xl transition duration-300 cursor-pointer transform hover:scale-105"
                                        on:click={() => handleRequestClick(request.rank)}
                                    >
                                        <span class="text-2xl font-bold text-purple-800 w-12">{request.rank}</span>
                                        <img src={request.avatar} alt={request.name} class="w-12 h-12 rounded-full mx-4 border-2 border-purple-500" />
                                        <div class="flex-grow">
                                            <h3 class="text-xl font-semibold text-purple-700">{request.name}</h3>
                                            <p class="text-purple-600">Request: {request.request}</p>
                                        </div>
                                        <span class="text-xl font-bold text-purple-800">{request.priority.toLocaleString()} lives touched</span>
                                    </li>
                                {/each}
                            </ul>
                        {:else}
                            <ul class="space-y-6">
                                {#each praiseReports as report, index}
                                    <li 
                                        in:fly={{ y: 50, duration: 300, delay: index * 100 }} 
                                        class="bg-white rounded-3xl p-4 shadow-md hover:shadow-xl transition duration-300 cursor-pointer transform hover:scale-105"
                                        on:click={() => handleReportClick(report.rank)}
                                    >
                                        <div class="flex items-center">
                                            <span class="text-2xl font-bold text-purple-800 w-12">{report.rank}</span>
                                            <div class="flex-grow">
                                                <h3 class="text-xl font-semibold text-purple-700">{report.title}</h3>
                                                <p class="text-purple-600">Reported by: {report.reporter}</p>
                                            </div>
                                            <span class="text-xl font-bold text-purple-800">{report.participants.toLocaleString()} Support Actions</span>
                                        </div>
                                    </li>
                                {/each}
                            </ul>
                        {/if}
                    </div>
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
    h1, h2, h3 {
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
            font-size: 2rem;
        }

        h3 {
            font-size: 1.25rem;
        }
    }
</style>
