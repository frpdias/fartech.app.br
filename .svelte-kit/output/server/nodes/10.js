

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/servicos/automacao/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.CubGOZq8.js","_app/immutable/chunks/Kc2zeECM.js","_app/immutable/chunks/CvdWedVZ.js","_app/immutable/chunks/BZT6mpnM.js"];
export const stylesheets = [];
export const fonts = [];
