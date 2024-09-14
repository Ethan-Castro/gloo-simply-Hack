import * as server from '../entries/pages/game/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/game/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/game/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.DdSyTXmE.js","_app/immutable/chunks/scheduler.Cbr1s69T.js","_app/immutable/chunks/index.CIUrMkBs.js","_app/immutable/chunks/websocket.BFXeoziI.js","_app/immutable/chunks/index.BV37eSjI.js","_app/immutable/chunks/entry.CcpoiA_h.js"];
export const stylesheets = [];
export const fonts = [];
