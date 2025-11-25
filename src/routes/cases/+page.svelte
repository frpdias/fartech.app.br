<script>
  const cases = [
    {
      title: 'Siderúrgica Atlas',
      summary: 'Squad Fartech conectou sensores, estoque e analytics e reduziu 62% das falhas em rolamentos principais.',
      results: ['+18 meses de vida útil', 'Monitoramento em tempo real', 'ROI em 9 meses']
    },
    {
      title: 'Automotiva Vector',
      summary: 'Automação e SCADA integrados via Platform OS levaram a precisão de linha a 98%.',
      results: ['Integração MES', 'Alertas instantâneos', 'Capacidade +12%']
    },
    {
      title: 'Química Solaris',
      summary: 'Modelos térmicos e inspeções digitais reduziram hotspots em 37% e estabilizaram a produção.',
      results: ['Sensores IoT', 'Plano preditivo', 'Compliance ambiental']
    }
  ];

  const segmentos = [
    { titulo: 'Squad especializado', texto: 'Discovery, engenharia e CX em uma só frente.', cor: '#243b53' },
    { titulo: 'Tecnologia & inovação', texto: 'Automação, IA e eficiência operacional contínua.', cor: '#2f4a67' },
    { titulo: 'Segmentação inteligente', texto: 'Propensão guiada por dados e comportamento.', cor: '#395a7d' },
    { titulo: 'Abordagem multicanal', texto: 'Voz, chat, e-mail e redes sociais integrados.', cor: '#436b92' },
    { titulo: 'Qualidade & experiência', texto: 'SLAs, NPS e resposta rápida ao cliente.', cor: '#507aa3' },
    { titulo: 'Pós-venda ativa', texto: 'Sucesso do cliente e fidelização assistida.', cor: '#5d89b3' },
    { titulo: 'Dados & insights', texto: 'Dashboards vivo e diagnósticos preditivos.', cor: '#6a96c1' },
    { titulo: 'Planejamento', texto: 'Roadmap, governança e operação assistida.', cor: '#789fcb' }
  ];

  const cx = 300;
  const cy = 300;
  const outerR = 225;
  const innerR = 150;
  const labelR = 250;

  const toRad = (deg) => (deg * Math.PI) / 180;

  const polar = (r, angleDeg) => ({
    x: cx + r * Math.cos(toRad(angleDeg)),
    y: cy + r * Math.sin(toRad(angleDeg))
  });

  const buildPath = (startDeg, endDeg) => {
    const p1 = polar(outerR, startDeg);
    const p2 = polar(outerR, endDeg);
    const p3 = polar(innerR, endDeg);
    const p4 = polar(innerR, startDeg);
    const largeArc = endDeg - startDeg <= 180 ? 0 : 1;
    return `
      M ${p1.x} ${p1.y}
      A ${outerR} ${outerR} 0 ${largeArc} 1 ${p2.x} ${p2.y}
      L ${p3.x} ${p3.y}
      A ${innerR} ${innerR} 0 ${largeArc} 0 ${p4.x} ${p4.y}
      Z
    `;
  };
</script>

<section class="section">
  <div class="container">
    <p class="eyebrow">Cases</p>
    <h1 class="section-title">Estudos reais e KPIs comprovados.</h1>
    <div class="cases-grid">
{#each cases as caseItem}
        <article class="card">
          <h3>{caseItem.title}</h3>
          <p>{caseItem.summary}</p>
          <ul>
            {#each caseItem.results as result}
              <li>{result}</li>
            {/each}
          </ul>
          <a class="btn btn-secondary" href="/contato">Quero replicar</a>
        </article>
      {/each}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="infografico">
      <div class="info-col left">
        {#each segmentos.slice(0, 4) as seg}
          <div class="info-card left" style={`--seg-color:${seg.cor}`}>
            <span class="dot" style={`background:${seg.cor}`}></span>
            <div>
              <strong>{seg.titulo}</strong>
              <p>{seg.texto}</p>
            </div>
          </div>
        {/each}
      </div>

      <div class="wheel">
        <svg viewBox="0 0 600 600" role="img" aria-label="Jornada Fartech">
          {#each segmentos as seg, i}
            {#key i}
              {#if true}
                {@const start = -90 + i * (360 / segmentos.length)}
                {@const end = -90 + (i + 1) * (360 / segmentos.length)}
                <path d={buildPath(start, end)} fill={seg.cor} opacity="0.9"></path>
                <path
                  d={buildPath(start, end)}
                  fill="none"
                  stroke="rgba(0,0,0,0.1)"
                  stroke-width="1"
                />
              {/if}
            {/key}
          {/each}

          <defs>
            <clipPath id="logoClip">
              <circle cx={cx} cy={cy} r="110" />
            </clipPath>
            <linearGradient id="ringGlow" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stop-color="rgba(59,130,246,0.18)" />
              <stop offset="50%" stop-color="rgba(16,185,129,0.14)" />
              <stop offset="100%" stop-color="rgba(124,58,237,0.2)" />
            </linearGradient>
          </defs>

          <circle cx={cx} cy={cy} r="128" fill="url(#ringGlow)" opacity="0.85" />
          <circle cx={cx} cy={cy} r="116" fill="#0f172a" opacity="0.96" />
          <image
            href="/images/logo.png"
            x={cx - 110}
            y={cy - 110}
            width="220"
            height="220"
            clip-path="url(#logoClip)"
            preserveAspectRatio="xMidYMid meet"
          />
        </svg>
      </div>

      <div class="info-col right">
        {#each segmentos.slice(4) as seg}
          <div class="info-card right" style={`--seg-color:${seg.cor}`}>
            <span class="dot" style={`background:${seg.cor}`}></span>
            <div>
              <strong>{seg.titulo}</strong>
              <p>{seg.texto}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .infografico {
    display: grid;
    grid-template-columns: minmax(260px, 1fr) minmax(420px, 720px) minmax(260px, 1fr);
    gap: clamp(12px, 2vw, 24px);
    align-items: center;
    justify-items: center;
    background: radial-gradient(circle at 25% 30%, rgba(59, 130, 246, 0.08), transparent 36%),
      radial-gradient(circle at 70% 60%, rgba(16, 185, 129, 0.07), transparent 42%),
      linear-gradient(135deg, #eef2ff 0%, #f8fafc 60%, #eef2ff 100%);
    border-radius: 24px;
    padding: clamp(22px, 4vw, 42px);
    box-shadow: var(--shadow-sm);
    border: 1px solid rgba(0, 0, 0, 0.05);
  }

  .wheel {
    position: relative;
    width: min(640px, 100%);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .infografico svg {
    width: 100%;
    max-width: 100%;
  }

  .infografico svg text {
    paint-order: stroke fill;
  }

  .info-col {
    display: grid;
    gap: 12px;
    width: 100%;
  }

  .info-card {
    position: relative;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 10px;
    align-items: start;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 14px;
    padding: 12px;
    box-shadow: var(--shadow-xs);
  }

  .info-card::before {
    display: none;
  }

  .info-card strong {
    color: #0f172a;
  }

  .info-card p {
    margin: 4px 0 0;
    color: #475569;
    font-size: 0.9rem;
    line-height: 1.4;
  }

  .dot {
    width: 12px;
    height: 12px;
    border-radius: 999px;
    margin-top: 4px;
  }

  @media (max-width: 1023px) {
    .infografico {
      grid-template-columns: 1fr;
    }

    .info-col {
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    }

    .info-card::before {
      display: none;
    }
  }
</style>
