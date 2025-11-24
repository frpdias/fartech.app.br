

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/servicos/automacao/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.D0tP7Smm.js","_app/immutable/chunks/VsoQFg0y.js","_app/immutable/chunks/C6FHSN2-.js","_app/immutable/chunks/BiPsjKTf.js"];
export const stylesheets = [];
export const fonts = [];
