<script lang="ts">
  let submitted = false;
  let loading = false;
  let error = '';

  async function handleSubmit(event: Event) {
    event.preventDefault();
    loading = true;
    error = '';
    
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    
    try {
      // Substitua 'your_formspree_id' pelo seu ID real do Formspree
      const response = await fetch('https://formspree.io/f/your_formspree_id', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        submitted = true;
        form.reset();
      } else {
        error = 'Erro ao enviar mensagem. Tente novamente.';
      }
    } catch (err) {
      error = 'Erro de conexão. Por favor, tente novamente.';
    } finally {
      loading = false;
    }
  }
</script>

<section class="section">
  <div class="container">
    <p class="eyebrow">Contato</p>
    <h1 class="section-title">Agende um discovery com nossos product engineers.</h1>
    <p class="section-subtitle">Conte o cenário atual, integrações necessárias e metas de negócio. Respondemos em até 4h úteis.</p>
    
    {#if submitted}
      <div class="success-message card">
        <h3>✓ Mensagem enviada com sucesso!</h3>
        <p>Entraremos em contato em até 4 horas úteis.</p>
        <button class="btn btn-secondary" on:click={() => submitted = false}>Enviar nova mensagem</button>
      </div>
    {:else}
      <div class="grid-12">
        <form class="card" style="grid-column: span 7; display:flex; flex-direction:column; gap:16px;" on:submit={handleSubmit}>
          <label>
            <span>Nome <span class="required">*</span></span>
            <input type="text" name="name" required placeholder="Seu nome" aria-label="Nome completo" />
          </label>
          <label>
            <span>E-mail corporativo <span class="required">*</span></span>
            <input type="email" name="email" required placeholder="nome@suaempresa.com" aria-label="Email corporativo" />
          </label>
          <label>
            <span>Telefone</span>
            <input type="tel" name="phone" placeholder="(00) 0000-0000" aria-label="Telefone de contato" />
          </label>
          <label>
            <span>Empresa</span>
            <input type="text" name="company" placeholder="Nome da sua empresa" aria-label="Nome da empresa" />
          </label>
          <label>
            <span>Mensagem <span class="required">*</span></span>
            <textarea name="message" rows="4" required placeholder="Conte-nos sobre sua operação" aria-label="Mensagem"></textarea>
          </label>
          
          {#if error}
            <div class="error-message">{error}</div>
          {/if}
          
          <button class="btn btn-primary" type="submit" disabled={loading} aria-label="Enviar formulário de contato">
            {loading ? 'Enviando...' : 'Agendar discovery'}
          </button>
        </form>
        <div class="card" style="grid-column: span 5;">
          <h3>Atendimento</h3>
          <ul>
            <li><strong>WhatsApp:</strong> <a href="https://wa.me/5511999990000">(11) 99999-0000</a></li>
            <li><strong>Email:</strong> <a href="mailto:contato@fartech.com.br">contato@fartech.com.br</a></li>
            <li><strong>Endereço:</strong> Av. Industrial, 1000 • São Paulo/SP</li>
          </ul>
          <p>Disponível 24/7 para emergências.</p>
        </div>
      </div>
    {/if}
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
  
  button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  .success-message {
    text-align: center;
    padding: 48px;
    background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.05));
    border: 2px solid rgba(16, 185, 129, 0.3);
  }
  
  .success-message h3 {
    color: #10b981;
    margin: 0 0 16px 0;
    font-size: 1.5rem;
  }
  
  .success-message p {
    margin: 0 0 24px 0;
  }
  
  .error-message {
    padding: 12px 16px;
    background: rgba(239, 68, 68, 0.1);
    border: 1px solid rgba(239, 68, 68, 0.3);
    border-radius: 8px;
    color: #dc2626;
    font-size: 0.9rem;
  }
</style>
