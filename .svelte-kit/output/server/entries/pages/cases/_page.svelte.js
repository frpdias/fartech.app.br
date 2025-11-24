import { w as ensure_array_like } from "../../../chunks/index.js";
import { e as escape_html } from "../../../chunks/context.js";
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
  $$renderer.push(`<!--]--></div></div></section>`);
}
export {
  _page as default
};
