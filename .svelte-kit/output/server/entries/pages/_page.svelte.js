import { w as ensure_array_like, F as attr_style, x as attr, G as sanitize_slots, z as slot, y as bind_props, J as spread_props } from "../../chunks/index.js";
import { j as fallback } from "../../chunks/utils2.js";
import { e as escape_html } from "../../chunks/context.js";
function BubbleBackground($$renderer) {
  const bubbles = [
    { x: 8, y: 12, size: 220, delay: 0, duration: 22, blur: 14 },
    { x: 22, y: 45, size: 140, delay: 4, duration: 18, blur: 18 },
    { x: 38, y: 18, size: 300, delay: 2, duration: 26, blur: 16 },
    { x: 60, y: 30, size: 200, delay: 1, duration: 21, blur: 15 },
    { x: 78, y: 15, size: 160, delay: 5, duration: 24, blur: 17 },
    { x: 15, y: 70, size: 180, delay: 3, duration: 20, blur: 14 },
    { x: 42, y: 70, size: 240, delay: 6, duration: 25, blur: 16 },
    { x: 68, y: 68, size: 210, delay: 0, duration: 19, blur: 15 },
    { x: 90, y: 45, size: 140, delay: 2, duration: 17, blur: 18 },
    { x: 32, y: 6, size: 130, delay: 7, duration: 22, blur: 16 },
    { x: 55, y: 55, size: 170, delay: 3, duration: 20, blur: 14 },
    { x: 88, y: 80, size: 210, delay: 5, duration: 24, blur: 17 }
  ];
  $$renderer.push(`<div class="bubble-background svelte-ex4tza" aria-hidden="true"><!--[-->`);
  const each_array = ensure_array_like(bubbles);
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let bubble = each_array[index];
    $$renderer.push(`<span class="bubble svelte-ex4tza"${attr_style(`--x:${bubble.x}%;--y:${bubble.y}%;--size:${bubble.size}px;--delay:${bubble.delay}s;--duration:${bubble.duration}s;--blur:${bubble.blur ?? 12}px;`)}${attr("data-index", index)}></span>`);
  }
  $$renderer.push(`<!--]--></div>`);
}
function Hero($$renderer, $$props) {
  const $$slots = sanitize_slots($$props);
  $$renderer.component(($$renderer2) => {
    let eyebrow = fallback($$props["eyebrow"], "Fartech Soluções Industriais");
    let title = $$props["title"];
    let subtitle = $$props["subtitle"];
    let primaryHref = $$props["primaryHref"];
    let primaryLabel = $$props["primaryLabel"];
    let secondaryHref = $$props["secondaryHref"];
    let secondaryLabel = $$props["secondaryLabel"];
    let meta = fallback($$props["meta"], () => [], true);
    const hasVisual = Boolean($$slots.visual);
    $$renderer2.push(`<section class="hero">`);
    BubbleBackground($$renderer2);
    $$renderer2.push(`<!----> <div class="container hero-grid svelte-1q37ri0"><div class="hero-content svelte-1q37ri0"><div class="hero-text-wrapper svelte-1q37ri0"><p class="eyebrow">${escape_html(eyebrow)}</p> <h1>${escape_html(title)}</h1> <p>${escape_html(subtitle)}</p> <div class="hero-actions"><a class="btn btn-primary"${attr("href", primaryHref)}>${escape_html(primaryLabel)}</a> <a class="btn btn-secondary"${attr("href", secondaryHref)}>${escape_html(secondaryLabel)}</a></div> `);
    if (meta.length) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="hero-meta svelte-1q37ri0"><!--[-->`);
      const each_array = ensure_array_like(meta);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let item = each_array[$$index];
        $$renderer2.push(`<article class="svelte-1q37ri0"><strong class="svelte-1q37ri0">${escape_html(item.value)}</strong> <span class="svelte-1q37ri0">${escape_html(item.label)}</span></article>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></div> `);
    if (hasVisual) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="hero-visual svelte-1q37ri0"><!--[-->`);
      slot($$renderer2, $$props, "visual", {});
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></section>`);
    bind_props($$props, {
      eyebrow,
      title,
      subtitle,
      primaryHref,
      primaryLabel,
      secondaryHref,
      secondaryLabel,
      meta
    });
  });
}
function CardServico($$renderer, $$props) {
  let title = $$props["title"];
  let description = $$props["description"];
  let href = fallback($$props["href"], "/servicos");
  $$renderer.push(`<a class="card service-card svelte-1w28ar3"${attr("href", href)}><h3 class="svelte-1w28ar3">${escape_html(title)}</h3> <p class="svelte-1w28ar3">${escape_html(description)}</p> <span class="svelte-1w28ar3">Saiba mais →</span></a>`);
  bind_props($$props, { title, description, href });
}
function Depoimento($$renderer, $$props) {
  let quote = $$props["quote"];
  let author = $$props["author"];
  let role = $$props["role"];
  $$renderer.push(`<figure class="card depoimento svelte-1coktvu"><blockquote class="quote svelte-1coktvu">“${escape_html(quote)}”</blockquote> <figcaption class="svelte-1coktvu"><strong class="svelte-1coktvu">${escape_html(author)}</strong> <span class="svelte-1coktvu">${escape_html(role)}</span></figcaption></figure>`);
  bind_props($$props, { quote, author, role });
}
function CaseCard($$renderer, $$props) {
  let title = $$props["title"];
  let description = $$props["description"];
  let metric = $$props["metric"];
  let href = fallback($$props["href"], "/cases");
  $$renderer.push(`<article class="card case-card svelte-3pufga"><p class="eyebrow">${escape_html(metric)}</p> <h3 class="svelte-3pufga">${escape_html(title)}</h3> <p class="summary svelte-3pufga">${escape_html(description)}</p> <a class="btn btn-secondary"${attr("href", href)}>Ver Case</a></article>`);
  bind_props($$props, { title, description, metric, href });
}
function _page($$renderer) {
  const diferenciais = [
    {
      title: "Squads de produto dedicados",
      description: "Engenharia, dados e CX embarcados em cada rollout, com discovery contínuo e OKRs compartilhados.",
      href: "/quem-somos"
    },
    {
      title: "Observabilidade em tempo real",
      description: "Telemetry, alertas inteligentes e dashboards prontos para diretoria técnica e C-level.",
      href: "/contato"
    },
    {
      title: "APIs e integrações abertas",
      description: "SDKs, webhooks e conectores para ERPs, SCADA, IoT e BI com autenticação enterprise.",
      href: "/cases"
    },
    {
      title: "Resultados mensuráveis",
      description: "KPIs impulsionados por IA, contratos baseados em SLA e playbooks de crescimento contínuo.",
      href: "/cases"
    }
  ];
  const services = [
    {
      title: "Lubrificação inteligente",
      description: "Módulo SaaS que orquestra sensores IoT, supply chain e workflows automáticos.",
      href: "/servicos/lubrificacao"
    },
    {
      title: "Análises de óleo com IA",
      description: "Pipelines laboratoriais integrados à plataforma com insights automáticos e recomendação de ação.",
      href: "/servicos/analise-oleos"
    },
    {
      title: "Automação & dados",
      description: "Digital twins, SCADA conectado e analytics avançado em uma única stack.",
      href: "/servicos/automacao"
    },
    {
      title: "Manutenção preventiva digital",
      description: "Motor de machine learning que prioriza ativos críticos e dispara ordens no CMMS.",
      href: "/servicos/manutencao-preventiva"
    },
    {
      title: "Response corretivo 24/7",
      description: "Centro de comando com playbooks e bots que engajam squads e fornecedores em minutos.",
      href: "/servicos/manutencao-corretiva"
    },
    {
      title: "Inspeções data-driven",
      description: "Checklists digitais, visão mobile-first e relatórios com score de risco automáticos.",
      href: "/servicos/inspecoes-tecnicas"
    }
  ];
  const cases = [
    {
      title: "Rolamentos monitorados com IA em siderurgia",
      description: "Implementamos sensores + gêmeo digital e reduzimos 62% das ocorrências críticas.",
      metric: "Alertas -62%"
    },
    {
      title: "Linha automotiva com precisão de 98%",
      description: "Plataforma Fartech sincronizou MES e PLC com dados em tempo real para o time de produto.",
      metric: "Precisão +98%"
    },
    {
      title: "Operação química com 37% menos hotspots",
      description: "Algoritmos térmicos e automações de manutenção cortaram desperdícios e emissões.",
      metric: "Hotspots -37%"
    }
  ];
  const depoimentos = [
    {
      quote: "A Fartech age como nosso time de plataforma: entregou APIs, dashboards e governança em poucas sprints.",
      author: "Marina Alves",
      role: "VP Operações • Grupo Orion"
    },
    {
      quote: "Criamos um centro de comando digital. Hoje tomamos decisões com dados em minutos, não dias.",
      author: "Carlos Moura",
      role: "Head de Reliability • Metalúrgica Vitta"
    },
    {
      quote: "Eles falam produto, engenharia e chão de fábrica ao mesmo tempo. Resultado: uptime recorde.",
      author: "Patrícia Vilela",
      role: "COO • Indústria Térmica Sul"
    }
  ];
  Hero($$renderer, {
    eyebrow: "Fartech Platform OS",
    title: "Infraestrutura digital que mantém operações críticas sempre online.",
    subtitle: "Uma plataforma SaaS que conecta IoT, automação, manutenção e dados corporativos para times que precisam decidir rápido.",
    primaryHref: "/contato",
    primaryLabel: "Solicitar Orçamento",
    secondaryHref: "/servicos",
    secondaryLabel: "Conhecer serviços",
    meta: [
      { label: "Empresas conectadas", value: "350+" },
      { label: "Go-live médio", value: "14 dias" },
      { label: "Disponibilidade", value: "99.95%" }
    ],
    $$slots: {
      visual: ($$renderer2) => {
        $$renderer2.push(`<div slot="visual" class="hero-visual-stack svelte-1uha8ag"><div class="dashboard-card svelte-1uha8ag"><header class="dashboard-header svelte-1uha8ag"><div class="logo-stack svelte-1uha8ag"><span class="logo-pill svelte-1uha8ag">ROCKET RIDES</span> <small class="svelte-1uha8ag">Dashboard de vendas</small></div> <div class="search-pill svelte-1uha8ag"><span>Pesquisar</span></div></header> <div class="dashboard-body svelte-1uha8ag"><div class="stat-grid svelte-1uha8ag"><div class="stat-card svelte-1uha8ag"><p class="muted svelte-1uha8ag">Volume líquido hoje</p> <strong class="svelte-1uha8ag">R$ 3.528.198,72</strong> <div class="sparkline svelte-1uha8ag"></div></div> <div class="stat-card compact svelte-1uha8ag"><p class="muted svelte-1uha8ag">Ticket médio</p> <strong class="svelte-1uha8ag">R$ 392,74</strong> <div class="pill success svelte-1uha8ag">+12% vs. ontem</div></div> <div class="stat-card compact svelte-1uha8ag"><p class="muted svelte-1uha8ag">Aprovação</p> <strong class="svelte-1uha8ag">98,4%</strong> <div class="pill neutral svelte-1uha8ag">Em tempo real</div></div></div> <div class="orders-card svelte-1uha8ag"><div class="orders-header svelte-1uha8ag"><p class="muted svelte-1uha8ag">Transações recentes</p> <span class="pill subtle svelte-1uha8ag">Atualizado há 2min</span></div> <div class="orders-list svelte-1uha8ag"><div class="order svelte-1uha8ag"><div><strong class="svelte-1uha8ag">R$ 1.284,90</strong> <p class="muted svelte-1uha8ag">Pix • Rocket Rides</p></div> <span class="pill success svelte-1uha8ag">Pago</span></div> <div class="order svelte-1uha8ag"><div><strong class="svelte-1uha8ag">R$ 892,40</strong> <p class="muted svelte-1uha8ag">Cartão • Orion Labs</p></div> <span class="pill warning svelte-1uha8ag">Análise</span></div> <div class="order svelte-1uha8ag"><div><strong class="svelte-1uha8ag">R$ 2.394,10</strong> <p class="muted svelte-1uha8ag">Pix • Vitta Auto</p></div> <span class="pill success svelte-1uha8ag">Pago</span></div> <div class="order svelte-1uha8ag"><div><strong class="svelte-1uha8ag">R$ 742,00</strong> <p class="muted svelte-1uha8ag">Cartão • Estaleiro Sul</p></div> <span class="pill danger svelte-1uha8ag">Falha</span></div></div></div></div></div> <div class="hero-device svelte-1uha8ag"><div class="device-notch svelte-1uha8ag"></div> <div class="device-content svelte-1uha8ag"><header class="device-header svelte-1uha8ag"><div><span class="device-label svelte-1uha8ag">Integração Pix Ready</span> <p class="device-sub svelte-1uha8ag">Checkout Fartech Pay</p></div> <span class="status-pill svelte-1uha8ag">Online</span></header> <div class="device-card svelte-1uha8ag"><div><span class="muted svelte-1uha8ag">Valor a receber</span> <strong class="svelte-1uha8ag">R$ 1.284,90</strong></div> <div><span class="muted svelte-1uha8ag">Cliente</span> <strong class="svelte-1uha8ag">Rocket Rides</strong></div></div> <div class="device-form svelte-1uha8ag"><div class="fake-field svelte-1uha8ag" aria-label="Cartão ilustrativo"><span>Cartão</span> <div class="input fake-input svelte-1uha8ag"><span>•••• •••• •••• 4487</span> <span class="muted svelte-1uha8ag">12/28</span></div></div> <div class="fake-field svelte-1uha8ag" aria-label="Nome ilustrativo"><span>Nome</span> <div class="input fake-input svelte-1uha8ag">Fernanda V.</div></div> <div class="fake-field split svelte-1uha8ag" aria-label="CVV ilustrativo"><span>CVV</span> <div class="input fake-input svelte-1uha8ag">123</div></div></div> <button class="btn device-btn svelte-1uha8ag">Confirmar pagamento</button> <div class="device-icons svelte-1uha8ag"><span>Pix</span> <span>Visa</span> <span>Mastercard</span> <span>Apple Pay</span></div></div></div></div>`);
      }
    }
  });
  $$renderer.push(`<!----> <section class="section svelte-1uha8ag"><div class="container svelte-1uha8ag"><p class="eyebrow">Por que Fartech</p> <h2 class="section-title">Produto, dados e confiabilidade em uma única stack.</h2> <p class="section-subtitle">Desenhamos jornadas digitais de alto impacto com times ágeis, observabilidade total e entregas mensuráveis.</p> <div class="diferenciais-grid"><!--[-->`);
  const each_array = ensure_array_like(diferenciais);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    CardServico($$renderer, spread_props([item]));
  }
  $$renderer.push(`<!--]--></div></div></section> <section class="section svelte-1uha8ag" id="servicos"><div class="container svelte-1uha8ag"><p class="eyebrow">Serviços</p> <div class="section-title">Portfólio modular pronto para plug-and-play.</div> <div class="services-grid"><!--[-->`);
  const each_array_1 = ensure_array_like(services);
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let service = each_array_1[$$index_1];
    CardServico($$renderer, spread_props([service]));
  }
  $$renderer.push(`<!--]--></div> <div style="margin-top:40px"><a class="btn btn-secondary" href="/servicos">Ver todos os serviços</a></div></div></section> <section class="section svelte-1uha8ag" id="cases"><div class="container svelte-1uha8ag"><p class="eyebrow">Cases</p> <h2 class="section-title">Resultados escaláveis monitorados em tempo real.</h2> <div class="cases-grid"><!--[-->`);
  const each_array_2 = ensure_array_like(cases);
  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
    let caseItem = each_array_2[$$index_2];
    CaseCard($$renderer, spread_props([caseItem]));
  }
  $$renderer.push(`<!--]--></div></div></section> <section class="section svelte-1uha8ag" id="depoimentos"><div class="container svelte-1uha8ag"><p class="eyebrow">Depoimentos</p> <h2 class="section-title">Clientes que colocaram o core industrial na nuvem.</h2> <div class="depoimentos-grid"><!--[-->`);
  const each_array_3 = ensure_array_like(depoimentos);
  for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
    let depo = each_array_3[$$index_3];
    Depoimento($$renderer, spread_props([depo]));
  }
  $$renderer.push(`<!--]--></div></div></section> <section class="section svelte-1uha8ag"><div class="container card svelte-1uha8ag" style="text-align:center;"><p class="eyebrow">Next Step</p> <h2 class="section-title">Destrave a versão cloud da sua operação.</h2> <p class="section-subtitle">Faça um discovery com nossos product engineers e receba um blueprint com integrações, KPIs e roadmap em até 7 dias.</p> <a class="btn btn-primary" href="/contato">Quero meu blueprint</a></div></section>`);
}
export {
  _page as default
};
