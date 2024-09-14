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
    { name: "Ethan", email: "theethancastro@gmail.com" },
    { name: "Jon", email: "Jon@gmail.com" }
  ];

  let y;
  $: scrolled = spring(0);
  $: scrolled.set(y);
</script>

<svelte:window bind:scrollY={y}/>

<div class="container" style="transform: translateY({$scrolled * 0.1}px)">
  <h1 in:fly="{{ y: -50, duration: 1000, easing: cubicInOut }}" out:fade>Contact Us</h1>

  {#if showContacts}
    <div class="contacts-grid">
      {#each contacts as contact, index}
        <div 
          class="contact-card"
          in:fly="{{ y: 50, duration: 1000, delay: index * 200, easing: cubicInOut }}"
          out:scale
        >
          <h2>{contact.name}</h2>
          <a href="mailto:{contact.email}">{contact.email}</a>
        </div>
      {/each}
    </div>

    <p class="contact-info" in:fade="{{ duration: 1000, delay: 800 }}">
      Feel free to reach out to us for any inquiries or support.
    </p>
  {/if}
</div>

<style>
  :global(html, body) {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }

  :global(body) {
    font-family: 'Arial', sans-serif;
    background-color: #ffffff; /* White background */
    color: #9915f7; /* Black text */
    transition: background-color 0.5s ease, color 0.5s ease;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 80px 40px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: 4em;
    margin-bottom: 50px;
    text-align: center;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }

  .contacts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    width: 100%;
    max-width: 800px;
  }

  .contact-card {
    padding: 30px;
    border-radius: 20px;
    background-color: #ffffff; /* White background */
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    transform: translateZ(0);
  }

  .contact-card:hover {
    transform: translateY(-10px) translateZ(0);
  }

  .contact-card h2 {
    font-size: 1.8em;
    margin-bottom: 15px;
    color: #9915f7; /* Black text */
  }

  .contact-card a {
    text-decoration: none;
    color: #000000; /* Black text */
    transition: color 0.3s ease;
  }

  .contact-card a:hover {
    text-decoration: underline;
  }

  .contact-info {
    margin-top: 50px;
    text-align: center;
    font-size: 1.2em;
    max-width: 600px;
    color: #000000; /* Black text */
  }

  @media (max-width: 600px) {
    .container {
      padding: 60px 20px;
    }

    h1 {
      font-size: 3em;
    }

    .contacts-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
