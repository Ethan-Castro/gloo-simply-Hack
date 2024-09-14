import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section data-svelte-h="svelte-109foz0"><div class="hero min-h-screen"><div class="hero-overlay bg-opacity-60"></div> <div class="hero-content text-neutral-content text-center"><div class="my-10 items-center max-w-md"><h1 class="text-7xl p-4 font-bold">Catch the AI</h1> <p class="text-4xl py-6">The Modern Turing Test</p> <a href="/game/match"><button class="btn btn-neutral">Play game</button></a></div></div></div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section>${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}</section>`;
});
export {
  Page as default
};
