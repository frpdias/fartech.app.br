import { v as attr_class, w as ensure_array_like, x as attr, y as bind_props, z as attr_style, F as head, G as slot } from "../../chunks/index.js";
import { e as escape_html } from "../../chunks/context.js";
import { j as fallback } from "../../chunks/utils2.js";
import "clsx";
function Header($$renderer, $$props) {
  let transparent = fallback($$props["transparent"], false);
  let menuOpen = false;
  const links = [
    { label: "Home", href: "/" },
    { label: "Quem Somos", href: "/quem-somos" },
    { label: "Serviços", href: "/servicos" },
    { label: "Cases", href: "/cases" },
    { label: "Clientes", href: "/clientes" },
    { label: "Contato", href: "/contato" }
  ];
  $$renderer.push(`<header${attr_class(`site-header ${transparent ? "is-transparent" : ""}`, "svelte-1elxaub")}><div class="container header-inner svelte-1elxaub"><a class="logo svelte-1elxaub" href="/" aria-label="Fartech - Página inicial"><img src="/images/logo.png" alt="Fartech Logo" class="svelte-1elxaub"/> <span class="logo-text svelte-1elxaub">FARTECH</span></a> <nav class="nav-desktop svelte-1elxaub" aria-label="Navegação principal"><!--[-->`);
  const each_array = ensure_array_like(links);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let link = each_array[$$index];
    $$renderer.push(`<a${attr("href", link.href)} class="svelte-1elxaub">${escape_html(link.label)}</a>`);
  }
  $$renderer.push(`<!--]--></nav> <button class="menu-toggle svelte-1elxaub"${attr("aria-label", "Abrir menu")}${attr("aria-expanded", menuOpen)}><span${attr_class("hamburger svelte-1elxaub", void 0, { "open": menuOpen })}></span></button> <a class="btn btn-primary cta-desktop svelte-1elxaub" href="mailto:contato@fartech.app.br" aria-label="Fale conosco por e-mail">Fale Conosco</a></div> `);
  {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--></header>`);
  bind_props($$props, { transparent });
}
function Footer($$renderer) {
  $$renderer.push(`<footer class="footer svelte-jz8lnl"><div class="container"><div class="footer-columns svelte-jz8lnl"><div><h4 class="footer-title svelte-jz8lnl">Fartech</h4> <p class="svelte-jz8lnl">Fartech Platform — infraestrutura digital para operações críticas, dados em tempo real e squads de produto embarcados.</p> <small class="svelte-jz8lnl">© Fartech 2025 • CNPJ 00.000.000/0000-00</small></div> <div><h4 class="footer-title svelte-jz8lnl">Contato</h4> <ul class="list-reset svelte-jz8lnl" aria-label="Informações de contato"><li class="svelte-jz8lnl"><span class="svelte-jz8lnl">Endereço: Av. Industrial, 1000 • São Paulo - SP</span></li> <li class="svelte-jz8lnl"><a href="https://wa.me/5511999990000" aria-label="WhatsApp" class="svelte-jz8lnl">WhatsApp: (11) 99999-0000</a></li> <li class="svelte-jz8lnl"><a href="mailto:contato@fartech.com.br" aria-label="Email" class="svelte-jz8lnl">Email: contato@fartech.com.br</a></li></ul></div> <div><h4 class="footer-title svelte-jz8lnl">Links</h4> <ul class="list-reset svelte-jz8lnl" aria-label="Links de navegação"><li class="svelte-jz8lnl"><a href="/quem-somos" class="svelte-jz8lnl">Quem Somos</a></li> <li class="svelte-jz8lnl"><a href="/servicos" class="svelte-jz8lnl">Serviços</a></li> <li class="svelte-jz8lnl"><a href="/cases" class="svelte-jz8lnl">Cases</a></li> <li class="svelte-jz8lnl"><a href="/contato" class="svelte-jz8lnl">Contato</a></li></ul></div></div></div></footer>`);
}
function Particles($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let scrollOffset = 0;
    $$renderer2.push(`<div class="particles-wrapper svelte-ljratz"><canvas class="particles-canvas svelte-ljratz" aria-hidden="true"${attr_style(`transform: translateY(${scrollOffset}px);`)}></canvas></div>`);
  });
}
function _layout($$renderer, $$props) {
  head("12qhfyh", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>fartech.app.br</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Fartech desenvolve SaaS sob medida, automações com n8n, chatbots inteligentes e integrações via APIs e Webhooks. Conectamos negócios ao futuro."/> <meta name="viewport" content="width=device-width, initial-scale=1"/> <link rel="icon" href="/favicon.png"/> <link rel="preconnect" href="https://fonts.googleapis.com"/> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=""/> <meta property="og:type" content="website"/> <meta property="og:title" content="Fartech - SaaS, automação e integrações"/> <meta property="og:description" content="SaaS sob medida, automações, chatbots e integrações via APIs. Da educação ao corporativo, conectamos negócios ao futuro."/> <meta property="og:image" content="/images/logo.png"/> <meta property="og:url" content="https://fartech.app.br/"/> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:title" content="Fartech - SaaS, automação e integrações"/> <meta name="twitter:description" content="SaaS sob medida, automações, chatbots e integrações via APIs. Conectamos negócios ao futuro."/> <meta name="twitter:image" content="/images/logo.png"/>`);
  });
  $$renderer.push(`<div class="app-shell svelte-12qhfyh"><a href="#main-content" class="skip-to-content svelte-12qhfyh">Pular para o conteúdo principal</a> `);
  Particles($$renderer);
  $$renderer.push(`<!----> <div class="app-content svelte-12qhfyh">`);
  Header($$renderer, { transparent: true });
  $$renderer.push(`<!----> <main id="main-content" class="page-shell"><!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]--></main> `);
  Footer($$renderer);
  $$renderer.push(`<!----></div></div>`);
}
export {
  _layout as default
};
