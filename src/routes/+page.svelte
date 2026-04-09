<script lang="ts">
  import Hero from '$components/Hero.svelte';
  import CardServico from '$components/CardServico.svelte';
  import Depoimento from '$components/Depoimento.svelte';
  import CaseCard from '$components/CaseCard.svelte';
  import { onMount, onDestroy } from 'svelte';

  // JSON-LD Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Fartech",
    "url": "https://fartech.app.br",
    "logo": "https://fartech.app.br/images/logo.png",
    "description": "Fartech cria produtos SaaS para RH e Jurídico: TalentForge para recrutamento e gestão de performance COPC, e TalentJUD para escritórios de advocacia.",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "availableLanguage": "Portuguese"
    },
    "sameAs": [
      "https://www.linkedin.com/company/fartech",
      "https://www.instagram.com/fartech"
    ]
  };

  const produtos = [
    {
      title: 'TalentForge',
      description: 'Plataforma de recrutamento com pipeline Kanban, avaliações DISC e módulo COPC de performance. Gerencie pessoas do primeiro contato à gestão contínua.',
      href: 'https://talentforge.com.br'
    },
    {
      title: 'TalentJUD',
      description: 'Sistema jurídico completo: gestão de casos, CRM de leads, consulta DataJud CNJ em 28 tribunais, templates com branding e 11 recursos de IA integrados.',
      href: 'https://talentjud.com.br'
    }
  ];

  const diferenciais = [
    {
      title: 'Multi-tenant com RLS',
      description: 'Dados isolados por empresa com Row Level Security. Cada organização vê apenas seus próprios dados, com compliance LGPD nativo.',
      href: '/quem-somos'
    },
    {
      title: 'IA com custo por uso',
      description: 'Recursos de inteligência artificial cobrados por token consumido. Fatura unificada e transparente — sem mensalidade fixa de IA.',
      href: '/contato'
    },
    {
      title: 'Integrações nativas',
      description: 'Google Drive, OneDrive, DataJud CNJ, Diário Oficial, Google Calendar e APIs abertas prontas para conectar seu ecossistema.',
      href: '/cases'
    },
    {
      title: 'Onboarding em minutos',
      description: 'Setup inicial rápido, interfaces intuitivas e suporte dedicado para você extrair resultado desde o primeiro dia.',
      href: '/contato'
    }
  ];

  const funcionalidadesTF = [
    {
      title: 'Pipeline Kanban',
      description: 'Gerencie candidatos por etapas com drag-and-drop. Histórico completo de cada movimentação com rastreabilidade total.',
      href: 'https://talentforge.com.br'
    },
    {
      title: 'Avaliações DISC',
      description: 'Questionários comportamentais padronizados com análise de perfil para decisões de contratação mais assertivas.',
      href: 'https://talentforge.com.br'
    },
    {
      title: 'Módulo COPC',
      description: 'Cadastre os indicadores da empresa e gere o quadrante de performance de cada indicador. Monitore quem está pronto para operar no padrão COPC.',
      href: 'https://talentforge.com.br'
    },
    {
      title: 'NR-1 Psicossocial',
      description: 'Mapeamento e gestão de riscos psicossociais em 10 dimensões conforme a NR-1 revisada. Relatório de compliance automático.',
      href: 'https://talentforge.com.br'
    },
    {
      title: 'Gestão Multi-empresa',
      description: 'Cadastre múltiplas empresas clientes. Organogramas, funcionários e módulos separados por organização.',
      href: 'https://talentforge.com.br'
    },
    {
      title: 'Score PHP Total',
      description: 'Índice unificado de saúde organizacional nos 3 pilares: TFCI (comportamento), NR-1 (riscos) e COPC (performance).',
      href: 'https://talentforge.com.br'
    }
  ];

  const funcionalidadesTJud = [
    {
      title: 'Gestão de Casos',
      description: 'Controle completo do ciclo de vida dos processos com timeline de movimentações, prioridades automáticas e histórico de responsáveis.',
      href: 'https://talentjud.com.br'
    },
    {
      title: 'DataJud CNJ',
      description: 'Consulta direta à Base Nacional de Dados do Poder Judiciário — 28 tribunais, busca por CPF, número de processo e classe.',
      href: 'https://talentjud.com.br'
    },
    {
      title: 'CRM de Leads',
      description: 'Pipeline visual de prospecção com qualificação automática por IA, score 0–10 e follow-up integrado para converter mais clientes.',
      href: 'https://talentjud.com.br'
    },
    {
      title: 'Templates Jurídicos',
      description: 'Editor com variáveis dinâmicas (nome, CPF, data, valor), sincronização com Google Drive e OneDrive, marca d\'água e branding do escritório.',
      href: 'https://talentjud.com.br'
    },
    {
      title: 'Diário Oficial',
      description: 'Monitoramento automático de publicações no DOU com alertas por CPF e CNPJ. Análise de impacto para cada caso com IA.',
      href: 'https://talentjud.com.br'
    },
    {
      title: '11 recursos de IA',
      description: 'Petições, jurisprudência, Waze Jurídico, health score do cliente, priorização de casos, insights do dia e mais — billing por uso transparente.',
      href: 'https://talentjud.com.br'
    }
  ];

  const cases = [
    {
      title: 'Escritório de advocacia com IA integrada',
      description: 'Implantamos o TalentJUD em um escritório de médio porte com 5 advogados, reduzindo o tempo de gestão de processos e automatizando petições com IA.',
      metric: 'Tempo admin −60%'
    },
    {
      title: 'RH corporativo pronto para COPC',
      description: 'Configuramos o TalentForge com os indicadores COPC da empresa, gerando os quadrantes de performance e revelando gaps de operação em menos de 30 dias.',
      metric: 'Performance +COPC'
    },
    {
      title: 'Recrutamento multiempresa sem planilhas',
      description: 'Migramos o processo seletivo de uma consultoria de RH para o TalentForge, eliminando planilhas e centralizando candidatos, avaliações DISC e relatórios.',
      metric: '3× mais rápido'
    }
  ];

  const depoimentos = [
    {
      quote: 'O módulo COPC do TalentForge transformou nossa gestão de KPIs. Hoje cada líder sabe exatamente onde está e o que precisa melhorar.',
      author: 'Renata Campos',
      role: 'Diretora de RH • Grupo Meridian'
    },
    {
      quote: 'O TalentJUD virou o escritório de cabeça para baixo — do jeito certo. DataJud em tempo real e IA que realmente entende direito.',
      author: 'Dr. Felipe Andrade',
      role: 'Sócio • Andrade & Matos Advogados'
    },
    {
      quote: 'Contratamos mais rápido, com mais segurança. O pipeline Kanban e as avaliações DISC tornaram o processo seletivo objetivo e rastreável.',
      author: 'Marcos Teixeira',
      role: 'Head de Talentos • Vega Tecnologia'
    }
  ];

  // COPC indicadores para o mock do TalentForge
  type StatusIndicador = 'verde' | 'amarelo' | 'vermelho';
  type Indicador = { nome: string; meta: number; realizado: number; status: StatusIndicador };

  const indicadoresCOPC: Indicador[] = [
    { nome: 'FCR', meta: 85, realizado: 88, status: 'verde' },
    { nome: 'CSAT', meta: 90, realizado: 87, status: 'amarelo' },
    { nome: 'AHT', meta: 240, realizado: 258, status: 'vermelho' },
    { nome: 'OEE', meta: 75, realizado: 79, status: 'verde' },
    { nome: 'Abandono', meta: 5, realizado: 3.2, status: 'verde' },
    { nome: 'SLA L1', meta: 95, realizado: 91, status: 'amarelo' },
  ];

  const statusColor = (s: StatusIndicador) => {
    if (s === 'verde') return '#10b981';
    if (s === 'amarelo') return '#f59e0b';
    return '#ef4444';
  };

  // Score PHP animado
  let phpScore = 76.4;
  let tfciScore = 82.0;
  let nr1Score = 71.5;
  let copcScore = 74.8;

  // Casos TalentJUD ativos
  type StatusCaso = 'ativo' | 'urgente' | 'aguardando';
  type Caso = { id: string; titulo: string; cliente: string; tribunal: string; status: StatusCaso; prazo: string };

  let casos: Caso[] = [
    { id: '0001234-12.2024.8.26.0100', titulo: 'Ação Trabalhista', cliente: 'João R. Silva', tribunal: 'TJSP', status: 'urgente', prazo: 'Amanhã' },
    { id: '0009871-05.2024.4.02.5101', titulo: 'Execução Fiscal', cliente: 'Omega Ltda.', tribunal: 'TRF2', status: 'ativo', prazo: '12/abr' },
    { id: '0003390-44.2023.8.19.0001', titulo: 'Revisão Contratual', cliente: 'Ana Lima', tribunal: 'TJRJ', status: 'aguardando', prazo: '22/abr' },
    { id: '0007712-88.2024.8.13.0024', titulo: 'Indenização Cível', cliente: 'Pedro Costa', tribunal: 'TJMG', status: 'ativo', prazo: '30/abr' },
  ];

  const casoNovos: Caso[] = [
    { id: '0000001-01.2025.8.26.0100', titulo: 'Recuperação Judicial', cliente: 'Solaris S/A', tribunal: 'TJSP', status: 'urgente', prazo: 'Hoje' },
    { id: '0000002-02.2025.5.01.0001', titulo: 'Mandado de Segurança', cliente: 'Dr. Rui Paz', tribunal: 'TST', status: 'ativo', prazo: '15/abr' },
  ];

  const badgeCaso = (s: StatusCaso) => {
    if (s === 'urgente') return 'danger';
    if (s === 'ativo') return 'success';
    return 'warning';
  };

  let casoIdx = 0;
  let casosInterval: ReturnType<typeof setInterval> | undefined;

  onMount(() => {
    casosInterval = setInterval(() => {
      const novo = casoNovos[casoIdx % casoNovos.length];
      casoIdx = (casoIdx + 1) % casoNovos.length;
      casos = [novo, ...casos].slice(0, 4);
    }, 4000);
  });

  onDestroy(() => {
    if (casosInterval) clearInterval(casosInterval);
  });
