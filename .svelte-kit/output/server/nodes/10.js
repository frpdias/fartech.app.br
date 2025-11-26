

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/servicos/automacao/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.C4J7Mhpl.js","_app/immutable/chunks/DtrOx_13.js","_app/immutable/chunks/BFNcXGEy.js","_app/immutable/chunks/Da40CKXS.js"];
export const stylesheets = [];
export const fonts = [];
