import { a as attr } from "../../../chunks/attributes.js";
import { e as escape_html } from "../../../chunks/escaping.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let loading = false;
    $$renderer2.push(`<section class="section"><div class="container"><p class="eyebrow">Contato</p> <h1 class="section-title">Agende um discovery com nossos product engineers.</h1> <p class="section-subtitle">Conte o cenário atual, integrações necessárias e metas de negócio. Respondemos em até 4h úteis.</p> `);
    {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="grid-12"><form class="card" style="grid-column: span 7; display:flex; flex-direction:column; gap:16px;"><label class="svelte-uefrkt"><span>Nome <span class="required svelte-uefrkt">*</span></span> <input type="text" name="name" required placeholder="Seu nome" aria-label="Nome completo" class="svelte-uefrkt"/></label> <label class="svelte-uefrkt"><span>E-mail corporativo <span class="required svelte-uefrkt">*</span></span> <input type="email" name="email" required placeholder="nome@suaempresa.com" aria-label="Email corporativo" class="svelte-uefrkt"/></label> <label class="svelte-uefrkt"><span>Telefone</span> <input type="tel" name="phone" placeholder="(00) 0000-0000" aria-label="Telefone de contato" class="svelte-uefrkt"/></label> <label class="svelte-uefrkt"><span>Empresa</span> <input type="text" name="company" placeholder="Nome da sua empresa" aria-label="Nome da empresa" class="svelte-uefrkt"/></label> <label class="svelte-uefrkt"><span>Mensagem <span class="required svelte-uefrkt">*</span></span> <textarea name="message" rows="4" required placeholder="Conte-nos sobre sua operação" aria-label="Mensagem" class="svelte-uefrkt"></textarea></label> `);
      {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <button class="btn btn-primary svelte-uefrkt" type="submit"${attr("disabled", loading, true)} aria-label="Enviar formulário de contato">${escape_html("Agendar discovery")}</button></form> <div class="card" style="grid-column: span 5;"><h3>Atendimento</h3> <ul><li><strong>WhatsApp:</strong> <a href="https://wa.me/5511999990000">(11) 99999-0000</a></li> <li><strong>Email:</strong> <a href="mailto:contato@fartech.com.br">contato@fartech.com.br</a></li> <li><strong>Endereço:</strong> Av. Industrial, 1000 • São Paulo/SP</li></ul> <p>Disponível 24/7 para emergências.</p></div></div>`);
    }
    $$renderer2.push(`<!--]--></div></section>`);
  });
}
export {
  _page as default
};
