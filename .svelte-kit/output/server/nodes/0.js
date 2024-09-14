

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.DFv0wje2.js","_app/immutable/chunks/scheduler.Cbr1s69T.js","_app/immutable/chunks/index.CIUrMkBs.js"];
export const stylesheets = ["_app/immutable/assets/0.Dhm-yrLo.css"];
export const fonts = [];
