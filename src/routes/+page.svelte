<script lang="ts">
  import Hero from '$components/Hero.svelte';
  import CardServico from '$components/CardServico.svelte';
  import Depoimento from '$components/Depoimento.svelte';
  import CaseCard from '$components/CaseCard.svelte';

  // JSON-LD Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Fartech Soluções Industriais",
    "url": "https://fartech.com.br",
    "logo": "https://fartech.com.br/images/logo.png",
    "description": "Plataforma SaaS que conecta IoT, automação, manutenção e dados corporativos para operações críticas sempre online.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Industrial, 1000",
      "addressLocality": "São Paulo",
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-11-99999-0000",
      "contactType": "Customer Service",
      "availableLanguage": "Portuguese"
    },
    "sameAs": [
      "https://www.linkedin.com/company/fartech",
      "https://twitter.com/fartech"
    ]
  };

  const diferenciais = [
    {
      title: 'Squads de produto dedicados',
      description: 'Engenharia, dados e CX embarcados em cada rollout, com discovery contínuo e OKRs compartilhados.',
      href: '/quem-somos'
    },
    {
      title: 'Observabilidade em tempo real',
      description: 'Telemetry, alertas inteligentes e dashboards prontos para diretoria técnica e C-level.',
      href: '/contato'
    },
    {
      title: 'APIs e integrações abertas',
      description: 'SDKs, webhooks e conectores para ERPs, SCADA, IoT e BI com autenticação enterprise.',
      href: '/cases'
    },
    {
      title: 'Resultados mensuráveis',
      description: 'KPIs impulsionados por IA, contratos baseados em SLA e playbooks de crescimento contínuo.',
      href: '/cases'
    }
  ];

  const services = [
    {
      title: 'Lubrificação inteligente',
      description: 'Módulo SaaS que orquestra sensores IoT, supply chain e workflows automáticos.',
      href: '/servicos/lubrificacao'
    },
    {
      title: 'Análises de óleo com IA',
      description: 'Pipelines laboratoriais integrados à plataforma com insights automáticos e recomendação de ação.',
      href: '/servicos/analise-oleos'
    },
    {
      title: 'Automação & dados',
      description: 'Digital twins, SCADA conectado e analytics avançado em uma única stack.',
      href: '/servicos/automacao'
    },
    {
      title: 'Manutenção preventiva digital',
      description: 'Motor de machine learning que prioriza ativos críticos e dispara ordens no CMMS.',
      href: '/servicos/manutencao-preventiva'
    },
    {
      title: 'Response corretivo 24/7',
      description: 'Centro de comando com playbooks e bots que engajam squads e fornecedores em minutos.',
      href: '/servicos/manutencao-corretiva'
    },
    {
      title: 'Inspeções data-driven',
      description: 'Checklists digitais, visão mobile-first e relatórios com score de risco automáticos.',
      href: '/servicos/inspecoes-tecnicas'
    }
  ];

  const cases = [
    {
      title: 'Rolamentos monitorados com IA em siderurgia',
      description: 'Implementamos sensores + gêmeo digital e reduzimos 62% das ocorrências críticas.',
      metric: 'Alertas -62%'
    },
    {
      title: 'Linha automotiva com precisão de 98%',
      description: 'Plataforma Fartech sincronizou MES e PLC com dados em tempo real para o time de produto.',
      metric: 'Precisão +98%'
    },
    {
      title: 'Operação química com 37% menos hotspots',
      description: 'Algoritmos térmicos e automações de manutenção cortaram desperdícios e emissões.',
      metric: 'Hotspots -37%'
    }
  ];

  const depoimentos = [
    {
      quote: 'A Fartech age como nosso time de plataforma: entregou APIs, dashboards e governança em poucas sprints.',
      author: 'Marina Alves',
      role: 'VP Operações • Grupo Orion'
    },
    {
      quote: 'Criamos um centro de comando digital. Hoje tomamos decisões com dados em minutos, não dias.',
      author: 'Carlos Moura',
      role: 'Head de Reliability • Metalúrgica Vitta'
    },
    {
      quote: 'Eles falam produto, engenharia e chão de fábrica ao mesmo tempo. Resultado: uptime recorde.',
      author: 'Patrícia Vilela',
      role: 'COO • Indústria Térmica Sul'
    }
  ];

  const pagamentos = [
    { valor: 'R$ 1.284,90', cliente: 'Rocket Rides', mascara: '•••• •••• •••• 4487', validade: '12/28' },
    { valor: 'R$ 2.394,10', cliente: 'Vitta Auto', mascara: '•••• •••• •••• 5521', validade: '09/27' },
    { valor: 'R$ 892,40', cliente: 'Orion Labs', mascara: '•••• •••• •••• 1123', validade: '03/29' },
    { valor: 'R$ 742,00', cliente: 'Estaleiro Sul', mascara: '•••• •••• •••• 9001', validade: '07/26' },
    { valor: 'R$ 1.990,00', cliente: 'Grupo Aurora', mascara: '•••• •••• •••• 3311', validade: '11/28' }
  ];

  type Status = 'pago' | 'analise' | 'falha';
  type Transacao = { id: number; valor: string; descricao: string; status: Status };

  let transacoes: Transacao[] = [
    { id: 1, valor: 'R$ 1.284,90', descricao: 'Pix • Rocket Rides', status: 'pago' },
    { id: 2, valor: 'R$ 892,40', descricao: 'Cartão • Orion Labs', status: 'analise' },
    { id: 3, valor: 'R$ 2.394,10', descricao: 'Pix • Vitta Auto', status: 'pago' },
    { id: 4, valor: 'R$ 742,00', descricao: 'Cartão • Estaleiro Sul', status: 'falha' }
  ];

  const novasVendas: Transacao[] = [
    { id: 101, valor: 'R$ 1.120,50', descricao: 'Pix • Nova Rota', status: 'pago' },
    { id: 102, valor: 'R$ 2.018,30', descricao: 'Cartão • Cygnus', status: 'analise' },
    { id: 103, valor: 'R$ 1.678,90', descricao: 'Pix • Atlas Cargo', status: 'pago' }
  ];

  let idxNova = 0;

  const badgeClass = (status: Status) => {
    if (status === 'pago') return 'success';
    if (status === 'analise') return 'warning';
    return 'danger';
  };

  let idxPagamento = 0;

  import { onMount, onDestroy } from 'svelte';

  let pagamentoAtual = pagamentos[idxPagamento];

  let intervalId: ReturnType<typeof setInterval> | undefined;
  let transInterval: ReturnType<typeof setInterval> | undefined;

  onMount(() => {
    intervalId = setInterval(() => {
      idxPagamento = (idxPagamento + 1) % pagamentos.length;
      pagamentoAtual = pagamentos[idxPagamento];
    }, 5000);

    transInterval = setInterval(() => {
      const nova = novasVendas[idxNova % novasVendas.length];
      idxNova = (idxNova + 1) % novasVendas.length;
      transacoes = [nova, ...transacoes].slice(0, 4);
    }, 3500);
  });

  onDestroy(() => {
    if (intervalId) clearInterval(intervalId);
    if (transInterval) clearInterval(transInterval);
  });
