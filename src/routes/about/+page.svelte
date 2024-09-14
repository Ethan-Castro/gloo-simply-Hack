<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly, scale } from 'svelte/transition';
  import { spring } from 'svelte/motion';
  
  let showContent = false;
  
  onMount(() => {
    showContent = true;
    document.body.style.overflowX = 'hidden';
  });

  const teamMembers = [
    {
      name: "Ethan Castro",
      description: "A tech enthusiast with a keen interest in AI and machine learning. Ethan brings creativity and technical expertise to our projects.",
      linkedin: "https://www.linkedin.com/in/ethan-castro-926537165/",
      github: "https://github.com/Ethan-Castro/"
    },
    {
      name: "Jon Legasa",
      description: "An innovative thinker with a passion for problem-solving. Jon's analytical skills and strategic thinking drive our project forward.",
      linkedin: "https://www.linkedin.com/in/jon-legasa-615986253/",
      github: "https://github.com/jonxlegasa"
    }
  ];

  let y;
  $: scrolled = spring(0);
  $: scrolled.set(y);
</script>

<svelte:window bind:scrollY={y}/>

<div class="container" style="transform: translateY({$scrolled * 0.2}px)">
  <h1 in:fly="{{ y: -50, duration: 1000 }}" out:fade>About Us</h1>
  
  {#if showContent}
    <div class="about-section" in:fly="{{ y: 50, duration: 1000, delay: 200 }}" out:scale>
      <h2>Our Vision</h2>
      <p>We are Ethan Castro and Jon Legasa, two ambitious young teens from Baruch with a passion for technology and innovation. Our goal is to revolutionize the world of AI simulations, making them more accessible and understandable for everyone.</p>
    </div>

    <div class="about-section" in:fly="{{ y: 50, duration: 1000, delay: 400 }}" out:scale>
      <h2>Meet the Team</h2>
      
      {#each teamMembers as member, index}
        <div class="team-member" in:fly="{{ y: 50, duration: 1000, delay: 600 + index * 200 }}" out:scale>
          <h3>{member.name}</h3>
          <p>{member.description}</p>
          <div class="social-links">
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={member.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      {/each}
    </div>

    <div class="about-section" in:fly="{{ y: 50, duration: 1000, delay: 1000 }}" out:scale>
      <h2>Our Journey</h2>
      <p>As students at Baruch, we've combined our academic knowledge with our passion for technology to create cutting-edge AI simulations. We believe in the power of AI to transform industries and improve lives.</p>
    </div>
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
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    background-attachment: fixed;
    background-size: cover;
    font-family: 'Arial', sans-serif;
    color: #ffffff;
  }

  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 80px 40px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h1 {
    font-size: 4em;
    margin-bottom: 50px;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }

  .about-section {
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 40px;
    margin-bottom: 50px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    border: 2px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
    transform: translateZ(0);
    overflow: hidden;
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

  .about-section:hover {
    transform: translateY(-10px) translateZ(0);
    box-shadow: 0 20px 45px rgba(0, 0, 0, 0.3);
  }

  .about-section h2 {
    color: #9915f7;
    margin-top: 0;
    font-size: 2.2em;
    margin-bottom: 25px;
    position: relative;
    display: inline-block;
  }

  .about-section h2::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #ffffff;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  .about-section:hover h2::after {
    transform: scaleX(1);
  }

  .team-member {
    margin-bottom: 40px;
  }

  .team-member h3 {
    color: #9915f7;
    margin-bottom: 15px;
    font-size: 1.8em;
    position: relative;
    display: inline-block;
  }

  .team-member h3::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #ffffff;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  .team-member:hover h3::after {
    transform: scaleX(1);
  }

  .team-member p {
    margin-bottom: 20px;
    line-height: 1.8;
    font-size: 1.1em;
  }

  .social-links a {
    color: #9915f7;
    text-decoration: none;
    margin-right: 20px;
    padding: 8px 15px;
    border-radius: 30px;
    background-color: rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
    display: inline-block;
  }

  .social-links a:hover {
    background-color: rgba(255, 255, 255, 0.4);
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 600px) {
    .container {
      padding: 60px 20px;
    }

    h1 {
      font-size: 3em;
    }

    .about-section {
      padding: 30px;
    }
  }
</style>