</script>

<svelte:head>
  <title>Fartech — TalentForge e TalentJUD</title>
  <meta name="description" content="Fartech cria produtos SaaS para RH e Jurídico. TalentForge: recrutamento, DISC e COPC. TalentJUD: gestão de casos, DataJud CNJ e IA jurídica." />
  <script type="application/ld+json">
    {JSON.stringify(structuredData)}
  </script>
</svelte:head>

<Hero
  eyebrow="Fartech · Produtos SaaS"
  title="Tecnologia pensada para RH e para quem advoga."
  subtitle="TalentForge para recrutamento inteligente e gestão COPC. TalentJUD para escritórios que precisam de mais que um sistema."
  primaryHref="https://talentforge.com.br"
  primaryLabel="Conhecer TalentForge"
  secondaryHref="https://talentjud.com.br"
  secondaryLabel="Conhecer TalentJUD"
  showEnemUltra={false}
  meta={[
    { label: 'Produtos ativos', value: '2' },
    { label: 'Tribunais integrados', value: '28' },
    { label: 'Setup inicial', value: '<30 min' }
  ]}
>
  <div slot="visual"></div>
</Hero>

<!-- Produtos Destaque -->
<section class="section">
  <div class="container">
    <p class="eyebrow">Nossos Produtos</p>
    <h2 class="section-title">Dois produtos. Um propósito: eliminar trabalho manual.</h2>
    <p class="section-subtitle">Construídos pela Fartech, cada produto resolve um domínio específico com profundidade — sem atalhos, sem gambiarras.</p>
    <div class="diferenciais-grid">
      {#each produtos as item}
        <CardServico {...item} />
      {/each}
    </div>
  </div>
</section>

<!-- Diferenciais -->
<section class="section section-alt">
  <div class="container">
    <p class="eyebrow">Por que Fartech</p>
    <h2 class="section-title">A base técnica que sustenta os dois produtos.</h2>
    <p class="section-subtitle">Segurança, integrações e custo transparente de IA são padrão em tudo que construímos.</p>
    <div class="diferenciais-grid">
      {#each diferenciais as item}
        <CardServico {...item} />
      {/each}
    </div>
  </div>
</section>

<!-- TalentForge — Funcionalidades e Mock COPC -->
<section class="section" id="talentforge">
  <div class="container">
    <p class="eyebrow">TalentForge</p>
    <h2 class="section-title">Recrutamento inteligente com gestão contínua de performance.</h2>
    <p class="section-subtitle">Do pipeline de candidatos ao quadrante COPC — tudo no mesmo lugar, com avaliações DISC, score PHP e compliance NR-1.</p>
    <div class="services-grid">
      {#each funcionalidadesTF as f}
        <CardServico {...f} />
      {/each}
    </div>

    <!-- Mock Dashboard COPC -->
    <div class="hero-visual-stack" style="margin-top: 64px; align-items: flex-start;">

      <!-- PHP Score Phone -->
      <div class="phone phone-dark">
        <div class="phone-notch dark"></div>
        <div class="phone-body">
          <header style="color: #e5e7eb; margin-bottom: 8px;">
            <p style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.12em; color: #64748b; margin: 0 0 4px 0;">TalentForge · PHP Score</p>
            <h3 style="font-size: 1.1rem; margin: 0 0 6px 0; color: #f1f5f9;">Saúde Organizacional</h3>
            <span class="pill outline" style="font-size: 0.7rem;">Abril 2026</span>
          </header>

          <!-- Score Total -->
          <div style="background: linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.15)); border: 1px solid rgba(139,92,246,0.3); border-radius: 14px; padding: 18px; text-align: center;">
            <p style="color: #94a3b8; font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 4px 0;">Score PHP Total</p>
            <div style="font-size: 3rem; font-weight: 900; color: #fff; line-height: 1;">{phpScore}</div>
            <p style="color: #a78bfa; font-size: 0.75rem; margin: 6px 0 0 0;">+4.2 vs mês anterior</p>
          </div>

          <!-- 3 Pilares -->
          <div style="display: grid; gap: 10px; margin-top: 10px;">
            <div style="background: rgba(30,41,59,0.6); border-radius: 10px; padding: 12px; border: 1px solid rgba(255,255,255,0.07);">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                <div>
                  <p style="color: #64748b; font-size: 0.6rem; margin: 0; text-transform: uppercase; letter-spacing: 0.08em;">TFCI · 30%</p>
                  <p style="color: #e2e8f0; font-size: 0.82rem; font-weight: 700; margin: 2px 0 0 0;">Comportamento</p>
                </div>
                <span style="color: #10b981; font-size: 1.4rem; font-weight: 900;">{tfciScore}</span>
              </div>
              <div style="background: rgba(15,23,42,0.6); height: 6px; border-radius: 3px; overflow: hidden;">
                <div style="background: linear-gradient(90deg, #10b981, #34d399); width: {tfciScore}%; height: 100%; border-radius: 3px;"></div>
              </div>
            </div>

            <div style="background: rgba(30,41,59,0.6); border-radius: 10px; padding: 12px; border: 1px solid rgba(255,255,255,0.07);">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                <div>
                  <p style="color: #64748b; font-size: 0.6rem; margin: 0; text-transform: uppercase; letter-spacing: 0.08em;">NR-1 · 40%</p>
                  <p style="color: #e2e8f0; font-size: 0.82rem; font-weight: 700; margin: 2px 0 0 0;">Riscos Psicossociais</p>
                </div>
                <span style="color: #f59e0b; font-size: 1.4rem; font-weight: 900;">{nr1Score}</span>
              </div>
              <div style="background: rgba(15,23,42,0.6); height: 6px; border-radius: 3px; overflow: hidden;">
                <div style="background: linear-gradient(90deg, #f59e0b, #fbbf24); width: {nr1Score}%; height: 100%; border-radius: 3px;"></div>
              </div>
            </div>

            <div style="background: rgba(30,41,59,0.6); border-radius: 10px; padding: 12px; border: 1px solid rgba(255,255,255,0.07);">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                <div>
                  <p style="color: #64748b; font-size: 0.6rem; margin: 0; text-transform: uppercase; letter-spacing: 0.08em;">COPC · 30%</p>
                  <p style="color: #e2e8f0; font-size: 0.82rem; font-weight: 700; margin: 2px 0 0 0;">Performance</p>
                </div>
                <span style="color: #3b82f6; font-size: 1.4rem; font-weight: 900;">{copcScore}</span>
              </div>
              <div style="background: rgba(15,23,42,0.6); height: 6px; border-radius: 3px; overflow: hidden;">
                <div style="background: linear-gradient(90deg, #3b82f6, #60a5fa); width: {copcScore}%; height: 100%; border-radius: 3px;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Quadrante COPC Phone dark landscape -->
      <div class="phone phone-landscape phone-dark">
        <div class="phone-body" style="display: grid; grid-template-columns: 200px 1fr; gap: 0; padding: 0; height: 100%;">
          <!-- Sidebar -->
          <div style="background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%); padding: 20px 14px; display: flex; flex-direction: column; gap: 12px; border-right: 1px solid rgba(255,255,255,0.07);">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
              <div style="width: 28px; height: 28px; background: linear-gradient(135deg, #6366f1, #8b5cf6); border-radius: 7px; display: flex; align-items: center; justify-content: center; font-weight: 900; color: white; font-size: 14px;">TF</div>
              <strong style="color: #e5e7eb; font-size: 0.9rem;">TalentForge</strong>
            </div>
            <nav style="display: flex; flex-direction: column; gap: 4px;">
              {#each ['Dashboard','Pipeline','Avaliações','COPC','NR-1','Relatórios'] as item, i}
                <div style="padding: 7px 10px; border-radius: 7px; font-size: 0.75rem; color: {i === 3 ? '#a78bfa' : '#94a3b8'}; background: {i === 3 ? 'rgba(139,92,246,0.15)' : 'transparent'}; border: {i === 3 ? '1px solid rgba(139,92,246,0.25)' : '1px solid transparent'};">{item}</div>
              {/each}
            </nav>
            <div style="margin-top: auto; background: rgba(139,92,246,0.12); border: 1px solid rgba(139,92,246,0.25); border-radius: 10px; padding: 10px 12px;">
              <p style="color: #a78bfa; font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 4px 0;">Score COPC</p>
              <div style="color: #fff; font-size: 1.8rem; font-weight: 900;">{copcScore}</div>
              <p style="color: #64748b; font-size: 0.65rem; margin: 2px 0 0 0;">6 indicadores ativos</p>
            </div>
          </div>

          <!-- Área Central: Quadrante COPC -->
          <div style="background: linear-gradient(180deg, #0f172a 0%, #0b1022 100%); padding: 20px; overflow-y: auto;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
              <div>
                <h3 style="color: #f1f5f9; font-size: 1rem; font-weight: 700; margin: 0 0 3px 0;">Quadrante de Performance COPC</h3>
                <p style="color: #64748b; font-size: 0.72rem; margin: 0;">Meta vs. Realizado — Equipe Operacional</p>
              </div>
              <span class="pill outline" style="font-size: 0.65rem;">Abr 2026</span>
            </div>

            <!-- Tabela de Indicadores -->
            <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 10px; overflow: hidden;">
              <div style="display: grid; grid-template-columns: 1fr 80px 80px 80px 80px; font-size: 0.65rem; color: #64748b; text-transform: uppercase; letter-spacing: 0.06em; padding: 10px 14px; border-bottom: 1px solid rgba(255,255,255,0.06);">
                <span>Indicador</span>
                <span style="text-align:center;">Meta</span>
                <span style="text-align:center;">Realizado</span>
                <span style="text-align:center;">Dif.</span>
                <span style="text-align:center;">Status</span>
              </div>
              {#each indicadoresCOPC as ind}
                <div style="display: grid; grid-template-columns: 1fr 80px 80px 80px 80px; padding: 10px 14px; border-bottom: 1px solid rgba(255,255,255,0.04); align-items: center; font-size: 0.78rem;">
                  <span style="color: #e2e8f0; font-weight: 600;">{ind.nome}</span>
                  <span style="text-align:center; color: #94a3b8;">{ind.meta}{ind.nome === 'AHT' ? 's' : '%'}</span>
                  <span style="text-align:center; color: #cbd5e1; font-weight: 700;">{ind.realizado}{ind.nome === 'AHT' ? 's' : '%'}</span>
                  <span style="text-align:center; color: {statusColor(ind.status)}; font-weight: 700;">
                    {ind.nome === 'AHT'
                      ? (ind.realizado > ind.meta ? `+${(ind.realizado - ind.meta).toFixed(0)}s` : `-${(ind.meta - ind.realizado).toFixed(0)}s`)
                      : ind.nome === 'Abandono'
                      ? (ind.realizado < ind.meta ? `-${(ind.meta - ind.realizado).toFixed(1)}pp` : `+${(ind.realizado - ind.meta).toFixed(1)}pp`)
                      : (ind.realizado >= ind.meta ? `+${(ind.realizado - ind.meta).toFixed(1)}pp` : `-${(ind.meta - ind.realizado).toFixed(1)}pp`)}
                  </span>
                  <div style="display:flex; justify-content:center;">
                    <span style="width: 10px; height: 10px; border-radius: 50%; background: {statusColor(ind.status)}; display:inline-block; box-shadow: 0 0 6px {statusColor(ind.status)}55;"></span>
                  </div>
                </div>
              {/each}
            </div>

            <!-- Legenda -->
            <div style="display: flex; gap: 14px; margin-top: 12px; font-size: 0.68rem;">
              <span style="color: #10b981;">● Dentro da meta</span>
              <span style="color: #f59e0b;">● Atenção</span>
              <span style="color: #ef4444;">● Fora da meta</span>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div style="margin-top: 40px;">
      <a class="btn btn-primary" href="https://talentforge.com.br" target="_blank" rel="noopener noreferrer">Acessar TalentForge</a>
    </div>
  </div>
</section>

<!-- TalentJUD — Funcionalidades e Mock de Casos -->
<section class="section section-alt" id="talentjud">
  <div class="container">
    <p class="eyebrow">TalentJUD</p>
    <h2 class="section-title">O sistema jurídico que trabalha enquanto você advoga.</h2>
    <p class="section-subtitle">Gestão de casos, DataJud em 28 tribunais, CRM de leads, templates com branding e 11 recursos de IA — tudo em um só lugar, billing por uso transparente.</p>
    <div class="services-grid">
      {#each funcionalidadesTJud as f}
        <CardServico {...f} />
      {/each}
    </div>

    <!-- Mock Dashboard TalentJUD -->
    <div class="hero-visual-stack" style="margin-top: 64px; align-items: flex-start;">

      <!-- Casos ativos phone dark landscape -->
      <div class="phone phone-landscape phone-dark" style="flex: 1 1 auto; max-width: 720px;">
        <div class="phone-body" style="display: grid; grid-template-columns: 180px 1fr; gap: 0; padding: 0; height: 100%;">
          <!-- Sidebar -->
          <div style="background: linear-gradient(180deg, #0f172a 0%, #020617 100%); padding: 18px 12px; display: flex; flex-direction: column; gap: 10px; border-right: 1px solid rgba(255,255,255,0.06);">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
              <div style="width: 28px; height: 28px; background: linear-gradient(135deg, #0ea5e9, #3b82f6); border-radius: 7px; display: flex; align-items: center; justify-content: center; font-weight: 900; color: white; font-size: 12px;">TJ</div>
              <strong style="color: #e5e7eb; font-size: 0.85rem;">TalentJUD</strong>
            </div>
            {#each ['Casos','CRM Leads','DataJud CNJ','Documentos','Financeiro','Agenda','IA Jurídica'] as item, i}
              <div style="padding: 7px 10px; border-radius: 7px; font-size: 0.72rem; color: {i === 0 ? '#38bdf8' : '#94a3b8'}; background: {i === 0 ? 'rgba(14,165,233,0.15)' : 'transparent'}; border: {i === 0 ? '1px solid rgba(14,165,233,0.25)' : '1px solid transparent'};">{item}</div>
            {/each}
            <div style="margin-top: auto; background: rgba(14,165,233,0.1); border: 1px solid rgba(14,165,233,0.25); border-radius: 10px; padding: 10px 12px;">
              <p style="color: #38bdf8; font-size: 0.6rem; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 4px 0;">Processos</p>
              <div style="color: #fff; font-size: 1.8rem; font-weight: 900;">{casos.length}</div>
              <p style="color: #64748b; font-size: 0.65rem; margin: 2px 0 0 0;">ativos agora</p>
            </div>
          </div>

          <!-- Lista de Casos -->
          <div style="background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%); padding: 18px; overflow-y: auto; display: flex; flex-direction: column; gap: 10px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
              <h3 style="color: #f1f5f9; font-size: 0.95rem; font-weight: 700; margin: 0;">Casos Ativos</h3>
              <span class="pill outline" style="font-size: 0.65rem;">DataJud CNJ</span>
            </div>
            {#each casos as caso (caso.id)}
              <div class="order animate" style="background: rgba(30,41,59,0.6); border: 1px solid rgba(255,255,255,0.07); border-radius: 10px; padding: 12px; display: flex; flex-direction: column; gap: 4px;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px;">
                  <div>
                    <p style="color: #e2e8f0; font-size: 0.8rem; font-weight: 700; margin: 0;">{caso.titulo}</p>
                    <p style="color: #94a3b8; font-size: 0.7rem; margin: 2px 0 0 0;">{caso.cliente} · {caso.tribunal}</p>
                  </div>
                  <span class={`pill ${badgeCaso(caso.status)}`} style="font-size: 0.62rem; white-space: nowrap;">
                    {caso.status === 'urgente' ? 'Urgente' : caso.status === 'ativo' ? 'Ativo' : 'Aguardando'}
                  </span>
                </div>
                <p style="color: #475569; font-size: 0.65rem; font-family: var(--font-mono); margin: 2px 0 0 0;">{caso.id}</p>
                <p style="color: #64748b; font-size: 0.67rem; margin: 2px 0 0 0;">Prazo: <strong style="color: {caso.prazo === 'Hoje' || caso.prazo === 'Amanhã' ? '#f87171' : '#94a3b8'};">{caso.prazo}</strong></p>
              </div>
            {/each}
          </div>
        </div>
      </div>

      <!-- IA Jurídica Phone vertical -->
      <div class="phone phone-dark">
        <div class="phone-notch dark"></div>
        <div class="phone-body">
          <header style="margin-bottom: 10px;">
            <p style="font-size: 0.68rem; text-transform: uppercase; letter-spacing: 0.1em; color: #64748b; margin: 0 0 4px 0;">TalentJUD · IA Jurídica</p>
            <h3 style="color: #f1f5f9; font-size: 1rem; font-weight: 700; margin: 0 0 6px 0;">11 recursos integrados</h3>
            <span class="pill outline" style="font-size: 0.68rem;">Billing por uso · GPT-4o-mini</span>
          </header>
          <div style="display: flex; flex-direction: column; gap: 8px; overflow-y: auto;">
            {#each [
              { nome: 'Assistente de Petição', preco: 'R$ 1,20', cor: '#60a5fa' },
              { nome: 'Jurisprudência IA', preco: 'R$ 0,45', cor: '#a78bfa' },
              { nome: 'Waze Jurídico', preco: 'R$ 0,80', cor: '#34d399' },
              { nome: 'Health Score Cliente', preco: 'R$ 0,45', cor: '#fbbf24' },
              { nome: 'Priorização de Casos', preco: 'R$ 0,80', cor: '#f87171' },
              { nome: 'Insights do Dashboard', preco: 'R$ 0,25', cor: '#38bdf8' },
              { nome: 'Análise DOU', preco: 'R$ 0,25', cor: '#e879f9' },
              { nome: 'Anomalias em Auditoria', preco: 'R$ 0,50', cor: '#fb923c' },
              { nome: 'Qualificação de Lead', preco: 'R$ 0,25', cor: '#a3e635' },
              { nome: 'Resumo Movimentações', preco: 'R$ 0,30', cor: '#22d3ee' },
              { nome: 'Geração de Template IA', preco: 'R$ 0,60', cor: '#818cf8' },
            ] as rec}
              <div style="display: flex; justify-content: space-between; align-items: center; background: rgba(30,41,59,0.5); border: 1px solid rgba(255,255,255,0.06); border-radius: 8px; padding: 9px 12px;">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span style="width: 6px; height: 6px; border-radius: 50%; background: {rec.cor}; flex-shrink: 0;"></span>
                  <span style="color: #e2e8f0; font-size: 0.75rem;">{rec.nome}</span>
                </div>
                <span style="color: #64748b; font-size: 0.7rem; font-family: var(--font-mono);">a partir de {rec.preco}</span>
              </div>
            {/each}
          </div>
        </div>
      </div>

    </div>

    <div style="margin-top: 40px;">
      <a class="btn btn-primary" href="https://talentjud.com.br" target="_blank" rel="noopener noreferrer">Acessar TalentJUD</a>
    </div>
  </div>
</section>

<section class="section" id="cases">
  <div class="container">
    <p class="eyebrow">Cases</p>
    <h2 class="section-title">Resultados que os clientes já sentem.</h2>
    <div class="cases-grid">
      {#each cases as caseItem}
        <CaseCard {...caseItem} />
      {/each}
    </div>
  </div>
</section>

<section class="section section-alt" id="depoimentos">
  <div class="container">
    <p class="eyebrow">Depoimentos</p>
    <h2 class="section-title">Quem usa, recomenda.</h2>
    <div class="depoimentos-grid">
      {#each depoimentos as depo}
        <Depoimento {...depo} />
      {/each}
    </div>
  </div>
</section>

<section class="section">
  <div class="container card" style="text-align:center;">
    <p class="eyebrow">Comece hoje</p>
    <h2 class="section-title">Escolha o produto certo para o seu negócio.</h2>
    <p class="section-subtitle">
      TalentForge para RH e gestão de performance. TalentJUD para escritórios de advocacia. Ambos com trial gratuito e setup em menos de 30 minutos.
    </p>
    <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; margin-top: 8px;">
      <a class="btn btn-primary" href="https://talentforge.com.br/register" target="_blank" rel="noopener noreferrer">Começar no TalentForge</a>
      <a class="btn btn-secondary" href="https://talentjud.com.br/login" target="_blank" rel="noopener noreferrer">Começar no TalentJUD</a>
    </div>
  </div>
</section>
<style>
  
  
  .hero-visual-stack {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: clamp(12px, 1.5vw, 20px);
    width: 100%;
    max-width: 100%;
    margin: 0;
    padding-left: 0;
    flex-wrap: nowrap;
    transform: translateX(0);
    pointer-events: auto;
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

  .phone-landscape {
    width: 844px;
    max-width: 844px;
    min-height: 390px;
    height: 390px;
    aspect-ratio: 844 / 390;
    border-radius: 28px;
    padding: 8px;
  }


  .phone-dark {
    background: linear-gradient(180deg, #0e1228 0%, #0b0f23 100%);
    border-color: rgba(255, 255, 255, 0.06);
  }


  @media (max-width: 768px) {
    .phone,
    .phone-landscape {
      width: 100%;
      max-width: 100%;
      min-height: auto;
      height: auto;
      aspect-ratio: auto;
      padding: 12px;
    }

    .phone-body {
      padding: 14px;
      border-radius: 18px;
      gap: 10px;
    }

    .hero-visual-stack {
      gap: 12px;
    }
  }

  @media (max-width: 640px) {
    :global(.hero)::before {
      background-size: 120%;
      opacity: 0.1;
      left: 45%;
    }

    .section,
    .container {
      padding-left: 14px;
      padding-right: 14px;
    }
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


  .phone-dark .phone-body {
    background: linear-gradient(180deg, #101632 0%, #0b1022 100%);
    color: #e5e7eb;
    border: 1px solid rgba(255, 255, 255, 0.08);
  }


  :global(.hero) {
    isolation: isolate;
  }

  /* Marca d'água fixa com maior intensidade */
  :global(.hero)::before {
    content: '';
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 50%;
    background: url('/images/fartecvetorizada.png') 82% center no-repeat;
    background-size: 110%;
    opacity: 0.15;
    pointer-events: none;
    mix-blend-mode: multiply;
    z-index: -300;
    animation: watermarkFloat 14s ease-in-out infinite alternate;
  }

  @keyframes watermarkFloat {
    0% {
      transform: translate3d(12px, -12px, 0) scale(1.04) rotate(-1.5deg);
      opacity: 0.15;
    }
    50% {
      transform: translate3d(-8px, 10px, 0) scale(1.08) rotate(1.2deg);
      opacity: 0.18;
    }
    100% {
      transform: translate3d(10px, 14px, 0) scale(1.1) rotate(2deg);
      opacity: 0.15;
    }
  }

  @media (max-width: 768px) {
    :global(.hero)::before {
      left: 40%;
      background-size: 90%;
      opacity: 0.08;
      animation-duration: 18s;
    }
  }

  @media (max-width: 640px) {
    .hero-visual-stack {
      display: grid;
      grid-template-columns: 1fr;
      max-width: 100%;
      width: 100%;
      padding: 0 12px;
      justify-items: center;
    }

    .mini-app-card {
      max-width: 100%;
      transform: none;
    }

    :global(.hero)::before {
      left: 45%;
      background-size: 80%;
      opacity: 0.05;
      background-position: center;
      animation: none;
    }
  }

  @media (max-width: 480px) {
    :global(.hero)::before {
      display: none;
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