</script>

<svelte:head>
  <script type="application/ld+json">
    {JSON.stringify(structuredData)}
  </script>
</svelte:head>

<Hero
  eyebrow="Fartech Platform OS"
  title="Infraestrutura digital que mantém operações críticas sempre online."
  subtitle="Uma plataforma SaaS que conecta IoT, automação, manutenção e dados corporativos para times que precisam decidir rápido."
  primaryHref="/contato"
  primaryLabel="Solicitar Orçamento"
  secondaryHref="/servicos"
  secondaryLabel="Conhecer serviços"
  showEnemUltra={false}
  meta={[
    { label: 'Empresas conectadas', value: '350+' },
    { label: 'Go-live médio', value: '14 dias' },
    { label: 'Disponibilidade', value: '99.95%' }
  ]}
>
  <div slot="visual">
    <!-- Phones movidos para seção de Dashboards -->
  </div>
</Hero>

<section class="section">
  <div class="container">
    <p class="eyebrow">Por que Fartech</p>
    <h2 class="section-title">Produto, dados e confiabilidade em uma única stack.</h2>
    <p class="section-subtitle">Desenhamos jornadas digitais de alto impacto com times ágeis, observabilidade total e entregas mensuráveis.</p>
    <div class="diferenciais-grid">
      {#each diferenciais as item}
        <CardServico {...item} />
      {/each}
    </div>
  </div>
</section>

<section class="section" id="servicos">
  <div class="container">
    <p class="eyebrow">Serviços</p>
    <div class="section-title">Portfólio modular pronto para plug-and-play.</div>
    <div class="services-grid">
      {#each services as service}
        <CardServico {...service} />
      {/each}
    </div>
    <div style="margin-top:40px">
      <a class="btn btn-secondary" href="/servicos">Ver todos os serviços</a>
    </div>
  </div>
</section>

<section class="section" id="cases">
  <div class="container">
    <p class="eyebrow">Cases</p>
    <h2 class="section-title">Resultados escaláveis monitorados em tempo real.</h2>
    <div class="cases-grid">
      {#each cases as caseItem}
        <CaseCard {...caseItem} />
      {/each}
    </div>
  </div>
</section>

<section class="section" id="depoimentos">
  <div class="container">
    <p class="eyebrow">Depoimentos</p>
    <h2 class="section-title">Clientes que colocaram o core industrial na nuvem.</h2>
    <div class="depoimentos-grid">
      {#each depoimentos as depo}
        <Depoimento {...depo} />
      {/each}
    </div>
  </div>
</section>

<section class="section" id="dashboards">
  <div class="container">
    <p class="eyebrow">Dashboards & Integrações</p>
    <h2 class="section-title">Visualize dados em tempo real com painéis intuitivos.</h2>
    
    <div class="hero-visual-stack" style="margin-bottom: 60px;">
      <div class="phone phone-light">
        <div class="phone-notch"></div>
        <div class="phone-body">
          <header class="phone-top">
            <span class="pill ghost">Rocket Rides</span>
            <span class="pill muted">Pesquisar</span>
          </header>
          <div class="phone-stats">
            <div class="stat-card">
              <p class="muted">Volume liquidado hoje</p>
              <strong>R$ 3.528.198,72</strong>
              <div class="sparkline"></div>
            </div>
            <div class="stat-card">
              <p class="muted">Ticket médio</p>
              <strong>R$ 392,74</strong>
              <div class="pill success">+12% vs. ontem</div>
            </div>
            <div class="stat-card compact">
              <p class="muted">Aprovação</p>
              <strong>98,4%</strong>
              <div class="pill neutral">Em tempo real</div>
            </div>
          </div>
          <div class="orders-card">
            <div class="orders-header">
              <p class="muted">Transações recentes</p>
              <span class="pill subtle">Atualizado em tempo real</span>
            </div>
            <div class="orders-list">
              {#each transacoes as trans (trans.id)}
                <div class="order animate">
                  <div>
                    <strong>{trans.valor}</strong>
                    <p class="muted">{trans.descricao}</p>
                  </div>
                  <span class={`pill ${badgeClass(trans.status)}`}>
                    {trans.status === 'pago' ? 'Pago' : trans.status === 'analise' ? 'Análise' : 'Falha'}
                  </span>
                </div>
              {/each}
            </div>
          </div>
        </div>
      </div>

      <div class="phone phone-dark">
        <div class="phone-notch dark"></div>
        <div class="phone-body">
          <header class="education-head">
            <p class="eyebrow">SaaS Educacional Municipal</p>
            <h3>Plataforma oficial da Secretaria Municipal de Educação.</h3>
            <p class="muted">Acompanhe matrículas, transporte e operações críticas em tempo real.</p>
            <div class="edu-actions">
              <span class="pill primary">Acessar Central Operacional</span>
              <span class="pill outline">Secretaria Parceira</span>
            </div>
            <small class="muted">Próxima atualização 15/11</small>
          </header>
          <div class="edu-stats">
            <div><strong>128</strong><span>Escolas conectadas</span></div>
            <div><strong>52.430</strong><span>Estudantes</span></div>
            <div><strong>2.348</strong><span>Turmas monitoradas</span></div>
          </div>
          <div class="edu-grid">
            <div class="edu-card">Evasão<span>Fluxo de gravação</span></div>
            <div class="edu-card">Painel da Secretaria<span>Indicadores em tempo real</span></div>
            <div class="edu-card">Matrícula Online<span>Inscrição municipal</span></div>
            <div class="edu-card">Gestão Escolar<span>Visão por unidade</span></div>
          </div>
        </div>
      </div>

      <div class="phone phone-pay hero-pay">
        <div class="phone-notch dark"></div>
        <div class="phone-body">
          <header class="device-header">
            <div>
              <span class="device-label">Integração Pix Ready</span>
              <p class="device-sub">Checkout Fartech Pay</p>
            </div>
            <span class="status-pill">Online</span>
          </header>
          <div class="device-card">
            <div>
              <span class="muted">Valor a receber</span>
              <strong>{pagamentoAtual.valor}</strong>
            </div>
            <div>
              <span class="muted">Cliente</span>
              <strong>{pagamentoAtual.cliente}</strong>
            </div>
          </div>
          <div class="device-form">
            <div class="fake-field" aria-label="Cartão ilustrativo">
              <span>Cartão</span>
              <div class="input fake-input">
                <span>{pagamentoAtual.mascara}</span>
                <span class="muted">{pagamentoAtual.validade}</span>
              </div>
            </div>
            <div class="fake-field" aria-label="Nome ilustrativo">
              <span>Nome</span>
              <div class="input fake-input">
                <span>{pagamentoAtual.cliente}</span>
              </div>
            </div>
            <button class="btn btn-primary" style="width:100%">Confirmar pagamento</button>
          </div>
        </div>
      </div>
    </div>

    <div class="hero-visual-stack" style="margin-bottom: 60px;">
      <div class="phone phone-dark">
        <div class="phone-notch dark"></div>
        <div class="phone-body">
          <header class="imac-header" style="padding: 20px 18px 16px 18px;">
            <div>
              <p class="eyebrow">Avaliações ENEM</p>
              <h3 style="font-size: 1.4rem; line-height: 1.3; margin: 8px 0 12px 0;">Histórico de desempenho 1998-2025</h3>
              <p class="muted" style="font-size: 0.88rem;">Acompanhe a evolução da rede nos simulados oficiais e resultados do ENEM.</p>
            </div>
            <span class="pill outline" style="margin-top: 12px;">Próx. atualização: dez/2025</span>
          </header>
          <div class="imac-cards" style="padding: 0 18px; gap: 10px; grid-template-columns: 1fr;">
            <div class="imac-card" style="padding: 14px;">
              <p class="muted" style="font-size: 0.78rem;">2024</p>
              <h4 style="font-size: 0.95rem; margin: 4px 0;">Melhor média histórica</h4>
              <strong style="font-size: 1.3rem; color: #10b981;">712 pts</strong>
              <small class="muted" style="font-size: 0.76rem; display: block; margin-top: 4px;">Rede municipal de Belo Horizonte</small>
            </div>
            <div class="imac-card" style="padding: 14px;">
              <p class="muted" style="font-size: 0.78rem;">2023</p>
              <h4 style="font-size: 0.95rem; margin: 4px 0;">Maior salto em simulados</h4>
              <strong style="font-size: 1.3rem; color: #10b981;">+18 pts</strong>
              <small class="muted" style="font-size: 0.76rem; display: block; margin-top: 4px;">Telemetria ENEM</small>
            </div>
            <div class="imac-card" style="padding: 14px;">
              <p class="muted" style="font-size: 0.78rem;">2015</p>
              <h4 style="font-size: 0.95rem; margin: 4px 0;">Programa de tutoria</h4>
              <strong style="font-size: 1.3rem; color: #10b981;">+12 pts</strong>
              <small class="muted" style="font-size: 0.76rem; display: block; margin-top: 4px;">Mentorias para 3º ano</small>
            </div>
          </div>
          <div class="imac-table" style="margin: 16px 18px 0 18px; font-size: 0.82rem;">
            <header style="font-size: 0.76rem; padding: 10px 12px;">
              <span>Ano</span>
              <span>Simulados</span>
              <span>ENEM</span>
              <span>Dif.</span>
            </header>
            <div class="imac-rows">
              <div class="imac-row" style="padding: 10px 12px; font-size: 0.82rem;">
                <span>2024</span><span>712</span><span>655</span><span class="pos">+57</span>
              </div>
              <div class="imac-row" style="padding: 10px 12px; font-size: 0.82rem;">
                <span>2023</span><span>698</span><span>662</span><span class="pos">+36</span>
              </div>
              <div class="imac-row" style="padding: 10px 12px; font-size: 0.82rem;">
                <span>2022</span><span>683</span><span>662</span><span class="pos">+21</span>
              </div>
              <div class="imac-row" style="padding: 10px 12px; font-size: 0.82rem;">
                <span>2021</span><span>671</span><span>659</span><span class="pos">+12</span>
              </div>
              <div class="imac-row" style="padding: 10px 12px; font-size: 0.82rem;">
                <span>2020</span><span>660</span><span>662</span><span class="neg">-2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="dashboards-showcase">
      <div class="dashboard-right">
        <div class="imac-frame">
          <div class="imac-screen">
            <header class="imac-header">
              <div>
                <p class="eyebrow">Avaliações ENEM</p>
                <h3>Histórico de desempenho 1998-2025</h3>
                <p class="muted">Acompanhe a evolução da rede nos simulados oficiais e resultados do ENEM.</p>
              </div>
              <span class="pill outline">Próx. atualização: dez/2025</span>
            </header>
            <div class="imac-cards">
              <div class="imac-card">
                <p class="muted">2024</p>
                <h4>Melhor média histórica</h4>
                <strong>712 pts</strong>
                <small class="muted">Rede municipal de Belo Horizonte</small>
              </div>
              <div class="imac-card">
                <p class="muted">2023</p>
                <h4>Maior salto em simulados</h4>
                <strong>+18 pts</strong>
                <small class="muted">Telemetria ENEM</small>
              </div>
              <div class="imac-card">
                <p class="muted">2015</p>
                <h4>Programa de tutoria</h4>
                <strong>+12 pts</strong>
                <small class="muted">Mentorias para 3º ano</small>
              </div>
            </div>
            <div class="imac-table">
              <header>
                <span>Ano</span>
                <span>Simulados (média)</span>
                <span>ENEM oficial (média)</span>
                <span>Diferença</span>
              </header>
              <div class="imac-rows">
                <div class="imac-row">
                  <span>2024</span><span>712 pts</span><span>655 pts</span><span class="pos">+57 pts</span>
                </div>
                <div class="imac-row">
                  <span>2023</span><span>698 pts</span><span>662 pts</span><span class="pos">+36 pts</span>
                </div>
                <div class="imac-row">
                  <span>2022</span><span>683 pts</span><span>662 pts</span><span class="pos">+21 pts</span>
                </div>
                <div class="imac-row">
                  <span>2021</span><span>671 pts</span><span>659 pts</span><span class="pos">+12 pts</span>
                </div>
                <div class="imac-row">
                  <span>2020</span><span>660 pts</span><span>662 pts</span><span class="neg">-2 pts</span>
                </div>
              </div>
            </div>
          </div>
          <div class="imac-stand"></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container card" style="text-align:center;">
    <p class="eyebrow">Next Step</p>
    <h2 class="section-title">Destrave a versão cloud da sua operação.</h2>
    <p class="section-subtitle">
      Faça um discovery com nossos product engineers e receba um blueprint com integrações, KPIs e roadmap em até 7 dias.
    </p>
    <a class="btn btn-primary" href="/contato">Quero meu blueprint</a>
  </div>
</section>

<style>
  
  
  .hero-visual-stack {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: clamp(22px, 4vw, 48px);
    width: 100%;
    max-width: 1320px;
    margin: 0 auto;
    flex-wrap: nowrap;
    transform: translateX(0);
    pointer-events: none;
    z-index: 1;
  }

  .hero-visual-stack > .phone {
    flex: 0 0 auto;
    pointer-events: auto;
    z-index: 0;
  }

  .hero-visual-stack .hero-pay {
    position: relative;
    top: auto;
  }

  @media (max-width: 1024px) {
    .hero-visual-stack {
      flex-wrap: wrap;
      justify-content: center;
      max-width: 760px;
      margin: 0 auto;
      transform: none;
    }

    .phone {
      max-width: 100%;
      width: 100%;
      min-height: auto;
      aspect-ratio: auto;
    }
  }

  /* Pills gerais */
  .pill {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-size: 0.78rem;
    padding: 6px 12px;
    border-radius: var(--radius-pill);
    border: 1px solid transparent;
    width: fit-content;
    font-weight: 500;
  }

  .pill.success {
    background: var(--color-green-light);
    color: var(--color-green);
    border-color: var(--color-green);
  }

  .pill.warning {
    background: rgba(255, 184, 77, 0.16);
    color: #c9640c;
    border-color: rgba(255, 184, 77, 0.3);
  }

  .pill.danger {
    background: rgba(236, 72, 87, 0.14);
    color: #c0392b;
    border-color: rgba(236, 72, 87, 0.2);
  }

  .pill.neutral {
    background: var(--color-blue-light);
    color: var(--color-blue);
    border-color: var(--color-blue);
  }

  .pill.subtle {
    background: rgba(0, 0, 0, 0.04);
    color: var(--color-text-secondary);
    border-color: var(--color-line);
  }

  .pill.ghost {
    background: rgba(0, 102, 255, 0.06);
    color: var(--color-blue-dark);
    border: 1px solid rgba(0, 102, 255, 0.18);
  }

  .pill.muted {
    background: var(--color-line-light);
    color: var(--color-text-secondary);
    border: 1px solid var(--color-line);
  }

  .pill.primary {
    background: linear-gradient(120deg, #2563eb, #7c3aed);
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 12px 30px rgba(37, 99, 235, 0.2);
  }

  .pill.outline {
    background: rgba(255, 255, 255, 0.06);
    color: #e5e7eb;
    border: 1px solid rgba(255, 255, 255, 0.15);
  }

  /* Phones base */
  .phone {
    position: relative;
    width: 390px;
    max-width: 390px;
    min-height: 844px;
    aspect-ratio: 390 / 844;
    border-radius: 28px;
    padding: 16px;
    background: #0b1021;
    box-shadow: 0 30px 80px rgba(5, 10, 30, 0.3);
    border: 1px solid rgba(0, 0, 0, 0.08);
    z-index: 0;
  }

  .phone-light {
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.14);
    backdrop-filter: blur(6px);
  }

  .phone-dark {
    background: linear-gradient(180deg, #0e1228 0%, #0b0f23 100%);
    border-color: rgba(255, 255, 255, 0.06);
  }

  .phone-pay {
    background: linear-gradient(180deg, #0c1228 0%, #101a38 100%);
    border-color: rgba(255, 255, 255, 0.12);
    box-shadow: 0 28px 70px rgba(5, 10, 30, 0.35), 0 12px 28px rgba(0, 0, 0, 0.12);
    position: sticky;
    top: 120px;
  }

  .phone-notch {
    position: absolute;
    top: 12px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 8px;
    border-radius: 999px;
    background: rgba(0, 0, 0, 0.25);
  }

  .phone-notch.dark {
    background: rgba(255, 255, 255, 0.1);
  }

  .phone-body {
    background: rgba(255, 255, 255, 0.35);
    border-radius: 22px;
    padding: 18px;
    display: grid;
    gap: 12px;
    overflow: hidden;
    max-height: 100%;
  }

  .phone-light .phone-body {
    background: rgba(255, 255, 255, 0.28);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .phone-dark .phone-body {
    background: linear-gradient(180deg, #101632 0%, #0b1022 100%);
    color: #e5e7eb;
    border: 1px solid rgba(255, 255, 255, 0.08);
  }

  .phone-pay .phone-body {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: #e5e7eb;
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: space-between;
    align-items: stretch;
  }

  /* Checkout phone */
  .device-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 8px;
  }

  .device-label {
    font-weight: 700;
    color: #e5e7eb;
    font-size: 1rem;
  }

  .device-sub {
    font-size: 0.85rem;
    color: rgba(229, 231, 235, 0.75);
    margin: 2px 0 0 0;
  }

  .status-pill {
    font-size: 0.78rem;
    padding: 6px 14px;
    border-radius: var(--radius-pill);
    background: rgba(16, 185, 129, 0.16);
    color: #34d399;
    font-weight: 700;
    border: 1px solid rgba(16, 185, 129, 0.3);
  }

  .device-card {
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.06);
    padding: 14px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 8px;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .device-card strong {
    font-size: 1rem;
    color: #fff;
    display: block;
    font-weight: 800;
  }

  .device-card span {
    font-size: 0.86rem;
    color: rgba(229, 231, 235, 0.8);
  }

  .device-form {
    display: grid;
    gap: 14px;
  }

  .fake-field {
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 0.9rem;
    color: rgba(229, 231, 235, 0.9);
  }

  .input {
    border-radius: 16px;
    padding: 12px 14px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.06);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
  }

  .fake-input {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;
    color: #fff;
  }

  .split {
    max-width: 120px;
  }

  .device-btn {
    width: 100%;
    border-radius: 16px;
    justify-content: center;
    font-size: 1rem;
    background: linear-gradient(120deg, #0f8bff, #7c4dff);
    border: none;
    box-shadow: 0 16px 45px rgba(0, 102, 255, 0.35);
    padding: 14px;
    margin-top: auto;
  }

  .device-icons {
    display: flex;
    justify-content: space-between;
    font-size: 0.78rem;
    color: rgba(229, 231, 235, 0.7);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .checkout-logo {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    padding: 8px 0 0;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }

  .checkout-logo img {
    max-width: 120px;
    height: auto;
    filter: drop-shadow(0 8px 24px rgba(0, 0, 0, 0.3));
  }

  .phone-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }

  .phone-stats {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }

  .phone-stats .stat-card:last-child {
    grid-column: span 2;
  }

  .stat-card {
    background: var(--color-surface);
    border-radius: 12px;
    padding: 12px;
    box-shadow: var(--shadow-sm);
    border: 1px solid var(--color-line);
  }

  .stat-card strong {
    display: block;
    color: var(--color-primary);
    font-size: 0.95rem;
    margin-bottom: 4px;
    font-weight: 700;
  }

  .stat-card p {
    color: var(--color-text-secondary);
    font-size: 0.75rem;
    margin: 0;
  }

  .sparkline {
    height: 32px;
    border-radius: 10px;
    background: linear-gradient(180deg, rgba(0, 102, 255, 0.08), rgba(124, 58, 237, 0.05));
    position: relative;
    overflow: hidden;
    margin-top: 6px;
  }

  .sparkline::after {
    content: '';
    position: absolute;
    inset: 0;
    background: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 80" preserveAspectRatio="none"%3E%3Cpolyline fill="none" stroke="%230066ff" stroke-width="6" stroke-linecap="round" points="0,60 40,50 80,60 120,35 160,45 200,30"/%3E%3C/svg%3E');
    background-size: cover;
    opacity: 0.85;
  }

  .orders-card {
    background: var(--color-surface);
    border-radius: 14px;
    border: 1px solid var(--color-line);
    box-shadow: var(--shadow-sm);
    padding: 12px;
    display: grid;
    gap: 10px;
  }

  .orders-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--color-line);
  }

  .orders-header p {
    color: var(--color-text-secondary);
    font-size: 0.8rem;
    margin: 0;
    font-weight: 500;
  }

  .orders-list {
    display: grid;
    gap: 8px;
  }

  .order {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-radius: 10px;
    background: var(--color-line-light);
    border: 1px solid var(--color-line);
    font-size: 0.8rem;
  }

  .order.animate {
    animation: fadeSlide 0.35s ease-out;
  }

  @keyframes fadeSlide {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .order strong {
    display: block;
    color: var(--color-primary);
    font-weight: 700;
    margin-bottom: 2px;
    font-size: 0.9rem;
  }

  .order .muted {
    color: var(--color-text-secondary);
    font-size: 0.75rem;
  }

  /* Phone educação */
  .education-head h3 {
    margin: 6px 0;
    color: #e5e7eb;
  }

  .education-head .muted {
    color: #b5bed1;
  }

  .edu-actions {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin: 8px 0;
  }

  .edu-stats {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 8px;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 14px;
    padding: 10px;
  }

  .edu-stats div {
    display: grid;
    gap: 4px;
  }

  .edu-stats strong {
    color: #fff;
  }

  .edu-stats span {
    color: #b5bed1;
    font-size: 0.8rem;
  }

  .edu-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }

  .edu-card {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 12px;
    padding: 10px;
    color: #e5e7eb;
    display: grid;
    gap: 4px;
  }

  .edu-card span {
    color: #9ca3af;
    font-size: 0.8rem;
  }

  /* Desktop dashboard (reconstruído) */
  .desktop-frame {
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 16px;
    background: linear-gradient(180deg, #11172f 0%, #0b1024 100%);
    border-radius: 18px;
    border: 1px solid rgba(255, 255, 255, 0.06);
    box-shadow: 0 30px 80px rgba(5, 10, 30, 0.32);
    padding: 16px;
    color: #e5e7eb;
  }

  .desktop-sidebar {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 14px;
    padding: 12px;
    display: grid;
    gap: 12px;
  }

  .logo-mark {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .logo-mark .star {
    font-size: 1.3rem;
  }

  .logo-mark strong {
    color: #60a5fa;
    display: block;
  }

  .logo-mark small {
    color: #9ca3af;
    font-size: 0.8rem;
  }

  .desktop-nav {
    display: grid;
    gap: 8px;
  }

  .nav-item {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 10px;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.06);
    color: #e5e7eb;
  }

  .nav-item small {
    color: #9ca3af;
  }

  .nav-item.active {
    background: rgba(59, 130, 246, 0.15);
    border-color: rgba(59, 130, 246, 0.25);
  }

  .desktop-main {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 14px;
    padding: 14px;
    display: grid;
    gap: 14px;
  }

  .desktop-topbar {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  }

  .status-group {
    display: flex;
    gap: 8px;
  }

  .desktop-hero {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 14px;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 12px;
  }

  .desktop-hero h3 {
    margin: 4px 0;
    color: #f8fafc;
  }

  .pill-group {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  .cta-group {
    display: grid;
    gap: 8px;
    align-content: start;
  }

  .desktop-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 12px;
  }

  .desktop-card {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 12px;
    padding: 12px;
    display: grid;
    gap: 6px;
    color: #e5e7eb;
  }

  .desktop-card h4 {
    margin: 0;
    color: #fff;
  }

  .progress {
    width: 100%;
    height: 6px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 999px;
    overflow: hidden;
  }

  .progress span {
    display: block;
    height: 100%;
    background: linear-gradient(90deg, #60a5fa, #7c3aed);
  }
  /* iMac dashboard */
  .imac-frame {
    position: relative;
    width: 520px;
    max-width: 100%;
    margin: 0 auto;
    background: #0c1024;
    border-radius: 16px 16px 8px 8px;
    box-shadow: 0 30px 80px rgba(5, 10, 30, 0.35);
    border: 1px solid rgba(255, 255, 255, 0.04);
    overflow: hidden;
    display: grid;
    gap: 0;
  }

  .imac-screen {
    background: radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.14), transparent 45%),
      radial-gradient(circle at 80% 10%, rgba(124, 58, 237, 0.16), transparent 45%),
      #0f1328;
    padding: 24px;
    display: grid;
    gap: 16px;
  }

  .imac-header {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    align-items: flex-start;
    color: #e5e7eb;
  }

  .imac-header h3 {
    margin: 6px 0;
    color: #f8fafc;
  }

  .imac-header .muted {
    color: #b5bed1;
  }

  .imac-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 12px;
  }

  .imac-card {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 12px;
    color: #e5e7eb;
    display: grid;
    gap: 6px;
  }

  .imac-card h4 {
    margin: 0;
    color: #fff;
    font-size: 1rem;
  }

  .imac-card strong {
    font-size: 1.1rem;
    color: #60a5fa;
  }

  .imac-card .muted {
    color: #9ca3af;
  }

  .imac-table {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 12px;
    padding: 12px;
    display: grid;
    gap: 10px;
    color: #e5e7eb;
  }

  .imac-table header,
  .imac-row {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 8px;
    font-size: 0.85rem;
  }

  .imac-row {
    color: #d1d5db;
  }

  .imac-row .pos {
    color: #34d399;
  }

  .imac-row .neg {
    color: #f87171;
  }

  .imac-rows {
    display: grid;
    gap: 6px;
  }

  .imac-stand {
    height: 14px;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
    border-radius: 0 0 8px 8px;
  }

  @media (max-width: 768px) {
    .imac-frame {
      width: 100%;
    }
  }

  :global(.hero) {
    isolation: isolate;
  }

  /* Marca d'água com z-index muito baixo para não cobrir texto */
  :global(.hero)::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 50%;
    background: url('/images/fartecvetorizada.png') 82% center no-repeat;
    background-size: 110%;
    opacity: 0.02;
    pointer-events: none;
    mix-blend-mode: multiply;
    z-index: -300;
    animation: watermarkFloat 14s ease-in-out infinite alternate;
  }

  @keyframes watermarkFloat {
    0% {
      transform: translate3d(12px, -12px, 0) scale(1.04) rotate(-1.5deg);
      opacity: 0.02;
    }
    50% {
      transform: translate3d(-8px, 10px, 0) scale(1.08) rotate(1.2deg);
      opacity: 0.03;
    }
    100% {
      transform: translate3d(10px, 14px, 0) scale(1.1) rotate(2deg);
      opacity: 0.02;
    }
  }

  @media (max-width: 640px) {
    .hero-visual-stack {
      display: grid;
      grid-template-columns: 1fr;
      max-width: 380px;
    }

    .mini-app-card {
      max-width: 100%;
      transform: none;
    }

    :global(.hero)::before {
      left: 30%;
      background-size: 140%;
      opacity: 0.16;
    }
  }

  /* ==================== PAGE-WIDE STRIPE EFFECTS ==================== */

  :global(section) {
    position: relative;
    z-index: 1;
  }

  /* Apply fade-in to all sections */
  :global(section):nth-of-type(1) {
    animation: slideUp 0.8s ease-out 0.1s backwards;
  }

  :global(section):nth-of-type(2) {
    animation: slideUp 0.8s ease-out 0.2s backwards;
  }

  :global(section):nth-of-type(3) {
    animation: slideUp 0.8s ease-out 0.3s backwards;
  }

  :global(section):nth-of-type(4) {
    animation: slideUp 0.8s ease-out 0.4s backwards;
  }

  :global(section):nth-of-type(5) {
    animation: slideUp 0.8s ease-out 0.5s backwards;
  }

  /* Enhanced eyebrow with gradient */
  :global(.eyebrow) {
    position: relative;
    color: var(--color-blue);
    letter-spacing: 0.2em;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    animation: slideUp 0.6s ease-out forwards;
  }

  :global(.eyebrow)::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 60px;
    height: 3px;
    background: var(--gradient-primary);
    border-radius: 999px;
    opacity: 0;
    animation: slideUp 0.6s ease-out 0.1s forwards;
  }

  /* Section titles with enhanced gradient animation */
  :global(.section-title) {
    animation: slideUp 0.8s ease-out forwards;
  }

  /* Section subtitles with fade-in */
  :global(.section-subtitle) {
    animation: slideUp 0.8s ease-out 0.1s backwards;
    color: var(--color-text-secondary);
  }

  /* Card components with Stripe effects */
  :global(.card) {
    position: relative;
    animation: slideUp 0.6s ease-out forwards;
  }

  /* Diagonal gradient overlay on hover for all cards */
  :global(.card)::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: var(--radius-card);
    background: linear-gradient(135deg, transparent, rgba(0, 102, 255, 0.05));
    pointer-events: none;
    opacity: 0;
    transition: opacity 300ms ease-out;
  }

  :global(.card:hover)::before {
    opacity: 1;
  }

  /* Grid items with stagger effect */
  .hero-visual-stack > div:nth-child(1) {
    animation: slideUp 0.8s ease-out 0.2s backwards;
  }

  .hero-visual-stack > div:nth-child(2) {
    animation: slideUp 0.8s ease-out 0.4s backwards;
  }

  /* Dashboard card special effects */
  .dashboard-card {
    animation: slideUp 0.8s ease-out 0.2s backwards;
    position: relative;
    overflow: hidden;
  }

  .dashboard-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), transparent);
    pointer-events: none;
    border-radius: var(--radius-card);
  }

  /* Device card animation */
  .hero-device {
    animation: slideUp 0.8s ease-out 0.4s backwards;
    position: relative;
  }

  /* Stat cards with delayed animation */
  .stat-card {
    animation: slideUp 0.6s ease-out forwards;
  }

  .stat-card:nth-child(1) {
    animation-delay: 0.3s;
  }

  .stat-card:nth-child(2) {
    animation-delay: 0.4s;
  }

  .stat-card:nth-child(3) {
    animation-delay: 0.5s;
  }

  /* Orders card with animation */
  .orders-card {
    animation: slideUp 0.6s ease-out 0.5s backwards;
  }

  /* Button animations */
  :global(.btn) {
    position: relative;
    overflow: hidden;
    transition: var(--transition-smooth);
  }

  :global(.btn)::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.3), transparent 80%);
    opacity: 0;
    transition: opacity 300ms ease-out;
  }

  :global(.btn:hover)::before {
    opacity: 1;
  }

  /* Primary button enhanced */
  :global(.btn-primary) {
    position: relative;
    overflow: hidden;
  }

  :global(.btn-primary)::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    opacity: 0;
    animation: shimmerSlide 2s infinite;
  }

  :global(.btn-primary:hover)::after {
    animation: shimmerSlide 1.5s infinite;
  }

  /* Secondary button with border animation */
  :global(.btn-secondary) {
    position: relative;
  }

  :global(.btn-secondary)::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 8px;
    background: transparent;
    border: 2px solid var(--color-blue);
    opacity: 0;
    transition: opacity 300ms ease-out;
    pointer-events: none;
  }

  :global(.btn-secondary:hover)::before {
    opacity: 0;
  }

  /* Link animations */
  :global(a:not(.btn)) {
    position: relative;
  }

  :global(a:not(.btn))::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--gradient-primary);
    transition: width 400ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  :global(a:not(.btn):hover) {
    color: var(--color-blue);
  }

  :global(a:not(.btn):hover)::after {
    width: 100%;
  }

  /* Hover effects for service grid */
  :global(.services-grid > *),
  :global(.cases-grid > *),
  :global(.diferenciais-grid > *),
  :global(.depoimentos-grid > *) {
    animation: slideUp 0.6s ease-out forwards;
    transition: var(--transition-smooth);
  }

  :global(.services-grid > *:nth-child(1)) {
    animation-delay: 0.1s;
  }

  :global(.services-grid > *:nth-child(2)) {
    animation-delay: 0.2s;
  }

  :global(.services-grid > *:nth-child(3)) {
    animation-delay: 0.3s;
  }

  :global(.services-grid > *:nth-child(4)) {
    animation-delay: 0.4s;
  }

  :global(.services-grid > *:nth-child(5)) {
    animation-delay: 0.5s;
  }

  :global(.services-grid > *:nth-child(6)) {
    animation-delay: 0.6s;
  }

  /* Cases grid animation */
  :global(.cases-grid > *:nth-child(1)) {
    animation-delay: 0.1s;
  }

  :global(.cases-grid > *:nth-child(2)) {
    animation-delay: 0.2s;
  }

  :global(.cases-grid > *:nth-child(3)) {
    animation-delay: 0.3s;
  }

  /* Depoimentos grid animation */
  :global(.depoimentos-grid > *:nth-child(1)) {
    animation-delay: 0.1s;
  }

  :global(.depoimentos-grid > *:nth-child(2)) {
    animation-delay: 0.2s;
  }

  :global(.depoimentos-grid > *:nth-child(3)) {
    animation-delay: 0.3s;
  }

  /* Diferenciais grid animation */
  :global(.diferenciais-grid > *:nth-child(1)) {
    animation-delay: 0.1s;
  }

  :global(.diferenciais-grid > *:nth-child(2)) {
    animation-delay: 0.2s;
  }

  :global(.diferenciais-grid > *:nth-child(3)) {
    animation-delay: 0.3s;
  }

  :global(.diferenciais-grid > *:nth-child(4)) {
    animation-delay: 0.4s;
  }

  /* Special CTA card enhancement */
  .section > .container > :global(.card) {
    background: linear-gradient(135deg, var(--color-surface), rgba(0, 102, 255, 0.02));
    border: 1px solid var(--color-line);
    backdrop-filter: blur(10px);
  }

  .section > .container > :global(.card):hover {
    background: linear-gradient(135deg, var(--color-surface), rgba(0, 102, 255, 0.05));
    border-color: var(--color-blue);
  }

  /* Dashboard showcase layout */
  .dashboards-showcase {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: clamp(32px, 6vw, 64px);
    align-items: center;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
  }

  .dashboard-left {
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
  }

  .dashboard-right {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 1024px) {
    .dashboards-showcase {
      grid-template-columns: 1fr;
      gap: 40px;
    }

    .dashboard-right {
      max-width: 350px;
      margin: 0 auto;
    }
  }

  @media (max-width: 768px) {
    :global(section) {
      animation: none !important;
    }

    :global(.eyebrow)::before {
      animation: none !important;
      opacity: 1;
    }

    .hero-visual-stack > div {
      animation: none !important;
      opacity: 1;
    }
  }

</style>
