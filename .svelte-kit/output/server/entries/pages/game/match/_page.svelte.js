import { c as create_ssr_component, b as subscribe, d as each, e as escape } from "../../../../chunks/ssr.js";
import { w as writable } from "../../../../chunks/index.js";
const messagesStore = writable([]);
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $messagesStore, $$unsubscribe_messagesStore;
  $$unsubscribe_messagesStore = subscribe(messagesStore, (value) => $messagesStore = value);
  localStorage.getItem("username");
  $$unsubscribe_messagesStore();
  return `<section class="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-800"><div class="shadow-lg rounded-lg p-6 container w-full max-w-md mx-auto flex flex-col space-y-4 h-[80vh]"> <div class="flex-1 overflow-y-auto space-y-4 p-4"><div class="flex-1 overflow-y-auto space-y-4 p-4">${each($messagesStore, (message, index) => {
    return `<div class="chat chat-start"><div class="chat-image avatar" data-svelte-h="svelte-ztbg9h"><div class="w-10 rounded-full"><img alt="User Avatar" src=""> </div></div> <div class="chat-header text-gray-700 dark:text-gray-300">${escape(message.username)} <time class="text-xs opacity-50">${escape(new Date(message.time).toLocaleTimeString())}</time></div> <div class="chat-bubble bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100">${escape(message.message)}</div> <div class="chat-footer opacity-50 text-gray-600 dark:text-gray-400">${escape(message.status)}</div> </div>`;
  })}</div></div> <form class="flex items-center space-x-4" method="POST" action="?/sendMessage" data-svelte-h="svelte-uaxju5"><textarea class="textarea textarea-bordered w-full resize-none bg-white dark:bg-gray-600 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400" placeholder="Type your message..." id="message" name="message"></textarea> <button type="submit" class="btn btn-primary dark:bg-blue-700 dark:text-white">Send</button></form></div></section>`;
});
export {
  Page as default
};
