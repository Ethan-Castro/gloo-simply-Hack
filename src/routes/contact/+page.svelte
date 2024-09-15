<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly, scale } from 'svelte/transition';
  import { spring } from 'svelte/motion';
  import { cubicInOut } from 'svelte/easing';

  let showContacts = false;

  onMount(() => {
      showContacts = true;
      document.body.style.overflowX = 'hidden';
  });

  const contacts = [
      { name: "Ethan Castro", email: "theethancastro@gmail.com" },
      { name: "Jon Legasa", email: "jon.legasa@gmail.com" }
  ];

  let y;
  $: scrolled = spring(0);
  $: scrolled.set(y);

  // Function to generate initials from name
  function getInitials(name: string): string {
      return name.split(' ').map(word => word[0]).join('').toUpperCase();
  }
</script>

<svelte:window bind:scrollY={y}/>

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
  <div class="relative z-10 container mx-auto px-4 py-12">
      {#if showContacts}
          <div 
              class="text-center mb-12"
              in:fade={{ duration: 300 }}
          >
              <h1 
                  in:fly={{ y: -50, duration: 1000, easing: cubicInOut }} 
                  class="text-5xl sm:text-7xl font-extrabold text-black-800 mb-4"
              >
                  Contact Us
              </h1>
              <p 
                  in:fade={{ duration: 1000, delay: 800 }} 
                  class="text-lg sm:text-xl font-semibold text-black-700 mb-8"
              >
                  We're here to help! Reach out to us for any inquiries or support.
              </p>
          </div>

          <div class="flex justify-center mb-12">
              <div class="w-full max-w-3xl">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {#each contacts as contact, index}
                          <div 
                              class="contact-card bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105"
                              in:fly={{ y: 50, duration: 1000, delay: index * 200, easing: cubicInOut }}
                              out:scale
                          >
                              <div class="flex items-center space-x-4">
                                  <!-- Initials Avatar -->
                                  <div class="initials-avatar bg-purple-500 text-white flex items-center justify-center rounded-full w-16 h-16 font-bold text-xl">
                                      {getInitials(contact.name)}
                                  </div>
                                  <div>
                                      <h2 class="text-2xl font-semibold text-purple-800">{contact.name}</h2>
                                      <a href={`mailto:${contact.email}`} class="text-purple-600 hover:underline">{contact.email}</a>
                                  </div>
                              </div>
                          </div>
                      {/each}
                  </div>
              </div>
          </div>

          <p 
              class="contact-info text-center text-lg sm:text-xl text-black-700"
              in:fade={{ duration: 1000, delay: 800 }}
          >
              Feel free to reach out with ideas or questions. God bless!
          </p>
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

  /* Initials Avatar Styles */
  .initials-avatar {
      background-color: #9333ea; /* Purple-600 */
      color: #ffffff;
      font-family: 'Poppins', sans-serif;
      font-weight: bold;
  }

  /* Contact Card Styles */
  .contact-card {
      background-color: #ffffff; /* White background */
      border-radius: 2rem; /* Rounded corners */
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .contact-card:hover {
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }

  .contact-card h2 {
      color: #6b21a8; /* Purple-800 */
  }

  .contact-card a {
      color: #9333ea; /* Purple-600 */
      transition: color 0.3s ease;
  }

  .contact-card a:hover {
      color: #7e22ce; /* Darker Purple-600 */
      text-decoration: underline;
  }

  .contact-info {
      font-family: 'Poppins', sans-serif;
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

      .contact-card {
          padding: 1.5rem;
      }

      .contact-card h2 {
          font-size: 1.5rem;
      }

      .contact-card a {
          font-size: 1rem;
      }
  }
</style>
