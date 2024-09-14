

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/profile/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.Bo_jZznr.js","_app/immutable/chunks/scheduler.Cbr1s69T.js","_app/immutable/chunks/index.CIUrMkBs.js"];
export const stylesheets = [];
export const fonts = [];
