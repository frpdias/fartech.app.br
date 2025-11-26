<section class="section blob-hero">
  <div class="container blob-grid">
    <div class="blob-text">
      <p class="eyebrow">Quem Somos</p>
      <h1 class="section-title">Três fundadores, uma missão: manter a indústria sempre online.</h1>
      <p class="section-subtitle">
        Texto de apresentação aqui: conte em poucas linhas a história do time, o porquê da Fartech e como combinam engenharia, produto e operações. Esse bloco pode ser substituído pelo texto final que desejarem.
      </p>
    </div>
    <div class="blob-stack">
      <div class="blob-card b1">
        <div class="blob-img" aria-label="Fundador 1">
        </div>
        <p class="blob-caption">
          <strong>⭐ CEO – Chief Executive Officer</strong><br />
          Lidera a Fartech com visão estratégica, impulsionando crescimento, inovação e direção do negócio.
        </p>
      </div>
      <div class="blob-card b2">
        <div class="blob-img" aria-label="Fundador 2">
        </div>
        <p class="blob-caption">
          <strong>💡 CTO – Chief Technology Officer</strong><br />
          Responsável por toda a tecnologia da Fartech, garantindo inovação, segurança e alta performance das soluções.
        </p>
      </div>
      <div class="blob-card b3">
        <div class="blob-img" aria-label="Fundador 3">
        </div>
        <p class="blob-caption">
          <strong>💰 CFO – Chief Financial Officer</strong><br />
          Cuida da saúde financeira da Fartech, planejando investimentos e garantindo sustentabilidade e resultados.
        </p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="missao-visao">
      <div class="mv-card">
        <p class="eyebrow">Missão</p>
        <h3>Manter operações críticas sempre online.</h3>
        <p>Entregar soluções digitais que elevem a performance industrial, com segurança, observabilidade e velocidade.</p>
      </div>
      <div class="mv-card">
        <p class="eyebrow">Visão</p>
        <h3>Ser a stack número 1 de confiabilidade data-driven na América Latina.</h3>
        <p>Unir produto, engenharia e operação para criar indústrias mais inteligentes e resilientes.</p>
      </div>
    </div>

    <div class="valores">
      <p class="eyebrow">Nossos valores</p>
      <div class="valores-grid cards">
        <div class="valor-card">
          <h4>FOCO NO CLIENTE</h4>
          <p>Necessidades e experiência guiam todas as decisões.</p>
        </div>
        <div class="valor-card">
          <h4>OBSESSÃO POR QUALIDADE</h4>
          <p>Excelência em cada detalhe. Nada menos que o melhor.</p>
        </div>
        <div class="valor-card">
          <h4>INOVAÇÃO CONSTANTE</h4>
          <p>Ideias novas, evolução tecnológica e melhoria contínua.</p>
        </div>
        <div class="valor-card">
          <h4>PENSAR GRANDE</h4>
          <p>Visão de futuro e impacto real, sem limites.</p>
        </div>
        <div class="valor-card">
          <h4>AGILIDADE</h4>
          <p>Executar, testar e aprender rápido faz parte da cultura.</p>
        </div>
        <div class="valor-card destaque-valor">
          <h4>MERITOCRACIA</h4>
          <p>Reconhecer quem entrega resultado e cresce junto.</p>
        </div>
        <div class="valor-card">
          <h4>ÉTICA E RESPONSABILIDADE</h4>
          <p>Transparência, respeito e compromisso. Sempre do jeito certo.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .blob-hero {
    padding-bottom: clamp(60px, 10vw, 100px);
    position: relative;
    overflow: hidden;
  }

  .blob-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: clamp(20px, 6vw, 48px);
    align-items: center;
  }

  .blob-text {
    max-width: 640px;
  }

  .blob-stack {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: clamp(12px, 3vw, 20px);
    justify-items: center;
  }

  .blob-card {
    width: 100%;
    max-width: 220px;
    display: grid;
    gap: 8px;
    text-align: center;
  }

  .blob-img {
    aspect-ratio: 1 / 1;
    border-radius: 46% 54% 52% 48%;
    background: linear-gradient(135deg, rgba(37, 99, 235, 0.45), rgba(14, 165, 233, 0.38)),
      radial-gradient(circle at 30% 20%, rgba(124, 58, 237, 0.42), transparent 55%),
      #0b1224;
    box-shadow: 0 18px 60px rgba(0, 0, 0, 0.22), 0 0 40px rgba(37, 99, 235, 0.25);
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.15);
    display: grid;
    place-items: center;
    color: #e5e7eb;
    font-weight: 700;
    animation: morph 5.5s ease-in-out infinite alternate;
  }

  .blob-card.b2 .blob-img {
    animation-delay: 1.4s;
    background: linear-gradient(135deg, rgba(16, 185, 129, 0.46), rgba(14, 165, 233, 0.32)),
      radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.3), transparent 55%),
      #0b1224;
  }

  .blob-card.b3 .blob-img {
    animation-delay: 2.6s;
    background: linear-gradient(135deg, rgba(236, 72, 153, 0.46), rgba(124, 58, 237, 0.32)),
      radial-gradient(circle at 20% 60%, rgba(14, 165, 233, 0.3), transparent 55%),
      #0b1224;
  }

  /* Foto do fundador 1 */
  .blob-card.b1 .blob-img {
    background:
      linear-gradient(135deg, rgba(37, 99, 235, 0.55), rgba(14, 165, 233, 0.35)),
      radial-gradient(circle at 30% 20%, rgba(124, 58, 237, 0.4), transparent 55%),
      url('/images/founder1.jpg');
    background-size: cover;
    background-position: center;
    color: transparent;
  }

  .blob-caption {
    font-size: 0.95rem;
    color: var(--color-text-secondary);
  }

  @keyframes morph {
    0% {
      border-radius: 46% 54% 52% 48%;
      transform: translate3d(0, 0px, 0) scale(1);
    }
    50% {
      border-radius: 60% 40% 46% 54%;
      transform: translate3d(-8px, -16px, 0) scale(1.06);
    }
    100% {
      border-radius: 68% 32% 60% 40%;
      transform: translate3d(8px, 14px, 0) scale(0.96);
    }
  }

  .card h3 {
    margin-top: 0;
  }

