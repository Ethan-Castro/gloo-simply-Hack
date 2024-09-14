

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.BuPQFYYt.js","_app/immutable/chunks/scheduler.Cbr1s69T.js","_app/immutable/chunks/index.CIUrMkBs.js"];
export const stylesheets = [];
export const fonts = [];
