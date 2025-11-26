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

  .blob-img span {
    display: none;
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
