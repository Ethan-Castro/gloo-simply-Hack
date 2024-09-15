<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly, scale } from 'svelte/transition';
  import { spring } from 'svelte/motion';
  import { cubicInOut } from 'svelte/easing';
  
  let showContent = false;
  
  onMount(() => {
      showContent = true;
      document.body.style.overflowX = 'hidden';
  });

  const teamMembers = [
      {
          name: "Ethan Castro",
          description: "An AI enthusiast passionate about using it to make education, healthcare, institutions, and work more efficient.",
          linkedin: "https://www.linkedin.com/in/ethan-castro-926537165/",
          github: "https://github.com/Ethan-Castro/"
      },
      {
          name: "Jon Legasa",
          description: "An innovative genius with an insane reservoir of self taught knowledge.",
          linkedin: "https://www.linkedin.com/in/jon-legasa-615986253/",
          github: "https://github.com/jonxlegasa"
      }
  ];
  
  let y;
  $: scrolled = spring(0);
  $: scrolled.set(y);
  
  function getInitials(name: string): string {
      return name.split(' ').map(word => word[0]).join('').toUpperCase();
  }

  function handleSocialClick(url: string) {
      window.open(url, '_blank', 'noopener,noreferrer');
  }
</script>

<svelte:window bind:scrollY={y}/>

<section class="relative min-h-screen bg-gradient-to-r from-purple-50 to-white overflow-hidden text-black">
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
          <div 
              class="text-center mb-12"
              in:fade={{ duration: 300 }}
          >
              <h1 
                  in:fly={{ y: -50, duration: 1000, easing: cubicInOut }} 
                  class="text-5xl sm:text-7xl font-extrabold text-black mb-4"
              >
                  About Us
              </h1>
              <p 
                  in:fade={{ duration: 1000, delay: 800 }} 
                  class="text-lg sm:text-xl font-semibold text-black mb-8"
              >
                  We are dedicated to revolutionizing AI simulations, making them more accessible and understandable for everyone.
              </p>
          </div>

          <!-- Our Vision Section -->
          <div 
              class="about-section bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-3xl p-8 mb-12 shadow-lg transition transform hover:scale-105"
              in:fly={{ y: 50, duration: 1000, delay: 200 }}
              out:scale
          >
              <h2 class="text-3xl font-semibold text-black mb-4">Our Vision</h2>
              <p class="text-black">
                We're Ethan and Jon, NYC students revolutionizing how Churches, Non-Profits, and Public Institutions tackle challenges. Our solution is a platform to run AI-powered simulations for risk-free experiments, resource optimization, and data-driven decisions.

              </p>
          </div>

          <!-- Meet the Team Section -->
          <div 
              class="about-section bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-3xl p-8 mb-12 shadow-lg transition transform hover:scale-105"
              in:fly={{ y: 50, duration: 1000, delay: 400 }}
              out:scale
          >
              <h2 class="text-3xl font-semibold text-black mb-4">Meet the Team</h2>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {#each teamMembers as member, index}
                      <div 
                          class="team-member bg-white bg-opacity-30 p-6 rounded-2xl shadow-md hover:shadow-lg transition transform hover:scale-105"
                          in:fly={{ y: 50, duration: 1000, delay: 600 + index * 200, easing: cubicInOut }}
                          out:scale
                      >
                          <!-- Initials Avatar -->
                          <div class="initials-avatar bg-purple-600 text-white flex items-center justify-center rounded-full w-16 h-16 font-bold text-xl mb-4">
                              {getInitials(member.name)}
                          </div>
                          <h3 class="text-2xl font-semibold text-black mb-2">{member.name}</h3>
                          <p class="text-black mb-4">{member.description}</p>
                          <div class="social-links flex space-x-4">
                              <button 
                                  on:click={() => handleSocialClick(member.linkedin)} 
                                  class="social-link bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-full transition duration-300"
                              >
                                  LinkedIn
                              </button>
                              <button 
                                  on:click={() => handleSocialClick(member.github)} 
                                  class="social-link bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-full transition duration-300"
                              >
                                  GitHub
                              </button>
                          </div>
                      </div>
                  {/each}
              </div>
          </div>

          <!-- Our Journey Section -->
          <div 
              class="about-section bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-3xl p-8 shadow-lg transition transform hover:scale-105"
              in:fly={{ y: 50, duration: 1000, delay: 1000 }}
              out:scale
          >
              <h2 class="text-3xl font-semibold text-black mb-4">Our Journey</h2>
              <p class="text-black">
                  We both discovered AI right before ChatGPT, and have been hooked ever since. 
              </p>
          </div>
      {/if}
  </div>
</section>

<style>
  @keyframes float {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(180deg); }
  }

  html {
      scroll-behavior: smooth;
  }

  h1, h2, h3 {
      font-family: 'Poppins', sans-serif;
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

  .initials-avatar {
      background-color: #9333ea;
      color: #ffffff;
      font-family: 'Poppins', sans-serif;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
  }

  .about-section {
      position: relative;
  }

  .about-section::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
      transform: rotate(45deg);
      pointer-events: none;
  }

  .team-member {
      background-color: rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(5px);
      border-radius: 1rem;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .team-member:hover {
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }

  .social-links .social-link {
      display: inline-block;
      text-align: center;
  }

  @media (max-width: 640px) {
      .container {
          padding: 60px 20px;
      }

      h1 {
          font-size: 3rem;
      }

      h2 {
          font-size: 2rem;
      }

      h3 {
          font-size: 1.5rem;
      }

      .team-member {
          padding: 1rem;
      }

      .social-links .social-link {
          padding: 0.5rem 1rem;
          font-size: 0.9rem;
      }
  }
</style>