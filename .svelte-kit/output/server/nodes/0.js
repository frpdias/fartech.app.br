import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DeyxWuy_.js","_app/immutable/chunks/DtrOx_13.js","_app/immutable/chunks/BFNcXGEy.js","_app/immutable/chunks/Da40CKXS.js","_app/immutable/chunks/DkNjzIBU.js","_app/immutable/chunks/CY8AB-us.js","_app/immutable/chunks/Dhqx1P-U.js","_app/immutable/chunks/ELgwgJ8_.js","_app/immutable/chunks/CaHYmb3Y.js","_app/immutable/chunks/2_aWtOj_.js","_app/immutable/chunks/fIb7srva.js","_app/immutable/chunks/wOykGSzW.js","_app/immutable/chunks/DPPFVpJN.js"];
export const stylesheets = ["_app/immutable/assets/0.DLl99N8v.css"];
export const fonts = [];
