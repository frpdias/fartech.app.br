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
        <div class="blob-img" aria-label="Fernando Dias - CEO">
        </div>
        <p class="blob-caption">
          <strong>Fernando Dias<br />CEO – Chief Executive Officer</strong><br />
          Lidera a Fartech com visão estratégica, impulsionando crescimento, inovação e direção do negócio.
        </p>
      </div>
      <div class="blob-card b2">
        <div class="blob-img" aria-label="Ricardo - CTO">
        </div>
        <p class="blob-caption">
          <strong>Ricardo<br />CTO – Chief Technology Officer</strong><br />
          Responsável por toda a tecnologia da Fartech, garantindo inovação, segurança e alta performance das soluções.
        </p>
      </div>
      <div class="blob-card b3">
        <div class="blob-img" aria-label="Alan Merlini - CFO">
        </div>
        <p class="blob-caption">
          <strong>Alan Merlini<br />CFO – Chief Financial Officer</strong><br />
          Cuida da saúde financeira da Fartech, planejando investimentos e garantindo sustentabilidade e resultados.
        </p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="content-with-sidebars">
      <!-- Sidebar Esquerda - 4 valores -->
      <aside class="sidebar sidebar-left">
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
      </aside>

      <!-- Conteúdo Central - Missão e Visão -->
      <div class="center-content">
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
      </div>

      <!-- Sidebar Direita - 4 valores (incluindo 3 restantes + destaque) -->
      <aside class="sidebar sidebar-right">
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
        <div class="valor-card">
          <h4>COLABORAÇÃO</h4>
          <p>Juntos somos mais fortes. Trabalho em equipe acima de tudo.</p>
        </div>
      </aside>
    </div>
  </div>
</section>

<style>
  .blob-hero {
    padding-bottom: 0;
    position: relative;
    overflow: hidden;
  }

  .blob-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.4fr) minmax(280px, 500px);
    gap: clamp(24px, 4vw, 48px);
    align-items: center;
  }

  @media (max-width: 900px) {
    .blob-grid {
      grid-template-columns: 1fr;
    }
  }

  .blob-text {
    max-width: 100%;
  }

  .blob-stack {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: clamp(12px, 2vw, 24px);
    justify-items: center;
    width: 100%;
  }

  .blob-card {
    width: 100%;
    max-width: 240px;
    display: grid;
    gap: 8px;
    text-align: center;
  }

  @media (max-width: 900px) {
    .blob-stack {
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
    }
    .blob-card {
      max-width: 200px;
    }
  }

  @media (max-width: 600px) {
    .blob-stack {
      grid-template-columns: 1fr;
    }
    .blob-card {
      max-width: 300px;
    }
  }

  .blob-img {
    aspect-ratio: 1 / 1;
    width: 140px;
    height: 140px;
    margin: 0 auto;
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

  /* Foto do CEO (Fernando Dias) - primeiro blob */
  .blob-card.b1 .blob-img {
    background:
      linear-gradient(135deg, rgba(37, 99, 235, 0.55), rgba(14, 165, 233, 0.38)),
      radial-gradient(circle at 30% 20%, rgba(124, 58, 237, 0.42), transparent 55%),
      url('/images/fernando-dias.jpg');
    background-size: cover;
    background-position: center;
    color: transparent;
  }

  /* Foto do CFO (Alan) - terceiro blob */
  .blob-card.b3 .blob-img {
    background:
      linear-gradient(135deg, rgba(236, 72, 153, 0.55), rgba(124, 58, 237, 0.35)),
      radial-gradient(circle at 20% 60%, rgba(14, 165, 233, 0.4), transparent 55%),
      url('/images/alan.jpg');
    background-size: cover;
    background-position: center;
    color: transparent;
  }

  /* Foto do CTO (Ricardo) - segundo blob */
  .blob-card.b2 .blob-img {
    background:
      linear-gradient(135deg, rgba(16, 185, 129, 0.55), rgba(14, 165, 233, 0.35)),
      radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.4), transparent 55%),
      url('data:image/jpeg;base64,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');
    background-size: cover;
    background-position: center;
    color: transparent;
  }

  .blob-caption {
    font-size: 0.85rem;
    line-height: 1.4;
    color: var(--color-text-secondary);
  }

  @keyframes morph {
    0% {
      border-radius: 73% 27% 40% 60% / 63% 44% 56% 37%;
      transform: translate3d(0, 0px, 0) scale(1);
    }
    20% {
      border-radius: 35% 65% 72% 28% / 48% 68% 32% 52%;
      transform: translate3d(-1px, -1.5px, 0) scale(1.005);
    }
    40% {
      border-radius: 68% 32% 51% 49% / 71% 29% 71% 29%;
      transform: translate3d(1px, 1.5px, 0) scale(0.995);
    }
    60% {
      border-radius: 28% 72% 63% 37% / 54% 71% 29% 46%;
      transform: translate3d(-1px, 1.5px, 0) scale(1.005);
    }
    80% {
      border-radius: 61% 39% 28% 72% / 38% 58% 42% 62%;
      transform: translate3d(1px, -1px, 0) scale(0.995);
    }
    100% {
      border-radius: 73% 27% 40% 60% / 63% 44% 56% 37%;
      transform: translate3d(0, 0px, 0) scale(1);
    }
  }

/* Layout com sidebars */
.content-with-sidebars {
  display: grid;
  grid-template-columns: minmax(180px, 1fr) minmax(320px, 2fr) minmax(180px, 1fr);
  gap: 24px;
  align-items: stretch;
  max-width: 100%;
}

.sidebar {
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  gap: 12px;
}

.center-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

@media (max-width: 1024px) {
  .content-with-sidebars {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
  }
  .center-content {
    grid-column: 1 / -1;
    order: -1;
  }
}

@media (max-width: 640px) {
  .content-with-sidebars {
    grid-template-columns: 1fr;
  }
  .sidebar {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }
}

.valor-card {
  padding: 14px;
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
    font-weight: 800;
    letter-spacing: 0.01em;
    font-size: 1.1rem;
    animation: fadeUp 0.7s ease forwards, shine 1.5s linear infinite;
    opacity: 0;
    background: linear-gradient(
      90deg,
      #1e293b 0%,
      #1e293b 30%,
      #3b82f6 45%,
      #60a5fa 50%,
      #3b82f6 55%,
      #1e293b 70%,
      #1e293b 100%
    );
    background-size: 200% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @keyframes shine {
    0% {
      background-position: 200% center;
    }
    100% {
      background-position: -200% center;
    }
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

  /* Missão e visão cards */
  .missao-visao {
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }

  .mv-card {
    background: rgba(255, 255, 255, 0.12);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 14px;
    padding: 14px;
    box-shadow: 0 14px 34px rgba(0, 0, 0, 0.18), 0 0 28px rgba(124, 58, 237, 0.16);
    color: #0f172a;
    backdrop-filter: blur(6px);
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .mv-card h3 {
    color: #0f172a;
    font-size: 1.4rem;
    margin: 0;
  }

  .mv-card p {
    color: rgba(15, 23, 42, 0.9);
    font-size: 1rem;
    margin: 4px 0 0 0;
  }
</style>
