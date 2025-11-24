<script lang="ts">
  import Hero from '$components/Hero.svelte';
  import CardServico from '$components/CardServico.svelte';
  import Depoimento from '$components/Depoimento.svelte';
  import CaseCard from '$components/CaseCard.svelte';
  import DashboardCard from '$components/DashboardCard.svelte';

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

<DashboardCard />

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
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(24px, 3vw, 36px);
    align-items: center;
    justify-items: center;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
  }

  @media (max-width: 1024px) {
    .hero-visual-stack {
      grid-template-columns: 1fr;
      max-width: 450px;
    }

    .dashboard-card,
    .hero-device {
      max-width: 100%;
      width: 100%;
    }
  }

  .dashboard-card {
    flex: 1;
    width: 100%;
    max-width: 420px;
    background: var(--color-surface);
    border-radius: var(--radius-lg);
    padding: 20px;
    box-shadow: var(--shadow-lg);
    transform: translateY(6px) rotate(-1deg);
    border: 1px solid var(--color-line);
    backdrop-filter: blur(12px);
    position: relative;
    overflow: hidden;
    isolation: isolate;
  }

  .dashboard-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 20% 10%, rgba(0, 102, 255, 0.08), transparent 40%),
      radial-gradient(circle at 80% 0%, rgba(124, 58, 237, 0.08), transparent 46%);
    z-index: 0;
  }

  .dashboard-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    position: relative;
    z-index: 1;
    gap: 12px;
  }

  .logo-stack {
    display: flex;
    flex-direction: column;
    gap: 2px;
    flex: 1;
  }

  .logo-stack small {
    color: var(--color-text-secondary);
    letter-spacing: 0.08em;
    font-weight: 500;
    font-size: 0.75rem;
  }

  .logo-pill {
    font-size: 0.68rem;
    letter-spacing: 0.24em;
    color: var(--color-primary);
    padding: 5px 10px;
    border-radius: var(--radius-pill);
    background: var(--color-blue-light);
    border: 1px solid var(--color-blue);
    box-shadow: 0 6px 12px rgba(0, 102, 255, 0.12);
    white-space: nowrap;
  }

  .search-pill {
    background: var(--color-line-light);
    border-radius: var(--radius-pill);
    padding: 5px 12px;
    font-size: 0.75rem;
    color: var(--color-text-secondary);
    border: 1px solid var(--color-line);
    white-space: nowrap;
  }

  .dashboard-body {
    display: grid;
    gap: 12px;
    position: relative;
    z-index: 1;
  }

  .stat-grid {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
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
    background: url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 80\" preserveAspectRatio=\"none\"%3E%3Cpolyline fill=\"none\" stroke=\"%230066ff\" stroke-width=\"6\" stroke-linecap=\"round\" points=\"0,60 40,50 80,60 120,35 160,45 200,30\"/%3E%3C/svg%3E');
    background-size: cover;
    opacity: 0.85;
  }

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

  .hero-device {
    position: relative;
    z-index: 1;
    border-radius: var(--radius-lg);
    padding: 16px;
    width: 100%;
    max-width: 420px;
    background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%);
    box-shadow: var(--shadow-lg);
    border: 1px solid rgba(255, 255, 255, 0.1);
    overflow: hidden;
  }

  .hero-device::after {
    content: '';
    position: absolute;
    inset: 10% -34% auto auto;
    width: 72%;
    height: 40%;
    background: radial-gradient(circle, rgba(0, 102, 255, 0.15), transparent 60%);
    filter: blur(20px);
  }

  .device-notch {
    position: absolute;
    top: 12px;
    left: 50%;
    transform: translateX(-50%);
    width: 110px;
    height: 8px;
    border-radius: var(--radius-pill);
    background: rgba(10, 15, 35, 0.25);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }

  .device-content {
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.95);
    padding: 20px 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 12px;
    min-height: 100%;
    color: var(--color-primary);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.15);
  }

  .device-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .device-label {
    font-weight: 600;
    color: var(--color-primary);
    font-size: 0.9rem;
  }

  .device-sub {
    font-size: 0.8rem;
    color: var(--color-text-secondary);
    margin: 2px 0 0 0;
  }

  .status-pill {
    font-size: 0.7rem;
    padding: 5px 12px;
    border-radius: var(--radius-pill);
    background: var(--color-green-light);
    color: var(--color-green);
    font-weight: 600;
    border: 1px solid var(--color-green);
  }

  .device-card {
    border-radius: 16px;
    background: var(--color-line-light);
    padding: 14px;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
    border: 1px solid var(--color-line);
  }

  .device-card strong {
    font-size: 0.95rem;
    color: var(--color-primary);
    display: block;
    font-weight: 700;
  }

  .device-card span {
    font-size: 0.8rem;
    color: var(--color-text-secondary);
  }

  .muted {
    color: var(--color-text-secondary);
    font-size: 0.78rem;
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
