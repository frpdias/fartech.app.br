

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.B7BlWuzM.js","_app/immutable/chunks/VsoQFg0y.js","_app/immutable/chunks/C6FHSN2-.js","_app/immutable/chunks/BiPsjKTf.js"];
export const stylesheets = [];
export const fonts = [];
