<script lang="ts">
  import Hero from '$components/Hero.svelte';
  import CardServico from '$components/CardServico.svelte';
  import Depoimento from '$components/Depoimento.svelte';
  import CaseCard from '$components/CaseCard.svelte';

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
</script>

<Hero
  eyebrow="Fartech Platform OS"
  title="Infraestrutura digital que mantém operações críticas sempre online."
  subtitle="Uma plataforma SaaS que conecta IoT, automação, manutenção e dados corporativos para times que precisam decidir rápido."
  primaryHref="/contato"
  primaryLabel="Solicitar Orçamento"
  secondaryHref="/servicos"
  secondaryLabel="Conhecer serviços"
  meta={[
    { label: 'Empresas conectadas', value: '350+' },
    { label: 'Go-live médio', value: '14 dias' },
    { label: 'Disponibilidade', value: '99.95%' }
  ]}
>
  <div slot="visual" class="hero-visual-stack">
    <div class="dashboard-card">
      <header class="dashboard-header">
        <div class="logo-stack">
          <span class="logo-pill">ROCKET RIDES</span>
          <small>Dashboard de vendas</small>
        </div>
        <div class="search-pill">
          <span>Pesquisar</span>
        </div>
      </header>
      <div class="dashboard-body">
        <div class="stat-grid">
          <div class="stat-card">
            <p class="muted">Volume líquido hoje</p>
            <strong>R$ 3.528.198,72</strong>
            <div class="sparkline"></div>
          </div>
          <div class="stat-card compact">
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
            <span class="pill subtle">Atualizado há 2min</span>
          </div>
          <div class="orders-list">
            <div class="order">
              <div>
                <strong>R$ 1.284,90</strong>
                <p class="muted">Pix • Rocket Rides</p>
              </div>
              <span class="pill success">Pago</span>
            </div>
            <div class="order">
              <div>
                <strong>R$ 892,40</strong>
                <p class="muted">Cartão • Orion Labs</p>
              </div>
              <span class="pill warning">Análise</span>
            </div>
            <div class="order">
              <div>
                <strong>R$ 2.394,10</strong>
                <p class="muted">Pix • Vitta Auto</p>
              </div>
              <span class="pill success">Pago</span>
            </div>
            <div class="order">
              <div>
                <strong>R$ 742,00</strong>
                <p class="muted">Cartão • Estaleiro Sul</p>
              </div>
              <span class="pill danger">Falha</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hero-device">
      <div class="device-notch"></div>
    <div class="device-content">
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
          <strong>R$ 1.284,90</strong>
        </div>
        <div>
          <span class="muted">Cliente</span>
          <strong>Rocket Rides</strong>
        </div>
      </div>
      <div class="device-form">
        <div class="fake-field" aria-label="Cartão ilustrativo">
          <span>Cartão</span>
          <div class="input fake-input">
            <span>•••• •••• •••• 4487</span>
            <span class="muted">12/28</span>
          </div>
        </div>
        <div class="fake-field" aria-label="Nome ilustrativo">
          <span>Nome</span>
          <div class="input fake-input">Fernanda V.</div>
        </div>
        <div class="fake-field split" aria-label="CVV ilustrativo">
          <span>CVV</span>
          <div class="input fake-input">123</div>
        </div>
      </div>
      <button class="btn device-btn">Confirmar pagamento</button>
      <div class="device-icons">
        <span>Pix</span>
        <span>Visa</span>
        <span>Mastercard</span>
        <span>Apple Pay</span>
      </div>
    </div>
    </div>
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
    align-items: stretch;
    gap: clamp(18px, 3vw, 36px);
    justify-content: space-between;
    flex-wrap: nowrap;
  }

  @media (max-width: 1024px) {
    .hero-visual-stack {
      flex-wrap: wrap;
      justify-content: flex-start;
    }

    .dashboard-card,
    .hero-device {
      flex: 1 1 100%;
      max-width: 100%;
      min-height: auto;
      aspect-ratio: unset;
      transform: none;
    }
  }

  .dashboard-card {
    flex: 0 0 420px;
    max-width: 430px;
    min-height: 912px;
    aspect-ratio: 430 / 932;
    background: linear-gradient(140deg, rgba(255, 255, 255, 0.96), rgba(236, 244, 255, 0.94));
    border-radius: 28px;
    padding: 18px;
    box-shadow: 0 45px 120px rgba(4, 10, 36, 0.38);
    transform: translateY(12px) rotate(-2deg);
    border: 1px solid rgba(255, 255, 255, 0.55);
    backdrop-filter: blur(16px);
    position: relative;
    overflow: hidden;
    isolation: isolate;
  }

  .dashboard-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 20% 10%, rgba(15, 139, 255, 0.18), transparent 40%),
      radial-gradient(circle at 80% 0%, rgba(124, 77, 255, 0.1), transparent 46%);
    z-index: 0;
  }

  .dashboard-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 14px;
    position: relative;
    z-index: 1;
  }

  .logo-stack {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .logo-stack small {
    color: #7782a3;
    letter-spacing: 0.08em;
    font-weight: 600;
  }

  .logo-pill {
    font-size: 0.72rem;
    letter-spacing: 0.24em;
    color: #0b1021;
    padding: 6px 12px;
    border-radius: 999px;
    background: rgba(15, 139, 255, 0.08);
    border: 1px solid rgba(15, 139, 255, 0.18);
    box-shadow: 0 12px 24px rgba(10, 139, 255, 0.18);
  }

  .search-pill {
    background: rgba(12, 19, 43, 0.04);
    border-radius: 999px;
    padding: 6px 14px;
    font-size: 0.78rem;
    color: #5e667a;
    border: 1px solid rgba(12, 19, 43, 0.08);
  }

  .dashboard-body {
    display: grid;
    gap: 16px;
    position: relative;
    z-index: 1;
  }

  .stat-grid {
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .stat-card {
    background: linear-gradient(160deg, rgba(255, 255, 255, 0.95), rgba(241, 247, 255, 0.9));
    border-radius: 18px;
    padding: 14px 14px;
    box-shadow: 0 18px 40px rgba(12, 18, 45, 0.12);
    border: 1px solid rgba(12, 19, 43, 0.06);
  }

  .stat-card.compact {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .stat-card strong {
    display: block;
    color: #0a0f2c;
    font-size: 1.1rem;
    margin-bottom: 6px;
  }

  .sparkline {
    height: 46px;
    border-radius: 12px;
    background: linear-gradient(180deg, rgba(15, 139, 255, 0.12), rgba(124, 77, 255, 0.05));
    position: relative;
    overflow: hidden;
  }

  .sparkline::after {
    content: '';
    position: absolute;
    inset: 0;
    background: url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 80\" preserveAspectRatio=\"none\"%3E%3Cpolyline fill=\"none\" stroke=\"%230f8bff\" stroke-width=\"6\" stroke-linecap=\"round\" points=\"0,60 40,50 80,60 120,35 160,45 200,30\"/%3E%3C/svg%3E');
    background-size: cover;
    opacity: 0.9;
  }

  .sparkline.small {
    height: 34px;
  }

  .pill {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-size: 0.78rem;
    padding: 6px 10px;
    border-radius: 999px;
    border: 1px solid transparent;
    width: fit-content;
  }

  .pill.success {
    background: rgba(64, 226, 164, 0.12);
    color: #1f9b6a;
    border-color: rgba(64, 226, 164, 0.2);
  }

  .pill.warning {
    background: rgba(255, 184, 77, 0.16);
    color: #b56c00;
    border-color: rgba(255, 184, 77, 0.3);
  }

  .pill.danger {
    background: rgba(236, 72, 87, 0.14);
    color: #c0392b;
    border-color: rgba(236, 72, 87, 0.2);
  }

  .pill.neutral {
    background: rgba(15, 139, 255, 0.12);
    color: #0f8bff;
    border-color: rgba(15, 139, 255, 0.22);
  }

  .pill.subtle {
    background: rgba(12, 19, 43, 0.06);
    color: #59637a;
    border-color: rgba(12, 19, 43, 0.08);
  }

  .orders-card {
    background: linear-gradient(160deg, rgba(255, 255, 255, 0.96), rgba(239, 244, 255, 0.9));
    border-radius: 18px;
    border: 1px solid rgba(12, 19, 43, 0.06);
    box-shadow: 0 18px 40px rgba(12, 18, 45, 0.12);
    padding: 14px 14px;
    display: grid;
    gap: 12px;
  }

  .orders-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .orders-list {
    display: grid;
    gap: 10px;
  }

  .order {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 12px;
    border-radius: 14px;
    background: rgba(12, 19, 43, 0.04);
    border: 1px solid rgba(12, 19, 43, 0.06);
  }

  .hero-device {
    position: relative;
    z-index: 1;
    border-radius: 36px;
    padding: 16px;
    width: min(430px, 80vw);
    min-height: 912px;
    aspect-ratio: 430 / 932;
    background: radial-gradient(120% 120% at 20% 10%, rgba(30, 60, 120, 0.55), transparent),
      radial-gradient(100% 120% at 80% 0%, rgba(120, 70, 255, 0.35), transparent),
      linear-gradient(160deg, #0a122b 0%, #0b1024 60%, #0b0f24 100%);
    box-shadow: 0 40px 90px rgba(0, 4, 24, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.06);
    overflow: hidden;
  }

  .hero-device::after {
    content: '';
    position: absolute;
    inset: 10% -34% auto auto;
    width: 72%;
    height: 40%;
    background: radial-gradient(circle, rgba(15, 139, 255, 0.25), transparent 60%);
    filter: blur(20px);
  }

  .device-notch {
    position: absolute;
    top: 14px;
    left: 50%;
    transform: translateX(-50%);
    width: 128px;
    height: 9px;
    border-radius: 999px;
    background: rgba(10, 15, 35, 0.25);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }

  .device-content {
    border-radius: 34px;
    background: linear-gradient(170deg, rgba(9, 14, 36, 0.9), rgba(14, 28, 58, 0.92));
    padding: 34px 24px 38px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 22px;
    min-height: 100%;
    color: #e9f1ff;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.05);
  }

  .device-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .device-label {
    font-weight: 600;
    color: #f5f8ff;
  }

  .device-sub {
    font-size: 0.85rem;
    color: rgba(233, 241, 255, 0.72);
    margin: 0;
  }

  .status-pill {
    font-size: 0.75rem;
    padding: 4px 12px;
    border-radius: 999px;
    background: linear-gradient(120deg, rgba(64, 226, 164, 0.3), rgba(38, 192, 134, 0.2));
    color: #b7f2d9;
    font-weight: 600;
    border: 1px solid rgba(64, 226, 164, 0.35);
  }

  .device-card {
    border-radius: 20px;
    background: linear-gradient(140deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.04));
    padding: 18px;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
    border: 1px solid rgba(255, 255, 255, 0.08);
  }

  .device-card strong {
    font-size: 1.1rem;
    color: #f7fbff;
    display: block;
  }

  .muted {
    color: rgba(233, 241, 255, 0.7);
    font-size: 0.82rem;
  }

  .device-form {
    display: grid;
    gap: 16px;
  }

  .fake-field {
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 0.85rem;
    color: rgba(233, 241, 255, 0.86);
  }

  .input {
    border-radius: 16px;
    padding: 10px 14px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(10, 14, 36, 0.6);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
  }

  .fake-input {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    color: #f7fbff;
  }

  .split {
    max-width: 110px;
  }

  .device-btn {
    width: 100%;
    border-radius: 16px;
    justify-content: center;
    font-size: 0.95rem;
    background: linear-gradient(120deg, #0f8bff, #7c4dff);
    border: none;
    box-shadow: 0 16px 45px rgba(0, 102, 255, 0.35);
  }

  .device-icons {
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
    color: rgba(233, 241, 255, 0.68);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }
</style>
