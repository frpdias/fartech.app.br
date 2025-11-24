import { w as ensure_array_like } from "../../../chunks/index.js";
import { e as escape_html } from "../../../chunks/context.js";
function _page($$renderer) {
  const logos = ["Atlas", "Vector", "Solaris", "Lumin", "Boreal", "Synt"];
  $$renderer.push(`<section class="section"><div class="container"><p class="eyebrow">Clientes</p> <h1 class="section-title">Scale-ups industriais e operações globais conectadas à Fartech.</h1> <div class="grid-12" style="text-align:center;"><!--[-->`);
  const each_array = ensure_array_like(logos);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let logo = each_array[$$index];
    $$renderer.push(`<div class="card" style="grid-column: span 3;"><span class="client-logo svelte-1uf6cn0">${escape_html(logo)}</span></div>`);
  }
  $$renderer.push(`<!--]--></div></div></section>`);
}
export {
  _page as default
};