.valores {
  display: grid;
  gap: 12px;
  margin-top: clamp(12px, 2vw, 20px);
}

.valores-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: clamp(10px, 2vw, 14px);
  margin-top: 8px;
}

.valor-card {
  padding: 18px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.16);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 14px 34px rgba(0, 0, 0, 0.14), 0 0 28px rgba(37, 99, 235, 0.12);
  display: grid;
  gap: 8px;
  align-content: start;
  text-align: center;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(10px);
  animation: fadeUp 0.8s ease forwards;
}

  .valor-card:nth-child(1) { animation-delay: 0.05s; }
  .valor-card:nth-child(2) { animation-delay: 0.12s; }
  .valor-card:nth-child(3) { animation-delay: 0.18s; }
  .valor-card:nth-child(4) { animation-delay: 0.24s; }
  .valor-card:nth-child(5) { animation-delay: 0.3s; }
  .valor-card:nth-child(6) { animation-delay: 0.36s; }
  .valor-card:nth-child(7) { animation-delay: 0.42s; }

  .valor-card::before {
    content: '';
    position: absolute;
    inset: -45%;
    background: radial-gradient(circle, rgba(0, 102, 255, 0.16), transparent 50%);
    filter: blur(32px);
    opacity: 0.8;
  }

  .valor-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 38px rgba(0, 0, 0, 0.22), 0 0 30px rgba(124, 58, 237, 0.16);
  }

  .valor-card h4 {
    margin: 0;
    color: #0f172a;
    font-weight: 800;
    letter-spacing: 0.01em;
    font-size: 1.05rem;
    animation: fadeUp 0.7s ease forwards;
    opacity: 0;
  }

  .valor-card p {
    margin: 0;
    color: rgba(15, 23, 42, 0.9);
    font-size: 1rem;
  }

.destaque-valor {
  border: 1px solid rgba(0, 102, 255, 0.28);
  box-shadow: 0 18px 36px rgba(0, 102, 255, 0.18), 0 0 32px rgba(124, 58, 237, 0.16);
  position: relative;
}

.destaque-valor::after {
  content: '';
  position: absolute;
  inset: -20%;
  background: radial-gradient(circle, rgba(0, 102, 255, 0.12), transparent 55%);
  filter: blur(24px);
  opacity: 0.8;
  pointer-events: none;
}

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(12px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 900px) {
    .valores-grid {
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    }
  }

  /* Missão e visão cards */
  .missao-visao {
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }

  .mv-card {
    background: rgba(255, 255, 255, 0.12);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    padding: 18px;
    box-shadow: 0 14px 34px rgba(0, 0, 0, 0.18), 0 0 28px rgba(124, 58, 237, 0.16);
    color: #0f172a;
    backdrop-filter: blur(6px);
  }

  .mv-card h3 {
    color: #0f172a;
    font-size: 1.4rem;
  }

  .mv-card p {
    color: rgba(15, 23, 42, 0.9);
    font-size: 1rem;
  }
</style>

<section class="section">
  <div class="container">
    <p class="eyebrow">Quem Somos</p>
    <h1 class="section-title">Construindo a plataforma digital da indústria.</h1>
    <p class="section-subtitle">
      A Fartech é uma startup de tecnologia focada em confiabilidade e automação. Unimos engenharia pesada, software e dados para que operações críticas funcionem como um produto digital — previsíveis, escaláveis e seguras.
    </p>
    <div class="grid-12" style="align-items:start;">
      <div class="card" style="grid-column: span 7;">
        <p>
          Nossos squads são formados por especialistas em software, dados e confiabilidade. Trabalhamos lado a lado com metalúrgicas, automotivas, químicas e scale-ups industriais para mapear jornadas, integrar sistemas e lançar novos fluxos digitais em semanas.
        </p>
        <p>
          Operamos como parceiros de produto: discovery contínuo, roadmap vivo e indicadores compartilhados. Cada sprint precisa gerar insight acionável, redução de falhas e aumento de disponibilidade.
        </p>
      </div>
      <div class="card" style="grid-column: span 5;">
        <h3>Missão</h3>
        <p>Oferecer soluções digitais que elevem a performance industrial e mantenham operações sempre online.</p>
        <h3>Visão</h3>
        <p>Ser a plataforma número 1 em confiabilidade industrial data-driven na América Latina.</p>
        <h3>Valores</h3>
        <p>Ética • Precisão • Segurança • Compromisso • Inovação</p>
      </div>
    </div>
  </div>
</section>
