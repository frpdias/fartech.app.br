<script lang="ts">
  import Hero from '$components/Hero.svelte';
  import CardServico from '$components/CardServico.svelte';
  import Depoimento from '$components/Depoimento.svelte';
  import CaseCard from '$components/CaseCard.svelte';
  import DashboardPreview from '$components/DashboardPreview.svelte';
  import PaymentCard from '$components/PaymentCard.svelte';
  import EnemShowcase from '$components/EnemShowcase.svelte';

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
  showEnemUltra={false}
  meta={[
    { label: 'Empresas conectadas', value: '350+' },
    { label: 'Go-live médio', value: '14 dias' },
    { label: 'Disponibilidade', value: '99.95%' }
  ]}
>
  <div slot="visual" class="hero-visual-stack">
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

    <div class="phone phone-pay">
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

<section class="section" id="dashboards">
  <div class="container">
    <p class="eyebrow">Dashboards & Integrações</p>
    <h2 class="section-title">Visualize dados em tempo real com painéis intuitivos.</h2>
    
    <div class="dashboards-showcase">
      <div class="dashboard-left">
        <DashboardPreview 
          eyebrow="Rocket Rides"
          title="Rocket Rides"
          subtitle="Dashboard de vendas"
          stats={[
            { label: 'Volume liquidado hoje', value: 'R$ 3.528.198,72', chart: true },
            { label: 'Ticket médio', value: 'R$ 392,74' }
          ]}
          transactions={[
            { value: 'R$ 1.284,90', label: 'Pix - Rocket Rides', status: 'Pago' },
            { value: 'R$ 892,40', label: 'Cartão - Orion Labs', status: 'Análise' },
            { value: 'R$ 2.394,10', label: 'Pix - Villa Auto', status: 'Pago' },
            { value: 'R$ 742,00', label: 'Cartão - Estaieiro Sul', status: 'Falha' }
          ]}
        >
          <PaymentCard 
            status="Online"
            statusColor="#10b981"
            title="Integração Pix Ready"
            subtitle="Checkout Fartech Pay"
            amount="R$ 1.284,90"
            customer="Rocket Rides"
            card="•••• •••• •••• 4487"
            holder="Fernanda V."
            cvv="123"
            buttonText="Confirmar pagamento"
          />
        </DashboardPreview>
      </div>

      <div class="dashboard-right">
        <EnemShowcase 
          title="ENEM ULTRA"
          description="Plataforma de simulados com IA para preparação ENEM"
        />
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
    justify-content: space-between;
    gap: clamp(22px, 4vw, 48px);
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    flex-wrap: nowrap;
  }

  .hero-visual-stack > .phone {
    flex: 0 0 auto;
  }

  @media (max-width: 1024px) {
    .hero-visual-stack {
      flex-wrap: wrap;
      justify-content: center;
      max-width: 760px;
    }

    .phone {
      max-width: 100%;
      width: 100%;
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
    width: 340px;
    max-width: 340px;
    border-radius: 26px;
    padding: 14px;
    background: #0b1021;
    box-shadow: 0 30px 80px rgba(5, 10, 30, 0.3);
    border: 1px solid rgba(0, 0, 0, 0.08);
  }

  .phone-light {
    background: #e9edf4;
    border: 1px solid rgba(0, 0, 0, 0.06);
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.18);
  }

  .phone-dark {
    background: linear-gradient(180deg, #0e1228 0%, #0b0f23 100%);
    border-color: rgba(255, 255, 255, 0.06);
  }

  .phone-pay {
    background: linear-gradient(180deg, #0c1228 0%, #101a38 100%);
    border-color: rgba(255, 255, 255, 0.08);
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
    background: rgba(255, 255, 255, 0.96);
    border-radius: 22px;
    padding: 18px;
    display: grid;
    gap: 12px;
    overflow: hidden;
  }

  .phone-light .phone-body {
    background: rgba(255, 255, 255, 0.94);
    border: 1px solid rgba(0, 0, 0, 0.05);
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
:global(.hero) {
    isolation: isolate;
  }

  :global(.hero)::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 50%;
    background: url('/images/fartecvetorizada.png') 82% center no-repeat;
    background-size: 110%;
    opacity: 0.14;
    pointer-events: none;
    mix-blend-mode: normal;
    z-index: 0;
    animation: watermarkFloat 14s ease-in-out infinite alternate;
  }

  @keyframes watermarkFloat {
    0% {
      transform: translate3d(12px, -12px, 0) scale(1.04) rotate(-1.5deg);
      opacity: 0.14;
    }
    50% {
      transform: translate3d(-8px, 10px, 0) scale(1.08) rotate(1.2deg);
      opacity: 0.18;
    }
    100% {
      transform: translate3d(10px, 14px, 0) scale(1.1) rotate(2deg);
      opacity: 0.14;
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
