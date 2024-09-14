<script>
    import { onMount } from 'svelte';
  
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
  
    function formatResult(text) {
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
            { role: "system", content: "Be loving, kind, precise, concise, and aligned with Christianity. Provide tangible resources when possible. You are serving Christians. Separate paragraphs with line breaks. End all messages with God bless you!" },
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
      // You can add any initialization logic here if needed
    });
  </script>
  
  <main class="container mx-auto p-4 flex flex-col min-h-screen">
    <div class="flex-1 flex items-center justify-center mb-12">
      <div class="w-full max-w-3xl">
        <h1 class="text-4xl font-bold mb-8 text-center text-gray-800">Resources for You!</h1>
        <h3 class="text-base font-bold mb-8 text-center text-gray-800">Are you in need of financial, educational, parenting, or any other support that your city might have resources for? Ask here!</h3>
        <form on:submit|preventDefault={handleSearch} class="flex mb-8">
          <input
            type="text"
            bind:value={searchQuery}
            placeholder="Where are you and what do you need?"
            class="flex-grow p-4 border-b-2 border-purple-300 focus:outline-none focus:border-purple-500 text-xl bg-transparent"
          />
          <button
            type="submit"
            class="ml-4 bg-purple-500 text-white px-6 py-3 rounded-full hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 text-lg font-semibold transition duration-150 ease-in-out"
            disabled={isLoading}
          >
            {isLoading ? 'Helping you now...' : 'Search'}
          </button>
        </form>
  
        {#if isLoading}
          <p class="text-center text-gray-600">Looking around...</p>
        {:else if error}
          <p class="text-center text-red-500">{error}</p>
        {:else if searchResult}
          <div class="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 class="text-2xl font-semibold mb-4">Search Result</h2>
            {@html searchResult}
          </div>
        {/if}
      </div>
    </div>
    
    <div class="flex-1">
      <h2 class="text-3xl font-bold mb-8 text-center text-gray-800">Great Christian Resources</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each resources as resource}
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
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
  </main>
  
  <style>
    :global(body) {
      margin: 0;
      font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f9fafb;
    }
  </style>