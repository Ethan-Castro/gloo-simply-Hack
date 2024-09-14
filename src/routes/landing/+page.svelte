<script>
    import { onMount } from 'svelte';
    import { fade, fly, scale } from 'svelte/transition';
    import { elasticOut } from 'svelte/easing';
    import { tweened } from 'svelte/motion';
  
    let scrollY = tweened(0, { duration: 400, easing: elasticOut });
  
    onMount(() => {
      const handleScroll = () => {
        scrollY.set(window.scrollY);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    });
  
    const solutions = [
      { title: "Resource Triage App", description: "Optimize your ministry's resource allocation." },
      { title: "AI-Powered Prayer Insights", description: "Gain deeper understanding of your community's needs." },
      { title: "Power Parenting", description: "Empower parents with simulation-based training." }
    ];
  </script>
  
  <main class="font-sans bg-black text-white overflow-hidden">
    <!-- Hero Section with particles animation -->
    <section class="relative h-screen flex items-center justify-center">
      <div class="text-center z-10" in:fade={{ duration: 1500, delay: 300 }}>
        <h1 class="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          SIMplified
        </h1>
        <p class="text-xl mb-8 text-gray-300">Empowering Ministries Through Simulation</p>
        <a
          href="#about"
          class="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition duration-300 ease-in-out hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
        >Discover More</a>
      </div>
      <div class="absolute inset-0 overflow-hidden">
        <div class="particles"></div>
      </div>
    </section>
  
    <!-- About Us with reveal animation -->
    <section id="about" class="container mx-auto px-6 py-24">
      <div
        class="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-xl p-16 shadow-xl"
        in:fly={{ y: 50, duration: 1200, easing: elasticOut }}
      >
        <h2 class="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">About Us</h2>
        <p class="text-lg leading-relaxed text-center text-gray-300">
          At SIMplified, we harness the power of simulation to nurture Christian ministries, fostering growth and human flourishing. Our solutions empower leaders to serve with insight and compassion.
        </p>
      </div>
    </section>
  
    <!-- Solutions Section with staggered reveal -->
    <section class="py-24">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Our Solutions</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          {#each solutions as solution, i}
            <div 
              class="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-lg transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105"
              in:scale={{ duration: 600, delay: i * 200, easing: elasticOut }}
            >
              <h3 class="text-2xl font-bold mb-4 text-purple-400">{solution.title}</h3>
              <p class="text-gray-300">{solution.description}</p>
            </div>
          {/each}
        </div>
      </div>
    </section>
  
    <!-- Footer with gradient -->
    <footer class="bg-gradient-to-r from-purple-900 to-pink-900 text-white py-10">
      <div class="container mx-auto text-center">
        <p>&copy; 2024 SIMplified. Crafted with care for the community.</p>
      </div>
    </footer>
  </main>
  
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
  
    :global(body) {
      font-family: 'Poppins', sans-serif;
      background-color: black;
      overflow-x: hidden;
    }
  
    .particles {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: 
        radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px),
        radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
      background-size: 50px 50px;
      background-position: 0 0, 25px 25px;
      animation: particleAnimation 20s linear infinite;
    }
  
    @keyframes particleAnimation {
      0% { transform: translateY(0); }
      100% { transform: translateY(-50px); }
    }
  
    h1, h2, h3 {
      font-weight: 700;
    }
 
  </style>