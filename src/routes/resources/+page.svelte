<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly, scale } from 'svelte/transition';
  
  let searchQuery = '';
  let searchResult = '';
  let isLoading = false;
  let error = null;
  
  const API_KEY = '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'; // Your Perplexity API key
  
  let resources = [
      { name: 'Christianity Today', url: 'https://www.christianitytoday.com/', description: 'A leading evangelical Christian media organization that publishes magazines, websites, and other resources to inform and shape Christian thought and culture.' },
      { name: 'Pastor Rick Warren', url: 'https://pastorrick.com/', description: 'An influential evangelical pastor, author of bestselling books like "The Purpose Driven Life," and founder of Saddleback Church, one of the largest churches in America.' },
      { name: 'YouVersion (Bible.com)', url: 'https://www.bible.com/', description: 'A popular digital Bible platform offering multiple translations, reading plans, and devotionals accessible through mobile apps and websites.' },
      { name: 'The Bible Project', url: 'https://bibleproject.com/', description: 'A nonprofit animation studio that produces short-form, fully animated videos to make the biblical story accessible to everyone.' },
      { name: 'The Gospel Coalition', url: 'https://www.thegospelcoalition.org/', description: 'A network of evangelical churches and leaders that provides gospel-centered resources and commentary on theology, church, and culture.' },
      { name: 'Gloo AI', url: 'https://www.gloo.us/ai', description: 'A technology platform initiative investing $25 million to accelerate responsible AI innovation in the faith ecosystem.' }
  ];

  function formatResult(text: string): string {
      // Split text into paragraphs
      let paragraphs = text.split('\n');
      
      // Process each paragraph
      paragraphs = paragraphs.map(para => {
          // Replace ** with <strong> tags for bold text
          return para.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      });
  
      // Join paragraphs with proper HTML
      return paragraphs.map(p => `<p>${p}</p>`).join('');
  }

  async function handleSearch() {
      if (!searchQuery.trim()) return;
  
      isLoading = true;
      error = null;
      searchResult = '';
  
      const options = {
          method: 'POST',
          headers: {
              'Authorization': `Bearer ${API_KEY}`,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              model: "llama-3.1-sonar-small-128k-online",
              messages: [
                  { role: "system", content: "Be loving, kind, precise, concise, and aligned with Christianity. Provide tangible resources when possible. You are serving Christians. Separate paragraphs with line breaks. End all messages with God bless you! Provide a relevant scripture from the bible at the end of each response that is after a newline. " },
                  { role: "user", content: searchQuery }
              ],
              temperature: 0.2,
              top_p: 0.9,
              return_citations: true,
              search_domain_filter: ["perplexity.ai"],
              return_images: false,
              return_related_questions: false,
              search_recency_filter: "month",
              frequency_penalty: 1
          })
      };
  
      try {
          const response = await fetch('https://api.perplexity.ai/chat/completions', options);
          if (!response.ok) throw new Error('API request failed');
          const data = await response.json();
          searchResult = formatResult(data.choices[0].message.content);
      } catch (err) {
          console.error(err);
          error = "An error occurred while fetching the search results.";
      } finally {
          isLoading = false;
      }
  }

  onMount(() => {
      // Any initialization logic if needed
  });
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
      <!-- Search Section -->
      <div class="flex flex-col items-center mb-16">
          <h1 in:fly={{ y: 50, duration: 1000, delay: 300 }} class="text-5xl sm:text-6xl font-extrabold text-purple-800 mb-4 text-center">
              Resources for You!
          </h1>
          <h3 in:fade={{ duration: 1000, delay: 800 }} class="text-lg sm:text-xl font-semibold text-purple-700 mb-8 text-center">
              Are you in need of financial, educational, parenting, or any other support that your city might have resources for? Ask here!
          </h3>
          <form on:submit|preventDefault={handleSearch} class="flex flex-col sm:flex-row items-center w-full max-w-3xl">
              <input
                  type="text"
                  bind:value={searchQuery}
                  placeholder="Where are you and what do you need?"
                  class="flex-grow p-4 border-2 border-purple-500 bg-white text-gray-900 placeholder-purple-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 text-lg"
              />
              <button
                  type="submit"
                  class="mt-4 sm:mt-0 sm:ml-4 bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 text-lg font-semibold transition duration-150 ease-in-out transform hover:scale-105"
                  disabled={isLoading}
              >
                  {isLoading ? 'Helping you now...' : 'Search'}
              </button>
          </form>

          {#if isLoading}
              <p class="mt-4 text-center text-gray-600">Looking around...</p>
          {:else if error}
              <p class="mt-4 text-center text-red-500">{error}</p>
          {:else if searchResult}
              <div in:fade={{ duration: 300 }} class="bg-white p-6 rounded-3xl shadow-lg mt-8 max-w-3xl mx-auto">
                  <h2 class="text-2xl font-semibold mb-4 text-purple-800">Search Result</h2>
                  {@html searchResult}
              </div>
          {/if}
      </div>

      <!-- Resources Section -->
      <div class="mt-16">
          <h2 in:fly={{ y: 50, duration: 1000, delay: 300 }} class="text-4xl font-extrabold text-purple-800 mb-8 text-center">
              Great Christian Resources
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {#each resources as resource, index}
                  <div 
                      in:scale={{ delay: index * 100, duration: 500 }}
                      class="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
                  >
                      <h3 class="text-xl font-semibold mb-2 text-purple-600">
                          <a href={resource.url} target="_blank" rel="noopener noreferrer" class="hover:underline">
                              {resource.name}
                          </a>
                      </h3>
                      <p class="text-gray-600">{resource.description}</p>
                  </div>
              {/each}
          </div>
      </div>
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
