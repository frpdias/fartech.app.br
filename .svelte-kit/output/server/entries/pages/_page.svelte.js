import { w as ensure_array_like, z as attr_style, x as attr, J as sanitize_slots, v as attr_class, G as slot, y as bind_props, F as head, K as spread_props } from "../../chunks/index.js";
import { j as fallback } from "../../chunks/utils2.js";
import { a as ssr_context, e as escape_html } from "../../chunks/context.js";
function onDestroy(fn) {
  /** @type {SSRContext} */
  ssr_context.r.on_destroy(fn);
}
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
    let showEnemUltra = fallback($$props["showEnemUltra"], false);
    const hasVisual = Boolean($$slots.visual);
    $$renderer2.push(`<section class="hero svelte-1q37ri0">`);
    BubbleBackground($$renderer2);
    $$renderer2.push(`<!----> <div class="hero-container svelte-1q37ri0"><div${attr_class("hero-grid svelte-1q37ri0", void 0, { "has-visual": hasVisual })}><div class="hero-content svelte-1q37ri0"><div class="hero-text-wrapper svelte-1q37ri0"><p class="eyebrow svelte-1q37ri0">${escape_html(eyebrow)}</p> <h1 class="svelte-1q37ri0">${escape_html(title)}</h1> <p class="svelte-1q37ri0">${escape_html(subtitle)}</p> <div class="hero-actions svelte-1q37ri0"><a class="btn btn-primary svelte-1q37ri0"${attr("href", primaryHref)}>${escape_html(primaryLabel)}</a> <a class="btn btn-secondary svelte-1q37ri0"${attr("href", secondaryHref)}>${escape_html(secondaryLabel)}</a></div> `);
    if (meta.length) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="hero-meta svelte-1q37ri0"><!--[-->`);
      const each_array = ensure_array_like(meta);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let item = each_array[$$index];
        $$renderer2.push(`<article class="svelte-1q37ri0"><strong class="svelte-1q37ri0">${escape_html(item.value)}</strong> <span class="svelte-1q37ri0">${escape_html(item.label)}</span></article>`);
      }
      $$renderer2.push(`<!--]--> `);
      if (showEnemUltra) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<article class="enem-card svelte-1q37ri0"><img src="/images/enem-ultra.png" alt="ENEM ULTRA" class="enem-preview svelte-1q37ri0" loading="lazy" decoding="async"/></article>`);
      } else {
        $$renderer2.push("<!--[!-->");
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
    $$renderer2.push(`<!--]--></div></div></section>`);
    bind_props($$props, {
      eyebrow,
      title,
      subtitle,
      primaryHref,
      primaryLabel,
      secondaryHref,
      secondaryLabel,
      meta,
      showEnemUltra
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
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
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
        title: "Plataforma ENEM com engajamento diário",
        description: "Desenvolvemos uma plataforma moderna de estudos para o ENEM com trilhas personalizadas, simulados e dashboards em tempo real, aumentando o número de alunos ativos por dia.",
        metric: "Engajamento +X%"
      },
      {
        title: "Operações conectadas sem planilhas manuais",
        description: "Automatizamos rotinas de coleta de dados e manutenção em diferentes áreas da operação, integrando sistemas legados, sensores e dashboards em tempo real.",
        metric: "Tempo manual -X%"
      },
      {
        title: "SaaS B2B com integrações e bots",
        description: "Criamos um SaaS sob medida com integrações via APIs e Webhooks, além de chatbots para suporte, unificando fluxos de trabalho e reduzindo filas internas.",
        metric: "Filas -X%"
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
    const pagamentos = [
      {
        valor: "R$ 1.284,90",
        cliente: "Rocket Rides",
        mascara: "•••• •••• •••• 4487",
        validade: "12/28"
      },
      {
        valor: "R$ 2.394,10",
        cliente: "Vitta Auto",
        mascara: "•••• •••• •••• 5521",
        validade: "09/27"
      },
      {
        valor: "R$ 892,40",
        cliente: "Orion Labs",
        mascara: "•••• •••• •••• 1123",
        validade: "03/29"
      },
      {
        valor: "R$ 742,00",
        cliente: "Estaleiro Sul",
        mascara: "•••• •••• •••• 9001",
        validade: "07/26"
      },
      {
        valor: "R$ 1.990,00",
        cliente: "Grupo Aurora",
        mascara: "•••• •••• •••• 3311",
        validade: "11/28"
      }
    ];
    let transacoes = [
      {
        id: 1,
        valor: "R$ 1.284,90",
        descricao: "Pix • Rocket Rides",
        status: "pago"
      },
      {
        id: 2,
        valor: "R$ 892,40",
        descricao: "Cartão • Orion Labs",
        status: "analise"
      },
      {
        id: 3,
        valor: "R$ 2.394,10",
        descricao: "Pix • Vitta Auto",
        status: "pago"
      },
      {
        id: 4,
        valor: "R$ 742,00",
        descricao: "Cartão • Estaleiro Sul",
        status: "falha"
      }
    ];
    const badgeClass = (status) => {
      if (status === "pago") return "success";
      if (status === "analise") return "warning";
      return "danger";
    };
    let idxPagamento = 0;
    let pagamentoAtual = pagamentos[idxPagamento];
    onDestroy(() => {
    });
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>fartech.app.br</title>`);
      });
      $$renderer3.push(`<script type="application/ld+json" class="svelte-1uha8ag">
    {JSON.stringify(structuredData)}
  <\/script><!---->`);
    });
    Hero($$renderer2, {
      eyebrow: "Fartech Platform OS",
      title: "Integração, automação e tecnologia para manter seu negócio sempre ativo e competitivo.",
      subtitle: "Conecte pessoas, processos e máquinas. Decida melhor. Aja mais rápido. Cresça sem limites.",
      primaryHref: "/contato",
      primaryLabel: "Solicitar Orçamento",
      secondaryHref: "/servicos",
      secondaryLabel: "Conhecer serviços",
      showEnemUltra: false,
      meta: [
        { label: "Empresas conectadas", value: "350+" },
        { label: "Go-live médio", value: "14 dias" },
        { label: "Disponibilidade", value: "99.95%" }
      ],
      $$slots: {
        visual: ($$renderer3) => {
          $$renderer3.push(`<div slot="visual" class="svelte-1uha8ag"></div>`);
        }
      }
    });
    $$renderer2.push(`<!----> <section class="section svelte-1uha8ag"><div class="container svelte-1uha8ag"><p class="eyebrow svelte-1uha8ag">Por que Fartech</p> <h2 class="section-title svelte-1uha8ag">SaaS, IoT e integrações em um só ecossistema.</h2> <p class="section-subtitle svelte-1uha8ag">A Fartech automatiza processos, conecta dados e garante eficiência contínua com rastreabilidade total e resultados mensuráveis.</p> <div class="diferenciais-grid svelte-1uha8ag"><!--[-->`);
    const each_array = ensure_array_like(diferenciais);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      CardServico($$renderer2, spread_props([item]));
    }
    $$renderer2.push(`<!--]--></div></div></section> <section class="section svelte-1uha8ag" id="servicos"><div class="container svelte-1uha8ag"><p class="eyebrow svelte-1uha8ag">Serviços</p> <div class="section-title svelte-1uha8ag">Portfólio modular conectado à sua operação.</div> <p class="section-subtitle svelte-1uha8ag">Da educação ao corporativo, levamos a mesma base tecnológica sólida para criar soluções sob medida em SaaS, automação e integrações, sempre com foco em resultado real para o seu negócio.</p> <div class="services-grid svelte-1uha8ag"><!--[-->`);
    const each_array_1 = ensure_array_like(services);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let service = each_array_1[$$index_1];
      CardServico($$renderer2, spread_props([service]));
    }
    $$renderer2.push(`<!--]--></div> <div style="margin-top:40px" class="svelte-1uha8ag"><a class="btn btn-secondary svelte-1uha8ag" href="/servicos">Ver todos os serviços</a></div></div></section> <section class="section svelte-1uha8ag" id="cases"><div class="container svelte-1uha8ag"><p class="eyebrow svelte-1uha8ag">Cases</p> <h2 class="section-title svelte-1uha8ag">Resultados escaláveis monitorados em tempo real.</h2> <div class="cases-grid svelte-1uha8ag"><!--[-->`);
    const each_array_2 = ensure_array_like(cases);
    for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
      let caseItem = each_array_2[$$index_2];
      CaseCard($$renderer2, spread_props([caseItem]));
    }
    $$renderer2.push(`<!--]--></div></div></section> <section class="section svelte-1uha8ag" id="depoimentos"><div class="container svelte-1uha8ag"><p class="eyebrow svelte-1uha8ag">Depoimentos</p> <h2 class="section-title svelte-1uha8ag">Clientes que colocaram o core industrial na nuvem.</h2> <div class="depoimentos-grid svelte-1uha8ag"><!--[-->`);
    const each_array_3 = ensure_array_like(depoimentos);
    for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
      let depo = each_array_3[$$index_3];
      Depoimento($$renderer2, spread_props([depo]));
    }
    $$renderer2.push(`<!--]--></div></div></section> <section class="section svelte-1uha8ag" id="dashboards"><div class="container svelte-1uha8ag"><p class="eyebrow svelte-1uha8ag">Dashboards &amp; Integrações</p> <h2 class="section-title svelte-1uha8ag">Visualize dados em tempo real com painéis intuitivos.</h2> <div class="hero-visual-stack svelte-1uha8ag" style="margin-bottom: 60px; align-items: flex-start;"><div class="phone phone-light svelte-1uha8ag"><div class="phone-notch svelte-1uha8ag"></div> <div class="phone-body svelte-1uha8ag"><header class="phone-top svelte-1uha8ag"><span class="pill ghost svelte-1uha8ag">Rocket Rides</span> <span class="pill muted svelte-1uha8ag">Pesquisar</span></header> <div class="phone-stats svelte-1uha8ag"><div class="stat-card svelte-1uha8ag"><p class="muted svelte-1uha8ag">Volume liquidado hoje</p> <strong class="svelte-1uha8ag">R$ 3.528.198,72</strong> <div class="sparkline svelte-1uha8ag"></div></div> <div class="stat-card svelte-1uha8ag"><p class="muted svelte-1uha8ag">Ticket médio</p> <strong class="svelte-1uha8ag">R$ 392,74</strong> <div class="pill success svelte-1uha8ag">+12% vs. ontem</div></div> <div class="stat-card compact svelte-1uha8ag"><p class="muted svelte-1uha8ag">Aprovação</p> <strong class="svelte-1uha8ag">98,4%</strong> <div class="pill neutral svelte-1uha8ag">Em tempo real</div></div></div> <div class="orders-card svelte-1uha8ag"><div class="orders-header svelte-1uha8ag"><p class="muted svelte-1uha8ag">Transações recentes</p> <span class="pill subtle svelte-1uha8ag">Atualizado em tempo real</span></div> <div class="orders-list svelte-1uha8ag"><!--[-->`);
    const each_array_4 = ensure_array_like(transacoes);
    for (let $$index_4 = 0, $$length = each_array_4.length; $$index_4 < $$length; $$index_4++) {
      let trans = each_array_4[$$index_4];
      $$renderer2.push(`<div class="order animate svelte-1uha8ag"><div class="svelte-1uha8ag"><strong class="svelte-1uha8ag">${escape_html(trans.valor)}</strong> <p class="muted svelte-1uha8ag">${escape_html(trans.descricao)}</p></div> <span${attr_class(`pill ${badgeClass(trans.status)}`, "svelte-1uha8ag")}>${escape_html(trans.status === "pago" ? "Pago" : trans.status === "analise" ? "Análise" : "Falha")}</span></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></div></div> <div class="phone phone-dark svelte-1uha8ag"><div class="phone-notch dark svelte-1uha8ag"></div> <div class="phone-body svelte-1uha8ag"><header class="education-head svelte-1uha8ag"><p class="eyebrow svelte-1uha8ag">SaaS Educacional Municipal</p> <h3 class="svelte-1uha8ag">Plataforma oficial da Secretaria Municipal de Educação.</h3> <p class="muted svelte-1uha8ag">Acompanhe matrículas, transporte e operações críticas em tempo real.</p> <div class="edu-actions svelte-1uha8ag"><span class="pill primary svelte-1uha8ag">Acessar Central Operacional</span> <span class="pill outline svelte-1uha8ag">Secretaria Parceira</span></div> <small class="muted svelte-1uha8ag">Próxima atualização 15/11</small></header> <div class="edu-stats svelte-1uha8ag"><div class="svelte-1uha8ag"><strong class="svelte-1uha8ag">128</strong><span class="svelte-1uha8ag">Escolas conectadas</span></div> <div class="svelte-1uha8ag"><strong class="svelte-1uha8ag">52.430</strong><span class="svelte-1uha8ag">Estudantes</span></div> <div class="svelte-1uha8ag"><strong class="svelte-1uha8ag">2.348</strong><span class="svelte-1uha8ag">Turmas monitoradas</span></div></div> <div class="edu-grid svelte-1uha8ag"><div class="edu-card svelte-1uha8ag">Evasão<span class="svelte-1uha8ag">Fluxo de gravação</span></div> <div class="edu-card svelte-1uha8ag">Painel da Secretaria<span class="svelte-1uha8ag">Indicadores em tempo real</span></div> <div class="edu-card svelte-1uha8ag">Matrícula Online<span class="svelte-1uha8ag">Inscrição municipal</span></div> <div class="edu-card svelte-1uha8ag">Gestão Escolar<span class="svelte-1uha8ag">Visão por unidade</span></div></div></div></div> <div class="phone phone-pay hero-pay svelte-1uha8ag"><div class="phone-notch dark svelte-1uha8ag"></div> <div class="phone-body svelte-1uha8ag">`);
    {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<header class="device-header svelte-1uha8ag"><div class="svelte-1uha8ag"><span class="device-label svelte-1uha8ag">Integração Pix Ready</span> <p class="device-sub svelte-1uha8ag">Checkout Fartech Pay</p></div> <span class="status-pill svelte-1uha8ag">Online</span></header> <div class="device-card svelte-1uha8ag"><div class="svelte-1uha8ag"><span class="muted svelte-1uha8ag">Valor a receber</span> <strong class="svelte-1uha8ag">${escape_html(pagamentoAtual.valor)}</strong></div> <div class="svelte-1uha8ag"><span class="muted svelte-1uha8ag">Cliente</span> <strong class="svelte-1uha8ag">${escape_html(pagamentoAtual.cliente)}</strong></div></div> <div class="device-form svelte-1uha8ag"><div class="fake-field svelte-1uha8ag" aria-label="Cartão ilustrativo"><span class="svelte-1uha8ag">Cartão</span> <div class="input fake-input svelte-1uha8ag"><span class="svelte-1uha8ag">${escape_html(pagamentoAtual.mascara)}</span> <span class="muted svelte-1uha8ag">${escape_html(pagamentoAtual.validade)}</span></div></div> <div class="fake-field svelte-1uha8ag" aria-label="Nome ilustrativo"><span class="svelte-1uha8ag">Nome</span> <div class="input fake-input svelte-1uha8ag"><span class="svelte-1uha8ag">${escape_html(pagamentoAtual.cliente)}</span></div></div> <button class="btn btn-primary svelte-1uha8ag" type="button" style="width:100%">Confirmar pagamento</button></div> <div class="checkout-logo svelte-1uha8ag"><img src="/images/logo.png" alt="Fartech Logo" class="svelte-1uha8ag"/></div>`);
    }
    $$renderer2.push(`<!--]--></div></div> <div class="phone phone-dark svelte-1uha8ag"><div class="phone-notch dark svelte-1uha8ag"></div> <div class="phone-body svelte-1uha8ag"><header class="imac-header svelte-1uha8ag" style="padding: 20px 18px 16px 18px;"><div class="svelte-1uha8ag"><p class="eyebrow svelte-1uha8ag">Avaliações ENEM</p> <h3 style="font-size: 1.4rem; line-height: 1.3; margin: 8px 0 12px 0;" class="svelte-1uha8ag">Histórico de desempenho 1998-2025</h3> <p class="muted svelte-1uha8ag" style="font-size: 0.88rem;">Acompanhe a evolução da rede nos simulados oficiais e resultados do ENEM.</p></div> <span class="pill outline svelte-1uha8ag" style="margin-top: 12px;">Próx. atualização: dez/2025</span></header> <div class="imac-cards svelte-1uha8ag" style="padding: 0 18px; gap: 10px; grid-template-columns: 1fr;"><div class="imac-card svelte-1uha8ag" style="padding: 14px;"><p class="muted svelte-1uha8ag" style="font-size: 0.78rem;">2024</p> <h4 style="font-size: 0.95rem; margin: 4px 0;" class="svelte-1uha8ag">Melhor média histórica</h4> <strong style="font-size: 1.3rem; color: #10b981;" class="svelte-1uha8ag">712 pts</strong> <small class="muted svelte-1uha8ag" style="font-size: 0.76rem; display: block; margin-top: 4px;">Rede municipal de Belo Horizonte</small></div> <div class="imac-card svelte-1uha8ag" style="padding: 14px;"><p class="muted svelte-1uha8ag" style="font-size: 0.78rem;">2023</p> <h4 style="font-size: 0.95rem; margin: 4px 0;" class="svelte-1uha8ag">Maior salto em simulados</h4> <strong style="font-size: 1.3rem; color: #10b981;" class="svelte-1uha8ag">+18 pts</strong> <small class="muted svelte-1uha8ag" style="font-size: 0.76rem; display: block; margin-top: 4px;">Telemetria ENEM</small></div> <div class="imac-card svelte-1uha8ag" style="padding: 14px;"><p class="muted svelte-1uha8ag" style="font-size: 0.78rem;">2015</p> <h4 style="font-size: 0.95rem; margin: 4px 0;" class="svelte-1uha8ag">Programa de tutoria</h4> <strong style="font-size: 1.3rem; color: #10b981;" class="svelte-1uha8ag">+12 pts</strong> <small class="muted svelte-1uha8ag" style="font-size: 0.76rem; display: block; margin-top: 4px;">Mentorias para 3º ano</small></div></div> <div class="imac-table svelte-1uha8ag" style="margin: 16px 18px 0 18px; font-size: 0.82rem;"><header style="font-size: 0.76rem; padding: 10px 12px;" class="svelte-1uha8ag"><span class="svelte-1uha8ag">Ano</span> <span class="svelte-1uha8ag">Simulados</span> <span class="svelte-1uha8ag">ENEM</span> <span class="svelte-1uha8ag">Dif.</span></header> <div class="imac-rows svelte-1uha8ag"><div class="imac-row svelte-1uha8ag" style="padding: 10px 12px; font-size: 0.82rem;"><span class="svelte-1uha8ag">2024</span><span class="svelte-1uha8ag">712</span><span class="svelte-1uha8ag">655</span><span class="pos svelte-1uha8ag">+57</span></div> <div class="imac-row svelte-1uha8ag" style="padding: 10px 12px; font-size: 0.82rem;"><span class="svelte-1uha8ag">2023</span><span class="svelte-1uha8ag">698</span><span class="svelte-1uha8ag">662</span><span class="pos svelte-1uha8ag">+36</span></div> <div class="imac-row svelte-1uha8ag" style="padding: 10px 12px; font-size: 0.82rem;"><span class="svelte-1uha8ag">2022</span><span class="svelte-1uha8ag">683</span><span class="svelte-1uha8ag">662</span><span class="pos svelte-1uha8ag">+21</span></div> <div class="imac-row svelte-1uha8ag" style="padding: 10px 12px; font-size: 0.82rem;"><span class="svelte-1uha8ag">2021</span><span class="svelte-1uha8ag">671</span><span class="svelte-1uha8ag">659</span><span class="pos svelte-1uha8ag">+12</span></div> <div class="imac-row svelte-1uha8ag" style="padding: 10px 12px; font-size: 0.82rem;"><span class="svelte-1uha8ag">2020</span><span class="svelte-1uha8ag">660</span><span class="svelte-1uha8ag">662</span><span class="neg svelte-1uha8ag">-2</span></div></div></div></div></div></div> <div style="display: flex; gap: 60px; margin-top: 40px; flex-wrap: wrap; justify-content: center; width: 100%;" class="svelte-1uha8ag"><div class="phone phone-landscape phone-dark svelte-1uha8ag"><div class="phone-body svelte-1uha8ag" style="display: grid; grid-template-columns: 240px 1fr 280px; gap: 0; padding: 0; height: 100%;"><div style="background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%); padding: 20px; display: flex; flex-direction: column; gap: 16px; border-right: 1px solid rgba(255,255,255,0.08);" class="svelte-1uha8ag"><div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;" class="svelte-1uha8ag"><div style="width: 32px; height: 32px; background: linear-gradient(135deg, #3b82f6, #1d4ed8); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: 900; color: white; font-size: 18px;" class="svelte-1uha8ag">📘</div> <strong style="color: #e5e7eb; font-size: 1rem;" class="svelte-1uha8ag">CEA</strong></div> <div style="background: rgba(59, 130, 246, 0.15); border: 1px solid rgba(59, 130, 246, 0.3); border-radius: 8px; padding: 12px; margin-bottom: 8px;" class="svelte-1uha8ag"><p style="color: rgba(229, 231, 235, 0.7); font-size: 0.72rem; margin: 0 0 4px 0;" class="svelte-1uha8ag">SIMULADOS</p> <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; margin-top: 8px;" class="svelte-1uha8ag"><div style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12); border-radius: 6px; padding: 8px; text-align: center; font-size: 0.85rem; color: #94a3b8;" class="svelte-1uha8ag">1</div> <div style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12); border-radius: 6px; padding: 8px; text-align: center; font-size: 0.85rem; color: #94a3b8;" class="svelte-1uha8ag">2</div> <div style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12); border-radius: 6px; padding: 8px; text-align: center; font-size: 0.85rem; color: #94a3b8;" class="svelte-1uha8ag">3</div> <div style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12); border-radius: 6px; padding: 8px; text-align: center; font-size: 0.85rem; color: #94a3b8;" class="svelte-1uha8ag">4</div> <div style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12); border-radius: 6px; padding: 8px; text-align: center; font-size: 0.85rem; color: #94a3b8;" class="svelte-1uha8ag">5</div> <div style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12); border-radius: 6px; padding: 8px; text-align: center; font-size: 0.85rem; color: #94a3b8;" class="svelte-1uha8ag">6</div> <div style="background: linear-gradient(135deg, #0ea5e9, #3b82f6); border: 1px solid rgba(14, 165, 233, 0.5); border-radius: 6px; padding: 8px; text-align: center; font-size: 0.85rem; color: white; font-weight: 700; box-shadow: 0 0 12px rgba(14, 165, 233, 0.4);" class="svelte-1uha8ag">7</div> <div style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12); border-radius: 6px; padding: 8px; text-align: center; font-size: 0.85rem; color: #94a3b8;" class="svelte-1uha8ag">8</div> <div style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12); border-radius: 6px; padding: 8px; text-align: center; font-size: 0.85rem; color: #94a3b8;" class="svelte-1uha8ag">9</div> <div style="background: rgba(139, 92, 246, 0.25); border: 1px solid rgba(139, 92, 246, 0.4); border-radius: 6px; padding: 8px; text-align: center; font-size: 0.7rem; color: #e9d5ff; font-weight: 600; grid-column: span 1;" class="svelte-1uha8ag">10<br class="svelte-1uha8ag"/><span style="font-size: 0.6rem;" class="svelte-1uha8ag">Novo 7.0</span></div></div></div> <div style="display: flex; align-items: center; gap: 8px; padding: 10px; background: rgba(255,255,255,0.05); border-radius: 6px; cursor: pointer;" class="svelte-1uha8ag"><span style="font-size: 1.1rem;" class="svelte-1uha8ag">🎯</span> <span style="color: #cbd5e1; font-size: 0.82rem;" class="svelte-1uha8ag">Produtos e Investimentos</span></div> <div style="display: flex; align-items: center; gap: 8px; padding: 10px; background: rgba(255,255,255,0.05); border-radius: 6px; cursor: pointer;" class="svelte-1uha8ag"><span style="font-size: 1.1rem;" class="svelte-1uha8ag">📝</span> <span style="color: #cbd5e1; font-size: 0.82rem;" class="svelte-1uha8ag">Análise &amp; Gestão</span></div> <div style="display: flex; align-items: center; gap: 8px; padding: 10px; background: rgba(255,255,255,0.05); border-radius: 6px; cursor: pointer;" class="svelte-1uha8ag"><span style="font-size: 1.1rem;" class="svelte-1uha8ag">💹</span> <span style="color: #cbd5e1; font-size: 0.82rem;" class="svelte-1uha8ag">Mercado Financeiro</span></div></div> <div style="background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%); padding: 24px; overflow-y: auto;" class="svelte-1uha8ag"><div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;" class="svelte-1uha8ag"><h3 style="color: #1e293b; font-size: 0.9rem; letter-spacing: 0.05em; font-weight: 700; margin: 0;" class="svelte-1uha8ag">QUESTÃO 5</h3> <span style="background: rgba(148, 163, 184, 0.15); color: #475569; padding: 6px 14px; border-radius: 20px; font-size: 0.75rem; font-weight: 600;" class="svelte-1uha8ag">Perfil e Comportamento do Investidor</span></div> <div style="color: #334155; font-size: 0.85rem; line-height: 1.6; margin-bottom: 20px;" class="svelte-1uha8ag"><p style="margin: 0 0 12px 0;" class="svelte-1uha8ag">No último encontro de analistas de uma corretora em uma capital brasileira, discutiu-se de que forma a disponibilidade de informações afeta preços dos ativos no mercado acionário. Surgiu, então, o debate sobre a Hipótese do Mercado Eficiente (HME) e seus diferentes níveis (fraca, semiforte e forte). Romário Teixeira alega que seria fácil obter ganhos acima da média se fossem realizadas análises detalhadas de dados passados,</p> <p style="margin: 0 0 12px 0;" class="svelte-1uha8ag">enquanto Ana Maria defende que todas as informações disponíveis já estariam refletidas nos preços. O ponto central dessa discussão sobre a eficiência de mercado está relacionado principalmente ao fato de que:</p> <p style="margin: 0;" class="svelte-1uha8ag">Se o Índice Preço Lucro (P/L) médio do segmento é R$19,00, um especialista em investimento deverá recomendar, em função da análise da P/L das empresas, a:</p></div> <div style="border: 2px solid #cbd5e1; border-radius: 12px; overflow: hidden; background: white;" class="svelte-1uha8ag"><table style="width: 100%; border-collapse: collapse;" class="svelte-1uha8ag"><thead class="svelte-1uha8ag"><tr style="background: linear-gradient(90deg, #1e293b, #334155);" class="svelte-1uha8ag"><th style="padding: 14px; text-align: left; color: white; font-size: 0.9rem; font-weight: 700; border-right: 1px solid rgba(255,255,255,0.1);" class="svelte-1uha8ag">Empresa</th><th style="padding: 14px; text-align: center; color: white; font-size: 0.9rem; font-weight: 700; border-right: 1px solid rgba(255,255,255,0.1);" class="svelte-1uha8ag">Preço de Mercado</th><th style="padding: 14px; text-align: center; color: white; font-size: 0.9rem; font-weight: 700;" class="svelte-1uha8ag">Lucro por Ação</th></tr></thead><tbody class="svelte-1uha8ag"><tr style="border-bottom: 1px solid #e2e8f0;" class="svelte-1uha8ag"><td style="padding: 16px; text-align: center; font-size: 1.3rem; font-weight: 900; color: #1e293b;" class="svelte-1uha8ag">X</td><td style="padding: 16px; text-align: center; font-size: 1rem; font-weight: 700; color: #0f172a;" class="svelte-1uha8ag">R$ 19,00</td><td style="padding: 16px; text-align: center; font-size: 1rem; font-weight: 700; color: #0f172a;" class="svelte-1uha8ag">R$ 0,82</td></tr><tr style="border-bottom: 1px solid #e2e8f0; background: rgba(248, 250, 252, 0.5);" class="svelte-1uha8ag"><td style="padding: 16px; text-align: center; font-size: 1.3rem; font-weight: 900; color: #1e293b;" class="svelte-1uha8ag">Y</td><td style="padding: 16px; text-align: center; font-size: 1rem; font-weight: 700; color: #0f172a;" class="svelte-1uha8ag">R$ 20,00</td><td style="padding: 16px; text-align: center; font-size: 1rem; font-weight: 700; color: #0f172a;" class="svelte-1uha8ag">R$ 1,10</td></tr><tr class="svelte-1uha8ag"><td style="padding: 16px; text-align: center; font-size: 1.3rem; font-weight: 900; color: #1e293b;" class="svelte-1uha8ag">W</td><td style="padding: 16px; text-align: center; font-size: 1rem; font-weight: 700; color: #0f172a;" class="svelte-1uha8ag">R$ 23,50</td><td style="padding: 16px; text-align: center; font-size: 1rem; font-weight: 700; color: #0f172a;" class="svelte-1uha8ag">R$ 1,05</td></tr></tbody></table></div></div> <div style="background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%); padding: 20px; border-left: 1px solid rgba(255,255,255,0.08); display: flex; flex-direction: column; gap: 20px;" class="svelte-1uha8ag"><div style="text-align: center;" class="svelte-1uha8ag"><div style="font-size: 2.8rem; font-weight: 900; color: white; margin-bottom: 4px;" class="svelte-1uha8ag">0.00%</div> <p style="color: rgba(229, 231, 235, 0.6); font-size: 0.72rem; margin: 0; letter-spacing: 0.08em;" class="svelte-1uha8ag">APROVEITAMENTO</p> <p style="color: rgba(229, 231, 235, 0.5); font-size: 0.68rem; margin: 4px 0 0 0;" class="svelte-1uha8ag">0 simulado(s)</p></div> <div style="background: rgba(14, 165, 233, 0.1); border: 1px solid rgba(14, 165, 233, 0.3); border-radius: 10px; padding: 16px;" class="svelte-1uha8ag"><div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;" class="svelte-1uha8ag"><span style="font-size: 1.2rem;" class="svelte-1uha8ag">📊</span> <strong style="color: #38bdf8; font-size: 0.85rem;" class="svelte-1uha8ag">ESTATÍSTICAS</strong></div> <div style="display: flex; flex-direction: column; gap: 10px;" class="svelte-1uha8ag"><div class="svelte-1uha8ag"><div style="color: #38bdf8; font-size: 1.6rem; font-weight: 900;" class="svelte-1uha8ag">0</div> <div style="color: rgba(229, 231, 235, 0.6); font-size: 0.7rem;" class="svelte-1uha8ag">Total de Questões</div></div> <div class="svelte-1uha8ag"><div style="color: #10b981; font-size: 1.6rem; font-weight: 900;" class="svelte-1uha8ag">0</div> <div style="color: rgba(229, 231, 235, 0.6); font-size: 0.7rem;" class="svelte-1uha8ag">Questões Certas</div></div> <div class="svelte-1uha8ag"><div style="color: #ef4444; font-size: 1.6rem; font-weight: 900;" class="svelte-1uha8ag">0</div> <div style="color: rgba(229, 231, 235, 0.6); font-size: 0.7rem;" class="svelte-1uha8ag">Questões Erradas</div></div> <div class="svelte-1uha8ag"><div style="color: #22d3ee; font-size: 1.3rem; font-weight: 900;" class="svelte-1uha8ag">0:00</div> <div style="color: rgba(229, 231, 235, 0.6); font-size: 0.7rem;" class="svelte-1uha8ag">Tempo Médio</div></div></div></div> <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 14px;" class="svelte-1uha8ag"><div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;" class="svelte-1uha8ag"><span style="font-size: 1rem;" class="svelte-1uha8ag">⚡</span> <strong style="color: #fbbf24; font-size: 0.8rem;" class="svelte-1uha8ag">AÇÕES RÁPIDAS</strong></div> <div style="display: flex; flex-direction: column; gap: 8px;" class="svelte-1uha8ag"><button style="background: rgba(59, 130, 246, 0.2); border: 1px solid rgba(59, 130, 246, 0.4); color: #93c5fd; padding: 8px; border-radius: 6px; font-size: 0.72rem; cursor: pointer;" class="svelte-1uha8ag">📋 Revisar Questões</button> <button style="background: rgba(168, 85, 247, 0.2); border: 1px solid rgba(168, 85, 247, 0.4); color: #d8b4fe; padding: 8px; border-radius: 6px; font-size: 0.72rem; cursor: pointer;" class="svelte-1uha8ag">🎲 Simulado Aleatório</button></div></div></div></div></div> <div class="phone phone-landscape phone-dark svelte-1uha8ag"><div class="phone-body svelte-1uha8ag" style="display: grid; grid-template-columns: 180px 1fr 180px; gap: 0; padding: 0; height: 100%;"><div style="background: linear-gradient(180deg, #0f172a 0%, #020617 100%); padding: 16px 12px; display: flex; flex-direction: column; gap: 10px; border-right: 1px solid rgba(255,255,255,0.06);" class="svelte-1uha8ag"><div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px; padding-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.08);" class="svelte-1uha8ag"><span style="font-size: 0.7rem; color: #64748b; text-transform: uppercase; letter-spacing: 0.1em;" class="svelte-1uha8ag">Simulado em Tempo</span></div> <div style="background: rgba(30, 41, 59, 0.5); border-radius: 10px; padding: 10px; border: 1px solid rgba(255,255,255,0.08);" class="svelte-1uha8ag"><p style="color: #64748b; font-size: 0.6rem; margin: 0 0 6px 0; text-transform: uppercase; letter-spacing: 0.08em;" class="svelte-1uha8ag">Indicadores</p> <div style="display: flex; gap: 8px; margin-top: 8px;" class="svelte-1uha8ag"><div style="flex: 1; background: rgba(59, 130, 246, 0.12); border: 1px solid rgba(59, 130, 246, 0.25); border-radius: 6px; padding: 6px; text-align: center;" class="svelte-1uha8ag"><div style="color: #94a3b8; font-size: 0.6rem; margin-bottom: 2px;" class="svelte-1uha8ag">RESP.</div> <div style="color: #3b82f6; font-size: 1.2rem; font-weight: 900;" class="svelte-1uha8ag">1</div> <div style="color: #475569; font-size: 0.55rem; margin-top: 1px;" class="svelte-1uha8ag">de 50</div></div> <div style="flex: 1; background: rgba(16, 185, 129, 0.12); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: 6px; padding: 6px; text-align: center;" class="svelte-1uha8ag"><div style="color: #94a3b8; font-size: 0.6rem; margin-bottom: 2px;" class="svelte-1uha8ag">CORRETAS</div> <div style="color: #10b981; font-size: 1.2rem; font-weight: 900;" class="svelte-1uha8ag">0</div> <div style="color: #475569; font-size: 0.55rem; margin-top: 1px;" class="svelte-1uha8ag">0%</div></div></div></div> <div style="background: rgba(30, 41, 59, 0.5); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.08);" class="svelte-1uha8ag"><p style="color: #64748b; font-size: 0.65rem; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 0.08em;" class="svelte-1uha8ag">Progresso Geral</p> <div style="color: #cbd5e1; font-size: 1.1rem; font-weight: 700; margin-bottom: 6px;" class="svelte-1uha8ag">1/50</div> <div style="background: rgba(15, 23, 42, 0.6); height: 8px; border-radius: 4px; overflow: hidden; margin-bottom: 8px;" class="svelte-1uha8ag"><div style="background: linear-gradient(90deg, #3b82f6, #0ea5e9); width: 2%; height: 100%; border-radius: 4px;" class="svelte-1uha8ag"></div></div></div> <div style="background: rgba(30, 41, 59, 0.5); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.08);" class="svelte-1uha8ag"><p style="color: #64748b; font-size: 0.65rem; margin: 0 0 6px 0; text-transform: uppercase; letter-spacing: 0.08em;" class="svelte-1uha8ag">Taxa de Acerto</p> <div style="color: #cbd5e1; font-size: 2rem; font-weight: 900;" class="svelte-1uha8ag">0.0%</div></div> <div style="background: rgba(30, 41, 59, 0.5); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.08); margin-top: auto;" class="svelte-1uha8ag"><p style="color: #64748b; font-size: 0.65rem; margin: 0 0 6px 0; text-transform: uppercase; letter-spacing: 0.08em;" class="svelte-1uha8ag">Tempo Médio por Questão</p> <div style="color: #38bdf8; font-size: 1.8rem; font-weight: 900;" class="svelte-1uha8ag">52.4 s</div></div></div> <div style="background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%); padding: 24px 20px; overflow-y: auto; display: flex; flex-direction: column;" class="svelte-1uha8ag"><div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.08);" class="svelte-1uha8ag"><button style="background: transparent; border: none; color: #94a3b8; font-size: 0.85rem; cursor: pointer; display: flex; align-items: center; gap: 6px;" class="svelte-1uha8ag">← Voltar</button> <div style="display: flex; align-items: center; gap: 8px;" class="svelte-1uha8ag"><span style="color: #64748b; font-size: 0.7rem;" class="svelte-1uha8ag">Usuário #55 | Respostas salvas automaticamente</span></div></div> <div style="margin-bottom: 20px;" class="svelte-1uha8ag"><h2 style="color: #e2e8f0; font-size: 1.4rem; font-weight: 700; margin: 0 0 12px 0;" class="svelte-1uha8ag">Enem 2024</h2> <p style="color: #94a3b8; font-size: 0.85rem; margin: 0;" class="svelte-1uha8ag">Enem 2024</p> <p style="color: #64748b; font-size: 0.8rem; margin: 4px 0 0 0;" class="svelte-1uha8ag">Questão 1 de 50 · 1 respondidas</p></div> <div style="background: rgba(30, 41, 59, 0.6); border-radius: 12px; padding: 20px; border: 1px solid rgba(255,255,255,0.08); margin-bottom: 20px;" class="svelte-1uha8ag"><div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;" class="svelte-1uha8ag"><span style="background: rgba(59, 130, 246, 0.2); color: #60a5fa; padding: 6px 12px; border-radius: 6px; font-size: 0.75rem; font-weight: 600;" class="svelte-1uha8ag">Linguagens</span> <span style="background: rgba(245, 158, 11, 0.2); color: #fbbf24; padding: 6px 12px; border-radius: 6px; font-size: 0.75rem; font-weight: 600;" class="svelte-1uha8ag">Médio</span> <span style="background: rgba(139, 92, 246, 0.2); color: #a78bfa; padding: 6px 12px; border-radius: 6px; font-size: 0.75rem; font-weight: 600;" class="svelte-1uha8ag">ENEM 2024</span></div> <h3 style="color: #e2e8f0; font-size: 1rem; font-weight: 700; margin: 0 0 12px 0;" class="svelte-1uha8ag">Questão 2024006</h3> <div style="background: rgba(59, 130, 246, 0.08); border-left: 3px solid #3b82f6; padding: 12px 14px; border-radius: 6px; margin-bottom: 16px;" class="svelte-1uha8ag"><p style="color: #cbd5e1; font-size: 0.82rem; line-height: 1.5; margin: 0;" class="svelte-1uha8ag">**Expressões e termos utilizados no Amazonas são retratados em livro e em camisetas**</p></div> <div style="color: #cbd5e1; font-size: 0.82rem; line-height: 1.7; margin-bottom: 16px;" class="svelte-1uha8ag"><p style="margin: 0 0 12px 0;" class="svelte-1uha8ag">"Na linguagem, podemos nos ver da forma mais verdadeira: nossas crenças, nossos valores, nosso lugar no mundo", afirmou o doutor em linguística e professor da Ufam em seu livro "Amazonês: expressões e termos usados no Amazonas". Portanto, o amazonense, com todas as suas "cunhantãs" e "curumin", acaba por encontrar um lugar no mundo e formar uma unidade linguística, informalmente denominada de português "caboco", que muito se diferencia do português "mineiro", "gaúcho", "carioca" e outras "tribos" espalhadas pelo Brasil.</p></div> <p style="color: #94a3b8; font-size: 0.75rem; line-height: 1.5; margin-bottom: 16px;" class="svelte-1uha8ag">Um designer amazonense também achou o amazonês "xibata", tanto é que criou uma série de camisetas estampadas com o nome de Cabocqués Ilustrado, que une arte e humor com as expressões típicas da região. A coleção Cabocqués ilustrado já foi lançada, e os modelos têm nomes: Leseira Baré, Xibata no Balde e Até o Tucupi, e 43 ainda na fila de espera. Para o criador, as camisetas têm como objetivo "resgatar o orgulho do povo manauara, do povo do Norte".</p> <p style="color: #94a3b8; font-size: 0.75rem; margin: 0;" class="svelte-1uha8ag">Disponível em: g1.globo.com. Acesso em: 15 jan. 2024 (adaptado).</p> <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.25); border-radius: 8px; padding: 14px; margin-top: 16px;" class="svelte-1uha8ag"><div style="display: flex; align-items: flex-start; gap: 10px;" class="svelte-1uha8ag"><span style="color: #60a5fa; font-size: 1.2rem; flex-shrink: 0;" class="svelte-1uha8ag">💡</span> <p style="color: #cbd5e1; font-size: 0.8rem; line-height: 1.5; margin: 0;" class="svelte-1uha8ag">A reportagem apresenta duas iniciativas: o livro "Amazonês" e as camisetas do "Cabocqués ilustrado". Com temática em comum, essas iniciativas</p></div></div></div> <div style="margin-top: auto;" class="svelte-1uha8ag"><p style="color: #64748b; font-size: 0.75rem; margin-bottom: 12px; font-weight: 600;" class="svelte-1uha8ag">Alternativas:</p> <div style="display: flex; flex-direction: column; gap: 10px;" class="svelte-1uha8ag"><div style="background: rgba(16, 185, 129, 0.15); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 10px; padding: 14px; cursor: pointer; display: flex; align-items: flex-start; gap: 12px;" class="svelte-1uha8ag"><div style="width: 24px; height: 24px; background: rgba(16, 185, 129, 0.3); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;" class="svelte-1uha8ag"><span style="color: #10b981; font-weight: 900; font-size: 0.9rem;" class="svelte-1uha8ag">✓</span></div> <p style="color: #d1fae5; font-size: 0.85rem; line-height: 1.5; margin: 0;" class="svelte-1uha8ag">valorizam o repertório linguístico do povo do Amazonas.</p></div> <div style="background: rgba(239, 68, 68, 0.12); border: 2px solid rgba(239, 68, 68, 0.3); border-radius: 10px; padding: 14px; cursor: pointer; display: flex; align-items: flex-start; gap: 12px;" class="svelte-1uha8ag"><div style="width: 24px; height: 24px; background: rgba(239, 68, 68, 0.25); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;" class="svelte-1uha8ag"><span style="color: #ef4444; font-weight: 900; font-size: 0.9rem;" class="svelte-1uha8ag">✕</span></div> <p style="color: #fecaca; font-size: 0.85rem; line-height: 1.5; margin: 0;" class="svelte-1uha8ag">evidenciam produtos feitos por empreendedores da região Norte.</p></div></div></div></div> <div style="background: linear-gradient(180deg, #0f172a 0%, #020617 100%); padding: 16px 12px; border-left: 1px solid rgba(255,255,255,0.06); display: flex; flex-direction: column; gap: 12px;" class="svelte-1uha8ag"><div style="text-align: center; padding-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.08);" class="svelte-1uha8ag"><p style="color: #64748b; font-size: 0.65rem; margin: 0 0 4px 0; text-transform: uppercase; letter-spacing: 0.1em;" class="svelte-1uha8ag">Painel Auxiliar</p> <h3 style="color: #e2e8f0; font-size: 0.9rem; font-weight: 700; margin: 0;" class="svelte-1uha8ag">Insights</h3></div> <div style="background: rgba(30, 41, 59, 0.5); border-radius: 10px; padding: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.08);" class="svelte-1uha8ag"><div style="width: 60px; height: 60px; margin: 0 auto 8px; border-radius: 50%; background: conic-gradient(#3b82f6 0deg 7.2deg, rgba(30, 41, 59, 0.3) 7.2deg); display: flex; align-items: center; justify-content: center; position: relative;" class="svelte-1uha8ag"><div style="width: 45px; height: 45px; background: #0f172a; border-radius: 50%; display: flex; align-items: center; justify-content: center;" class="svelte-1uha8ag"><span style="color: #3b82f6; font-size: 1rem; font-weight: 900;" class="svelte-1uha8ag">2%</span></div></div> <p style="color: #64748b; font-size: 0.65rem; margin: 0; text-transform: uppercase; letter-spacing: 0.08em;" class="svelte-1uha8ag">Progresso</p> <p style="color: #94a3b8; font-size: 0.75rem; margin: 4px 0 0 0;" class="svelte-1uha8ag">1 de 50 questões</p></div> <div style="background: rgba(30, 41, 59, 0.5); border-radius: 10px; padding: 12px; border: 1px solid rgba(255,255,255,0.08);" class="svelte-1uha8ag"><div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;" class="svelte-1uha8ag"><p style="color: #64748b; font-size: 0.65rem; margin: 0; text-transform: uppercase; letter-spacing: 0.08em;" class="svelte-1uha8ag">Tempo Médio</p> <span style="color: #cbd5e1; font-size: 0.7rem; font-weight: 600;" class="svelte-1uha8ag">ritmo ideal</span></div> <div style="color: #38bdf8; font-size: 1.6rem; font-weight: 900; margin-bottom: 4px;" class="svelte-1uha8ag">52.4s</div> <p style="color: #64748b; font-size: 0.65rem; margin: 0;" class="svelte-1uha8ag">Tempo real</p></div> <div style="background: rgba(30, 41, 59, 0.5); border-radius: 10px; padding: 12px; border: 1px solid rgba(255,255,255,0.08);" class="svelte-1uha8ag"><div style="display: flex; align-items: center; gap: 6px; margin-bottom: 10px;" class="svelte-1uha8ag"><span style="font-size: 0.9rem;" class="svelte-1uha8ag">📊</span> <p style="color: #64748b; font-size: 0.65rem; margin: 0; text-transform: uppercase; letter-spacing: 0.08em;" class="svelte-1uha8ag">Tendências</p></div> <div style="display: flex; flex-direction: column; gap: 6px;" class="svelte-1uha8ag"><div style="display: flex; justify-content: space-between; align-items: center;" class="svelte-1uha8ag"><span style="color: #fbbf24; font-size: 0.7rem;" class="svelte-1uha8ag">● Em revisão</span> <span style="color: #cbd5e1; font-weight: 700; font-size: 0.8rem;" class="svelte-1uha8ag">1</span></div> <div style="display: flex; justify-content: space-between; align-items: center;" class="svelte-1uha8ag"><span style="color: #cbd5e1; font-size: 0.7rem;" class="svelte-1uha8ag">● Pendentes</span> <span style="color: #cbd5e1; font-weight: 700; font-size: 0.8rem;" class="svelte-1uha8ag">49</span></div></div></div> <button style="background: linear-gradient(135deg, #06b6d4, #3b82f6); border: none; color: white; padding: 10px; border-radius: 8px; font-size: 0.75rem; font-weight: 700; cursor: pointer; box-shadow: 0 4px 12px rgba(6, 182, 212, 0.3); margin-top: auto;" class="svelte-1uha8ag">Aa</button></div></div></div></div></div></section> <section class="section svelte-1uha8ag"><div class="container card svelte-1uha8ag" style="text-align:center;"><p class="eyebrow svelte-1uha8ag">Next Step</p> <h2 class="section-title svelte-1uha8ag">Destrave a versão cloud da sua operação.</h2> <p class="section-subtitle svelte-1uha8ag">Faça um discovery com nossos product engineers e receba um blueprint com integrações, KPIs e roadmap em até 7 dias.</p> <a class="btn btn-primary svelte-1uha8ag" href="/contato">Quero meu blueprint</a></div></section>`);
  });
}
export {
  _page as default
};
