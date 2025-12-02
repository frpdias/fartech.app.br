<svelte:head>
  <title>fartech.app.br</title>
</svelte:head>

<script lang="ts">
  let nome = '';
  let email = '';
  let telefone = '';
  let empresa = '';
  let mensagem = 'Olá! Vi o site de vocês e quero entender como a Fartech pode ajudar meu negócio com automações e integração de sistemas.';

  function handleSubmit(event: Event) {
    event.preventDefault();
    
    // Número do WhatsApp Business
    const whatsappNumber = '5531999752829';
    
    // Monta a mensagem formatada
    let whatsappMessage = `*Novo contato via site Fartech*\n\n`;
    whatsappMessage += `*Nome:* ${nome}\n`;
    whatsappMessage += `*E-mail corporativo:* ${email}\n`;
    if (telefone) whatsappMessage += `*Telefone:* ${telefone}\n`;
    if (empresa) whatsappMessage += `*Empresa:* ${empresa}\n`;
    whatsappMessage += `\n*Mensagem:*\n${mensagem}`;
    
    // Codifica a mensagem para URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Abre o WhatsApp com a mensagem
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  }
</script>

<section class="section">
  <div class="container">
    <p class="eyebrow">Contato</p>
    <h1 class="section-title">Agende um discovery com nossos product engineers.</h1>
    <p class="section-subtitle">Conte o cenário atual, integrações necessárias e metas de negócio. Respondemos em até 4h úteis.</p>
    
    <div class="grid-12">
      <form class="card" style="grid-column: span 7; display:flex; flex-direction:column; gap:16px;" on:submit={handleSubmit}>
        <label>
          <span>Nome <span class="required">*</span></span>
          <input type="text" bind:value={nome} required placeholder="Seu nome" aria-label="Nome completo" />
        </label>
        <label>
          <span>E-mail corporativo <span class="required">*</span></span>
          <input type="email" bind:value={email} required placeholder="nome@suaempresa.com" aria-label="Email corporativo" />
        </label>
        <label>
          <span>Telefone</span>
          <input type="tel" bind:value={telefone} placeholder="(00) 0000-0000" aria-label="Telefone de contato" />
        </label>
        <label>
          <span>Empresa</span>
          <input type="text" bind:value={empresa} placeholder="Nome da sua empresa" aria-label="Nome da empresa" />
        </label>
        <label>
          <span>Mensagem <span class="required">*</span></span>
          <textarea bind:value={mensagem} rows="4" required placeholder="Conte-nos sobre sua operação" aria-label="Mensagem"></textarea>
        </label>
        
        <button class="btn btn-primary whatsapp-btn" type="submit" aria-label="Abrir WhatsApp para contato">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Iniciar WhatsApp
        </button>
      </form>
      <div class="card" style="grid-column: span 5;">
        <h3>Atendimento</h3>
        <ul>
          <li><strong>WhatsApp:</strong> <a href="https://wa.me/5531999752829">(31) 99975-2829</a></li>
          <li><strong>Email:</strong> <a href="mailto:contato@fartech.com.br">contato@fartech.com.br</a></li>
          <li><strong>Endereço:</strong> Av. Industrial, 1000 • São Paulo/SP</li>
        </ul>
        <p>Disponível 24/7 para emergências.</p>
      </div>
    </div>
  </div>
</section>

<style>
  label {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-weight: 600;
  }
  
  .required {
    color: #ec4899;
  }

  input,
  textarea {
    border-radius: 12px;
    border: 1px solid rgba(12, 18, 52, 0.12);
    padding: 12px 16px;
    background: rgba(255, 255, 255, 0.85);
    color: var(--color-text);
    transition: all 0.2s ease;
  }

  input:focus,
  textarea:focus {
    outline: 2px solid rgba(108, 57, 255, 0.4);
    border-color: #7c3aed;
  }
  
  .whatsapp-btn {
    background: #25D366;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  
  .whatsapp-btn:hover {
    background: #128C7E;
  }
  
  .whatsapp-btn svg {
    flex-shrink: 0;
  }
</style>
