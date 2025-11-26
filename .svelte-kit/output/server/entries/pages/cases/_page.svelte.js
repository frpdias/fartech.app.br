import { w as ensure_array_like, F as attr_style } from "../../../chunks/index.js";
import { e as escape_html } from "../../../chunks/escaping.js";
import { a as attr } from "../../../chunks/attributes.js";
function _page($$renderer) {
  const cases = [
    {
      title: "Siderúrgica Atlas",
      summary: "Squad Fartech conectou sensores, estoque e analytics e reduziu 62% das falhas em rolamentos principais.",
      results: [
        "+18 meses de vida útil",
        "Monitoramento em tempo real",
        "ROI em 9 meses"
      ]
    },
    {
      title: "Automotiva Vector",
      summary: "Automação e SCADA integrados via Platform OS levaram a precisão de linha a 98%.",
      results: ["Integração MES", "Alertas instantâneos", "Capacidade +12%"]
    },
    {
      title: "Química Solaris",
      summary: "Modelos térmicos e inspeções digitais reduziram hotspots em 37% e estabilizaram a produção.",
      results: ["Sensores IoT", "Plano preditivo", "Compliance ambiental"]
    }
  ];
  const segmentos = [
    {
      titulo: "Squad especializado",
      texto: "Discovery, engenharia e CX em uma só frente.",
      cor: "#243b53"
    },
    {
      titulo: "Tecnologia & inovação",
      texto: "Automação, IA e eficiência operacional contínua.",
      cor: "#2f4a67"
    },
    {
      titulo: "Segmentação inteligente",
      texto: "Propensão guiada por dados e comportamento.",
      cor: "#395a7d"
    },
    {
      titulo: "Abordagem multicanal",
      texto: "Voz, chat, e-mail e redes sociais integrados.",
      cor: "#436b92"
    },
    {
      titulo: "Qualidade & experiência",
      texto: "SLAs, NPS e resposta rápida ao cliente.",
      cor: "#507aa3"
    },
    {
      titulo: "Pós-venda ativa",
      texto: "Sucesso do cliente e fidelização assistida.",
      cor: "#5d89b3"
    },
    {
      titulo: "Dados & insights",
      texto: "Dashboards vivo e diagnósticos preditivos.",
      cor: "#6a96c1"
    },
    {
      titulo: "Planejamento",
      texto: "Roadmap, governança e operação assistida.",
      cor: "#789fcb"
    }
  ];
  const cx = 300;
  const cy = 300;
  const outerR = 225;
  const innerR = 150;
  const toRad = (deg) => deg * Math.PI / 180;
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
  $$renderer.push(`<section class="section"><div class="container"><p class="eyebrow">Cases</p> <h1 class="section-title">Estudos reais e KPIs comprovados.</h1> <div class="cases-grid"><!--[-->`);
  const each_array = ensure_array_like(cases);
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let caseItem = each_array[$$index_1];
    $$renderer.push(`<article class="card"><h3>${escape_html(caseItem.title)}</h3> <p>${escape_html(caseItem.summary)}</p> <ul><!--[-->`);
    const each_array_1 = ensure_array_like(caseItem.results);
    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
      let result = each_array_1[$$index];
      $$renderer.push(`<li>${escape_html(result)}</li>`);
    }
    $$renderer.push(`<!--]--></ul> <a class="btn btn-secondary" href="/contato">Quero replicar</a></article>`);
  }
  $$renderer.push(`<!--]--></div></div></section> <section class="section"><div class="container"><div class="infografico svelte-1dadcqa"><div class="info-col left svelte-1dadcqa"><!--[-->`);
  const each_array_2 = ensure_array_like(segmentos.slice(0, 4));
  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
    let seg = each_array_2[$$index_2];
    $$renderer.push(`<div class="info-card left svelte-1dadcqa"${attr_style(`--seg-color:${seg.cor}`)}><span class="dot svelte-1dadcqa"${attr_style(`background:${seg.cor}`)}></span> <div><strong class="svelte-1dadcqa">${escape_html(seg.titulo)}</strong> <p class="svelte-1dadcqa">${escape_html(seg.texto)}</p></div></div>`);
  }
  $$renderer.push(`<!--]--></div> <div class="wheel svelte-1dadcqa"><svg viewBox="0 0 600 600" role="img" aria-label="Jornada Fartech" class="svelte-1dadcqa"><!--[-->`);
  const each_array_3 = ensure_array_like(segmentos);
  for (let i = 0, $$length = each_array_3.length; i < $$length; i++) {
    let seg = each_array_3[i];
    $$renderer.push(`<!---->`);
    {
      {
        $$renderer.push("<!--[-->");
        const start = -90 + i * (360 / segmentos.length);
        const end = -90 + (i + 1) * (360 / segmentos.length);
        $$renderer.push(`<path${attr("d", buildPath(start, end))}${attr("fill", seg.cor)} opacity="0.9"></path><path${attr("d", buildPath(start, end))} fill="none" stroke="rgba(0,0,0,0.1)" stroke-width="1"></path>`);
      }
      $$renderer.push(`<!--]-->`);
    }
    $$renderer.push(`<!---->`);
  }
  $$renderer.push(`<!--]--><defs><clipPath id="logoClip"><circle${attr("cx", cx)}${attr("cy", cy)} r="110"></circle></clipPath><linearGradient id="ringGlow" x1="0%" x2="100%" y1="0%" y2="100%"><stop offset="0%" stop-color="rgba(59,130,246,0.18)"></stop><stop offset="50%" stop-color="rgba(16,185,129,0.14)"></stop><stop offset="100%" stop-color="rgba(124,58,237,0.2)"></stop></linearGradient></defs><circle${attr("cx", cx)}${attr("cy", cy)} r="128" fill="url(#ringGlow)" opacity="0.85"></circle><circle${attr("cx", cx)}${attr("cy", cy)} r="116" fill="#0f172a" opacity="0.96"></circle><image href="/images/logo.png"${attr("x", cx - 110)}${attr("y", cy - 110)} width="220" height="220" clip-path="url(#logoClip)" preserveAspectRatio="xMidYMid meet"></image></svg></div> <div class="info-col right svelte-1dadcqa"><!--[-->`);
  const each_array_4 = ensure_array_like(segmentos.slice(4));
  for (let $$index_4 = 0, $$length = each_array_4.length; $$index_4 < $$length; $$index_4++) {
    let seg = each_array_4[$$index_4];
    $$renderer.push(`<div class="info-card right svelte-1dadcqa"${attr_style(`--seg-color:${seg.cor}`)}><span class="dot svelte-1dadcqa"${attr_style(`background:${seg.cor}`)}></span> <div><strong class="svelte-1dadcqa">${escape_html(seg.titulo)}</strong> <p class="svelte-1dadcqa">${escape_html(seg.texto)}</p></div></div>`);
  }
  $$renderer.push(`<!--]--></div></div></div></section>`);
}
export {
  _page as default
};
