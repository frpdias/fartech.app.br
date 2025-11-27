import { w as ensure_array_like, F as attr_style, G as sanitize_slots, z as slot, x as bind_props, y as head, J as spread_props, v as attr_class } from "../../chunks/index.js";
import { a as attr } from "../../chunks/attributes.js";
import { j as fallback } from "../../chunks/utils2.js";
import { e as escape_html } from "../../chunks/escaping.js";
import { a as ssr_context } from "../../chunks/context.js";
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
    $$renderer2.push(`<!----> <div class="container hero-grid svelte-1q37ri0"><div class="hero-content svelte-1q37ri0"><div class="hero-text-wrapper svelte-1q37ri0"><p class="eyebrow svelte-1q37ri0">${escape_html(eyebrow)}</p> <h1 class="svelte-1q37ri0">${escape_html(title)}</h1> <p class="svelte-1q37ri0">${escape_html(subtitle)}</p> <div class="hero-actions svelte-1q37ri0"><a class="btn btn-primary svelte-1q37ri0"${attr("href", primaryHref)}>${escape_html(primaryLabel)}</a> <a class="btn btn-secondary svelte-1q37ri0"${attr("href", secondaryHref)}>${escape_html(secondaryLabel)}</a></div> `);
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
    $$renderer2.push(`<!--]--></div></section>`);
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
      $$renderer3.push(`<script type="application/ld+json" class="svelte-1uha8ag">
    {JSON.stringify(structuredData)}
  <\/script><!---->`);
    });
    Hero($$renderer2, {
      eyebrow: "Fartech Platform OS",
      title: "Infraestrutura digital que mantém operações críticas sempre online.",
      subtitle: "Uma plataforma SaaS que conecta IoT, automação, manutenção e dados corporativos para times que precisam decidir rápido.",
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
          $$renderer3.push(`<div slot="visual" class="hero-visual-stack svelte-1uha8ag"><div class="phone phone-light svelte-1uha8ag"><div class="phone-notch svelte-1uha8ag"></div> <div class="phone-body svelte-1uha8ag"><header class="phone-top svelte-1uha8ag"><span class="pill ghost svelte-1uha8ag">Rocket Rides</span> <span class="pill muted svelte-1uha8ag">Pesquisar</span></header> <div class="phone-stats svelte-1uha8ag"><div class="stat-card svelte-1uha8ag"><p class="muted svelte-1uha8ag">Volume liquidado hoje</p> <strong class="svelte-1uha8ag">R$ 3.528.198,72</strong> <div class="sparkline svelte-1uha8ag"></div></div> <div class="stat-card svelte-1uha8ag"><p class="muted svelte-1uha8ag">Ticket médio</p> <strong class="svelte-1uha8ag">R$ 392,74</strong> <div class="pill success svelte-1uha8ag">+12% vs. ontem</div></div> <div class="stat-card compact svelte-1uha8ag"><p class="muted svelte-1uha8ag">Aprovação</p> <strong class="svelte-1uha8ag">98,4%</strong> <div class="pill neutral svelte-1uha8ag">Em tempo real</div></div></div> <div class="orders-card svelte-1uha8ag"><div class="orders-header svelte-1uha8ag"><p class="muted svelte-1uha8ag">Transações recentes</p> <span class="pill subtle svelte-1uha8ag">Atualizado em tempo real</span></div> <div class="orders-list svelte-1uha8ag"><!--[-->`);
          const each_array = ensure_array_like(transacoes);
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let trans = each_array[$$index];
            $$renderer3.push(`<div class="order animate svelte-1uha8ag"><div class="svelte-1uha8ag"><strong class="svelte-1uha8ag">${escape_html(trans.valor)}</strong> <p class="muted svelte-1uha8ag">${escape_html(trans.descricao)}</p></div> <span${attr_class(`pill ${badgeClass(trans.status)}`, "svelte-1uha8ag")}>${escape_html(trans.status === "pago" ? "Pago" : trans.status === "analise" ? "Análise" : "Falha")}</span></div>`);
          }
          $$renderer3.push(`<!--]--></div></div></div></div> <div class="phone phone-dark svelte-1uha8ag"><div class="phone-notch dark svelte-1uha8ag"></div> <div class="phone-body svelte-1uha8ag"><header class="education-head svelte-1uha8ag"><p class="eyebrow svelte-1uha8ag">SaaS Educacional Municipal</p> <h3 class="svelte-1uha8ag">Plataforma oficial da Secretaria Municipal de Educação.</h3> <p class="muted svelte-1uha8ag">Acompanhe matrículas, transporte e operações críticas em tempo real.</p> <div class="edu-actions svelte-1uha8ag"><span class="pill primary svelte-1uha8ag">Acessar Central Operacional</span> <span class="pill outline svelte-1uha8ag">Secretaria Parceira</span></div> <small class="muted svelte-1uha8ag">Próxima atualização 15/11</small></header> <div class="edu-stats svelte-1uha8ag"><div class="svelte-1uha8ag"><strong class="svelte-1uha8ag">128</strong><span class="svelte-1uha8ag">Escolas conectadas</span></div> <div class="svelte-1uha8ag"><strong class="svelte-1uha8ag">52.430</strong><span class="svelte-1uha8ag">Estudantes</span></div> <div class="svelte-1uha8ag"><strong class="svelte-1uha8ag">2.348</strong><span class="svelte-1uha8ag">Turmas monitoradas</span></div></div> <div class="edu-grid svelte-1uha8ag"><div class="edu-card svelte-1uha8ag">Evasão<span class="svelte-1uha8ag">Fluxo de gravação</span></div> <div class="edu-card svelte-1uha8ag">Painel da Secretaria<span class="svelte-1uha8ag">Indicadores em tempo real</span></div> <div class="edu-card svelte-1uha8ag">Matrícula Online<span class="svelte-1uha8ag">Inscrição municipal</span></div> <div class="edu-card svelte-1uha8ag">Gestão Escolar<span class="svelte-1uha8ag">Visão por unidade</span></div></div></div></div> <div class="phone phone-pay hero-pay svelte-1uha8ag"><div class="phone-notch dark svelte-1uha8ag"></div> <div class="phone-body svelte-1uha8ag"><header class="device-header svelte-1uha8ag"><div class="svelte-1uha8ag"><span class="device-label svelte-1uha8ag">Integração Pix Ready</span> <p class="device-sub svelte-1uha8ag">Checkout Fartech Pay</p></div> <span class="status-pill svelte-1uha8ag">Online</span></header> <div class="device-card svelte-1uha8ag"><div class="svelte-1uha8ag"><span class="muted svelte-1uha8ag">Valor a receber</span> <strong class="svelte-1uha8ag">${escape_html(pagamentoAtual.valor)}</strong></div> <div class="svelte-1uha8ag"><span class="muted svelte-1uha8ag">Cliente</span> <strong class="svelte-1uha8ag">${escape_html(pagamentoAtual.cliente)}</strong></div></div> <div class="device-form svelte-1uha8ag"><div class="fake-field svelte-1uha8ag" aria-label="Cartão ilustrativo"><span class="svelte-1uha8ag">Cartão</span> <div class="input fake-input svelte-1uha8ag"><span class="svelte-1uha8ag">${escape_html(pagamentoAtual.mascara)}</span> <span class="muted svelte-1uha8ag">${escape_html(pagamentoAtual.validade)}</span></div></div> <div class="fake-field svelte-1uha8ag" aria-label="Nome ilustrativo"><span class="svelte-1uha8ag">Nome</span> <div class="input fake-input svelte-1uha8ag">Fernanda V.</div></div> <div class="fake-field split svelte-1uha8ag" aria-label="CVV ilustrativo"><span class="svelte-1uha8ag">CVV</span> <div class="input fake-input svelte-1uha8ag">123</div></div></div> <button class="btn device-btn svelte-1uha8ag">Confirmar pagamento</button> <div class="device-icons svelte-1uha8ag"><span class="svelte-1uha8ag">Pix</span> <span class="svelte-1uha8ag">Visa</span> <span class="svelte-1uha8ag">Mastercard</span> <span class="svelte-1uha8ag">Apple Pay</span></div> <div class="checkout-logo svelte-1uha8ag"><img src="/images/logo.png" alt="Fartech" loading="lazy" decoding="async" class="svelte-1uha8ag"/></div></div></div></div>`);
        }
      }
    });
    $$renderer2.push(`<!----> <section class="section svelte-1uha8ag"><div class="container svelte-1uha8ag"><p class="eyebrow svelte-1uha8ag">Por que Fartech</p> <h2 class="section-title svelte-1uha8ag">Produto, dados e confiabilidade em uma única stack.</h2> <p class="section-subtitle svelte-1uha8ag">Desenhamos jornadas digitais de alto impacto com times ágeis, observabilidade total e entregas mensuráveis.</p> <div class="diferenciais-grid svelte-1uha8ag"><!--[-->`);
    const each_array_1 = ensure_array_like(diferenciais);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let item = each_array_1[$$index_1];
      CardServico($$renderer2, spread_props([item]));
    }
    $$renderer2.push(`<!--]--></div></div></section> <section class="section svelte-1uha8ag" id="servicos"><div class="container svelte-1uha8ag"><p class="eyebrow svelte-1uha8ag">Serviços</p> <div class="section-title svelte-1uha8ag">Portfólio modular pronto para plug-and-play.</div> <div class="services-grid svelte-1uha8ag"><!--[-->`);
    const each_array_2 = ensure_array_like(services);
    for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
      let service = each_array_2[$$index_2];
      CardServico($$renderer2, spread_props([service]));
    }
    $$renderer2.push(`<!--]--></div> <div style="margin-top:40px" class="svelte-1uha8ag"><a class="btn btn-secondary svelte-1uha8ag" href="/servicos">Ver todos os serviços</a></div></div></section> <section class="section svelte-1uha8ag" id="cases"><div class="container svelte-1uha8ag"><p class="eyebrow svelte-1uha8ag">Cases</p> <h2 class="section-title svelte-1uha8ag">Resultados escaláveis monitorados em tempo real.</h2> <div class="cases-grid svelte-1uha8ag"><!--[-->`);
    const each_array_3 = ensure_array_like(cases);
    for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
      let caseItem = each_array_3[$$index_3];
      CaseCard($$renderer2, spread_props([caseItem]));
    }
    $$renderer2.push(`<!--]--></div></div></section> <section class="section svelte-1uha8ag" id="depoimentos"><div class="container svelte-1uha8ag"><p class="eyebrow svelte-1uha8ag">Depoimentos</p> <h2 class="section-title svelte-1uha8ag">Clientes que colocaram o core industrial na nuvem.</h2> <div class="depoimentos-grid svelte-1uha8ag"><!--[-->`);
    const each_array_4 = ensure_array_like(depoimentos);
    for (let $$index_4 = 0, $$length = each_array_4.length; $$index_4 < $$length; $$index_4++) {
      let depo = each_array_4[$$index_4];
      Depoimento($$renderer2, spread_props([depo]));
    }
    $$renderer2.push(`<!--]--></div></div></section> <section class="section svelte-1uha8ag" id="dashboards"><div class="container svelte-1uha8ag"><p class="eyebrow svelte-1uha8ag">Dashboards &amp; Integrações</p> <h2 class="section-title svelte-1uha8ag">Visualize dados em tempo real com painéis intuitivos.</h2> <div class="dashboards-showcase svelte-1uha8ag"><div class="dashboard-left svelte-1uha8ag"><div class="desktop-frame svelte-1uha8ag"><div class="desktop-sidebar svelte-1uha8ag"><div class="logo-mark svelte-1uha8ag"><span class="star svelte-1uha8ag">★</span> <div class="svelte-1uha8ag"><strong class="svelte-1uha8ag">FARTECH</strong> <small class="svelte-1uha8ag">Educacional</small></div></div> <nav class="desktop-nav svelte-1uha8ag"><a class="nav-item active svelte-1uha8ag" href="#dashboards"><span class="svelte-1uha8ag">🎯</span> <div class="svelte-1uha8ag"><strong class="svelte-1uha8ag">Painel do Aluno</strong> <small class="svelte-1uha8ag">Desempenho detalhado</small></div></a> <a class="nav-item svelte-1uha8ag" href="#dashboards"><span class="svelte-1uha8ag">🏆</span> <div class="svelte-1uha8ag"><strong class="svelte-1uha8ag">Ranking</strong> <small class="svelte-1uha8ag">Compare seu desempenho</small></div></a> <a class="nav-item svelte-1uha8ag" href="#dashboards"><span class="svelte-1uha8ag">📊</span> <div class="svelte-1uha8ag"><strong class="svelte-1uha8ag">Estatísticas</strong> <small class="svelte-1uha8ag">Métricas avançadas</small></div></a> <a class="nav-item svelte-1uha8ag" href="#dashboards"><span class="svelte-1uha8ag">🧠</span> <div class="svelte-1uha8ag"><strong class="svelte-1uha8ag">Simulados ENEM</strong> <small class="svelte-1uha8ag">Escolha novos desafios</small></div></a> <a class="nav-item svelte-1uha8ag" href="#dashboards"><span class="svelte-1uha8ag">🖥</span> <div class="svelte-1uha8ag"><strong class="svelte-1uha8ag">Monitor</strong> <small class="svelte-1uha8ag">Status em tempo real</small></div></a></nav></div> <div class="desktop-main svelte-1uha8ag"><header class="desktop-topbar svelte-1uha8ag"><div class="status-group svelte-1uha8ag"><span class="pill outline svelte-1uha8ag">Online</span> <span class="pill muted svelte-1uha8ag">17:50</span> <span class="pill danger svelte-1uha8ag">Sair</span></div></header> <div class="desktop-hero svelte-1uha8ag"><div class="svelte-1uha8ag"><p class="eyebrow svelte-1uha8ag">Central do estudante</p> <h3 class="svelte-1uha8ag">Simulados com experiência Stripe-level em qualquer tela.</h3> <p class="muted svelte-1uha8ag">Continue de onde parou, acompanhe o progresso e explore novos desafios com interface fluida.</p> <div class="pill-group svelte-1uha8ag"><span class="pill primary svelte-1uha8ag">Todos</span> <span class="pill muted svelte-1uha8ag">Não respondidos</span> <span class="pill muted svelte-1uha8ag">Respondidos</span></div></div> <div class="cta-group svelte-1uha8ag"><button class="btn btn-primary svelte-1uha8ag">Continuar simulado</button> <button class="btn btn-secondary svelte-1uha8ag">Ver estatísticas</button></div></div> <div class="desktop-cards svelte-1uha8ag"><div class="desktop-card svelte-1uha8ag"><p class="eyebrow svelte-1uha8ag">Enem 2024</p> <h4 class="svelte-1uha8ag">50 questões</h4> <p class="muted svelte-1uha8ag">Seu progresso: 20%</p> <div class="progress svelte-1uha8ag"><span style="width:20%" class="svelte-1uha8ag"></span></div> <button class="btn btn-secondary svelte-1uha8ag">Iniciar</button></div> <div class="desktop-card svelte-1uha8ag"><p class="eyebrow svelte-1uha8ag">Enem 2023</p> <h4 class="svelte-1uha8ag">185 questões</h4> <p class="muted svelte-1uha8ag">Seu progresso: 3%</p> <div class="progress svelte-1uha8ag"><span style="width:3%" class="svelte-1uha8ag"></span></div> <button class="btn btn-secondary svelte-1uha8ag">Iniciar</button></div> <div class="desktop-card svelte-1uha8ag"><p class="eyebrow svelte-1uha8ag">Enem 2009</p> <h4 class="svelte-1uha8ag">180 questões</h4> <p class="muted svelte-1uha8ag">Seu progresso: 0%</p> <div class="progress svelte-1uha8ag"><span style="width:0%" class="svelte-1uha8ag"></span></div> <button class="btn btn-secondary svelte-1uha8ag">Iniciar</button></div></div></div></div></div> <div class="dashboard-right svelte-1uha8ag"><div class="imac-frame svelte-1uha8ag"><div class="imac-screen svelte-1uha8ag"><header class="imac-header svelte-1uha8ag"><div class="svelte-1uha8ag"><p class="eyebrow svelte-1uha8ag">Avaliações ENEM</p> <h3 class="svelte-1uha8ag">Histórico de desempenho 1998-2025</h3> <p class="muted svelte-1uha8ag">Acompanhe a evolução da rede nos simulados oficiais e resultados do ENEM.</p></div> <span class="pill outline svelte-1uha8ag">Próx. atualização: dez/2025</span></header> <div class="imac-cards svelte-1uha8ag"><div class="imac-card svelte-1uha8ag"><p class="muted svelte-1uha8ag">2024</p> <h4 class="svelte-1uha8ag">Melhor média histórica</h4> <strong class="svelte-1uha8ag">712 pts</strong> <small class="muted svelte-1uha8ag">Rede municipal de Belo Horizonte</small></div> <div class="imac-card svelte-1uha8ag"><p class="muted svelte-1uha8ag">2023</p> <h4 class="svelte-1uha8ag">Maior salto em simulados</h4> <strong class="svelte-1uha8ag">+18 pts</strong> <small class="muted svelte-1uha8ag">Telemetria ENEM</small></div> <div class="imac-card svelte-1uha8ag"><p class="muted svelte-1uha8ag">2015</p> <h4 class="svelte-1uha8ag">Programa de tutoria</h4> <strong class="svelte-1uha8ag">+12 pts</strong> <small class="muted svelte-1uha8ag">Mentorias para 3º ano</small></div></div> <div class="imac-table svelte-1uha8ag"><header class="svelte-1uha8ag"><span class="svelte-1uha8ag">Ano</span> <span class="svelte-1uha8ag">Simulados (média)</span> <span class="svelte-1uha8ag">ENEM oficial (média)</span> <span class="svelte-1uha8ag">Diferença</span></header> <div class="imac-rows svelte-1uha8ag"><div class="imac-row svelte-1uha8ag"><span class="svelte-1uha8ag">2024</span><span class="svelte-1uha8ag">712 pts</span><span class="svelte-1uha8ag">655 pts</span><span class="pos svelte-1uha8ag">+57 pts</span></div> <div class="imac-row svelte-1uha8ag"><span class="svelte-1uha8ag">2023</span><span class="svelte-1uha8ag">698 pts</span><span class="svelte-1uha8ag">662 pts</span><span class="pos svelte-1uha8ag">+36 pts</span></div> <div class="imac-row svelte-1uha8ag"><span class="svelte-1uha8ag">2022</span><span class="svelte-1uha8ag">683 pts</span><span class="svelte-1uha8ag">662 pts</span><span class="pos svelte-1uha8ag">+21 pts</span></div> <div class="imac-row svelte-1uha8ag"><span class="svelte-1uha8ag">2021</span><span class="svelte-1uha8ag">671 pts</span><span class="svelte-1uha8ag">659 pts</span><span class="pos svelte-1uha8ag">+12 pts</span></div> <div class="imac-row svelte-1uha8ag"><span class="svelte-1uha8ag">2020</span><span class="svelte-1uha8ag">660 pts</span><span class="svelte-1uha8ag">662 pts</span><span class="neg svelte-1uha8ag">-2 pts</span></div></div></div></div> <div class="imac-stand svelte-1uha8ag"></div></div></div></div></div></section> <section class="section svelte-1uha8ag"><div class="container card svelte-1uha8ag" style="text-align:center;"><p class="eyebrow svelte-1uha8ag">Next Step</p> <h2 class="section-title svelte-1uha8ag">Destrave a versão cloud da sua operação.</h2> <p class="section-subtitle svelte-1uha8ag">Faça um discovery com nossos product engineers e receba um blueprint com integrações, KPIs e roadmap em até 7 dias.</p> <a class="btn btn-primary svelte-1uha8ag" href="/contato">Quero meu blueprint</a></div></section>`);
  });
}
export {
  _page as default
};
