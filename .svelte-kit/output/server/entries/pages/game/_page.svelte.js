import { c as create_ssr_component, a as add_attribute } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let inputValue = "";
  return `<section class="flex flex-col justify-center items-center min-h-screen p-4"><div class="text-center space-y-8 w-full max-w-md"><h1 class="text-6xl font-bold dark:text-white" data-svelte-h="svelte-15bypxb">Let&#39;s Play!</h1> <h1 class="text-3xl font-light dark:text-white" data-svelte-h="svelte-lxc74j">Think you have what it takes to catch an AI? 🤖</h1> <form class="flex flex-col items-center space-y-4 w-full" method="POST" action="?/joinGame"><input type="text" name="username" placeholder="Enter a username" class="w-full p-4 border bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 rounded-md"${add_attribute("value", inputValue)}> <button class="btn btn-neutral text-2xl w-full" type="submit" data-svelte-h="svelte-1xi6vg3">Play game</button></form></div></section>`;
});
export {
  Page as default
};
