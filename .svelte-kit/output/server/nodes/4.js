import * as universal from '../entries/pages/game/match/_page.ts.js';
import * as server from '../entries/pages/game/match/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/game/match/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/game/match/+page.ts";
export { server };
export const server_id = "src/routes/game/match/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.BoMpU2e7.js","_app/immutable/chunks/scheduler.Cbr1s69T.js","_app/immutable/chunks/index.CIUrMkBs.js","_app/immutable/chunks/websocket.BFXeoziI.js","_app/immutable/chunks/index.BV37eSjI.js"];
export const stylesheets = [];
export const fonts = [];
