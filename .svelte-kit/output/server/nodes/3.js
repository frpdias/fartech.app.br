

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.D2awMCsF.js","_app/immutable/chunks/BdPJ2nMw.js","_app/immutable/chunks/Cic3LXh-.js","_app/immutable/chunks/CuQwhsa9.js"];
export const stylesheets = [];
export const fonts = [];
