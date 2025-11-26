

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.CV5MhFt6.js","_app/immutable/chunks/DtrOx_13.js","_app/immutable/chunks/BFNcXGEy.js","_app/immutable/chunks/Da40CKXS.js"];
export const stylesheets = [];
export const fonts = [];
