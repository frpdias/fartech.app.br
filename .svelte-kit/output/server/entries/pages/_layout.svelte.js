import { v as attr_class, w as ensure_array_like, x as attr, y as bind_props, z as slot } from "../../chunks/index.js";
import { e as escape_html } from "../../chunks/context.js";
import { j as fallback } from "../../chunks/utils2.js";
import "clsx";
function Header($$renderer, $$props) {
  let transparent = fallback($$props["transparent"], false);
  const links = [
    { label: "Home", href: "/" },
    { label: "Quem Somos", href: "/quem-somos" },
    { label: "Serviços", href: "/servicos" },
    { label: "Cases", href: "/cases" },
    { label: "Clientes", href: "/clientes" },
    { label: "Contato", href: "/contato" }
  ];
  $$renderer.push(`<header${attr_class(`site-header ${transparent ? "is-transparent" : ""}`, "svelte-1elxaub")}><div class="container header-inner svelte-1elxaub"><a class="logo svelte-1elxaub" href="/"><img src="/images/logo3.png" alt="Fartech Logo" class="svelte-1elxaub"/></a> <nav class="svelte-1elxaub"><!--[-->`);
  const each_array = ensure_array_like(links);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let link = each_array[$$index];
    $$renderer.push(`<a${attr("href", link.href)} class="svelte-1elxaub">${escape_html(link.label)}</a>`);
  }
  $$renderer.push(`<!--]--></nav> <a class="btn btn-primary" href="/contato">Solicitar Orçamento</a></div></header>`);
  bind_props($$props, { transparent });
}
function Footer($$renderer) {
  $$renderer.push(`<footer class="footer svelte-jz8lnl"><div class="container"><div class="footer-columns svelte-jz8lnl"><div><h4 class="footer-title svelte-jz8lnl">Fartech</h4> <p class="svelte-jz8lnl">Fartech Platform — infraestrutura digital para operações críticas, dados em tempo real e squads de produto embarcados.</p> <small class="svelte-jz8lnl">© Fartech 2025 • CNPJ 00.000.000/0000-00</small></div> <div><h4 class="footer-title svelte-jz8lnl">Contato</h4> <ul class="list-reset svelte-jz8lnl"><li class="svelte-jz8lnl"><span class="svelte-jz8lnl">Endereço: Av. Industrial, 1000 • São Paulo - SP</span></li> <li class="svelte-jz8lnl"><span class="svelte-jz8lnl">WhatsApp: (11) 99999-0000</span></li> <li class="svelte-jz8lnl"><span class="svelte-jz8lnl">Email: contato@fartech.com.br</span></li></ul></div> <div><h4 class="footer-title svelte-jz8lnl">Links</h4> <ul class="list-reset svelte-jz8lnl"><li class="svelte-jz8lnl"><a href="/quem-somos" class="svelte-jz8lnl">Quem Somos</a></li> <li class="svelte-jz8lnl"><a href="/servicos" class="svelte-jz8lnl">Serviços</a></li> <li class="svelte-jz8lnl"><a href="/cases" class="svelte-jz8lnl">Cases</a></li> <li class="svelte-jz8lnl"><a href="/contato" class="svelte-jz8lnl">Contato</a></li></ul></div></div></div></footer>`);
}
function _layout($$renderer, $$props) {
  $$renderer.push(`<div class="app-shell">`);
  Header($$renderer, { transparent: true });
  $$renderer.push(`<!----> <main class="page-shell"><!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]--></main> `);
  Footer($$renderer);
  $$renderer.push(`<!----></div>`);
}
export {
  _layout as default
};
