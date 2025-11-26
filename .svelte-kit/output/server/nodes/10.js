

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/servicos/automacao/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.BvUHp1Oz.js","_app/immutable/chunks/DqYnEuf9.js","_app/immutable/chunks/BUB4oGmN.js","_app/immutable/chunks/C3WsJ1qc.js"];
export const stylesheets = [];
export const fonts = [];
