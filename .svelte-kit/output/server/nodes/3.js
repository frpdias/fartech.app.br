

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.C2KNzbxJ.js","_app/immutable/chunks/DqYnEuf9.js","_app/immutable/chunks/BUB4oGmN.js","_app/immutable/chunks/C3WsJ1qc.js"];
export const stylesheets = [];
export const fonts = [];
