import { F as head, x as attr } from "../../../chunks/index.js";
import { e as escape_html } from "../../../chunks/context.js";
function _page($$renderer) {
  let nome = "";
  let email = "";
  let telefone = "";
  let empresa = "";
  let mensagem = "Olá! Vi o site de vocês e quero entender como a Fartech pode ajudar meu negócio com automações e integração de sistemas.";
  head("uefrkt", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>fartech.app.br</title>`);
    });
  });
  $$renderer.push(`<section class="section"><div class="container"><p class="eyebrow">Contato</p> <h1 class="section-title">Agende um discovery com nossos product engineers.</h1> <p class="section-subtitle">Conte o cenário atual, integrações necessárias e metas de negócio. Respondemos em até 4h úteis.</p> <div class="grid-12"><form class="card" style="grid-column: span 7; display:flex; flex-direction:column; gap:16px;"><label class="svelte-uefrkt"><span>Nome <span class="required svelte-uefrkt">*</span></span> <input type="text"${attr("value", nome)} required placeholder="Seu nome" aria-label="Nome completo" class="svelte-uefrkt"/></label> <label class="svelte-uefrkt"><span>E-mail corporativo <span class="required svelte-uefrkt">*</span></span> <input type="email"${attr("value", email)} required placeholder="nome@suaempresa.com" aria-label="Email corporativo" class="svelte-uefrkt"/></label> <label class="svelte-uefrkt"><span>Telefone</span> <input type="tel"${attr("value", telefone)} placeholder="(00) 0000-0000" aria-label="Telefone de contato" class="svelte-uefrkt"/></label> <label class="svelte-uefrkt"><span>Empresa</span> <input type="text"${attr("value", empresa)} placeholder="Nome da sua empresa" aria-label="Nome da empresa" class="svelte-uefrkt"/></label> <label class="svelte-uefrkt"><span>Mensagem <span class="required svelte-uefrkt">*</span></span> <textarea rows="4" required placeholder="Conte-nos sobre sua operação" aria-label="Mensagem" class="svelte-uefrkt">`);
  const $$body = escape_html(mensagem);
  if ($$body) {
    $$renderer.push(`${$$body}`);
  }
  $$renderer.push(`</textarea></label> <button class="btn btn-primary whatsapp-btn svelte-uefrkt" type="submit" aria-label="Abrir WhatsApp para contato"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="svelte-uefrkt"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg> Iniciar WhatsApp</button></form> <div class="card" style="grid-column: span 5;"><h3>Atendimento</h3> <ul><li><strong>WhatsApp:</strong> <a href="https://wa.me/5531999752829">(31) 99975-2829</a></li> <li><strong>Email:</strong> <a href="mailto:contato@fartech.com.br">contato@fartech.com.br</a></li> <li><strong>Endereço:</strong> Av. Industrial, 1000 • São Paulo/SP</li></ul> <p>Disponível 24/7 para emergências.</p></div></div></div></section>`);
}
export {
  _page as default
};
