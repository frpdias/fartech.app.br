<script>
  import Header from '$components/Header.svelte';
  import Footer from '$components/Footer.svelte';
  import Particles from '$components/Particles.svelte';
  import '$styles/global.css';
</script>

<svelte:head>
  <title>fartech.app.br</title>
  <meta
    name="description"
    content="Fartech desenvolve SaaS sob medida, automações com n8n, chatbots inteligentes e integrações via APIs e Webhooks. Conectamos negócios ao futuro."
  />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/favicon.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Fartech - SaaS, automação e integrações" />
  <meta
    property="og:description"
    content="SaaS sob medida, automações, chatbots e integrações via APIs. Da educação ao corporativo, conectamos negócios ao futuro."
  />
  <meta property="og:image" content="/images/logo.png" />
  <meta property="og:url" content="https://fartech.app.br/" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Fartech - SaaS, automação e integrações" />
  <meta
    name="twitter:description"
    content="SaaS sob medida, automações, chatbots e integrações via APIs. Conectamos negócios ao futuro."
  />
  <meta name="twitter:image" content="/images/logo.png" />
</svelte:head>

<div class="app-shell">
  <!-- Skip to content link for accessibility -->
  <a href="#main-content" class="skip-to-content">Pular para o conteúdo principal</a>
  
  <Particles />
  <div class="app-content">
    <Header transparent />
    <main id="main-content" class="page-shell">
      <slot />
    </main>
    <Footer />
  </div>
</div>

<style>
  .skip-to-content {
    position: absolute;
    left: -9999px;
    z-index: 999;
    padding: 12px 24px;
    background: var(--color-primary);
    color: white;
    text-decoration: none;
    border-radius: 4px;
    font-weight: 600;
  }
  
  .skip-to-content:focus {
    left: 50%;
    top: 20px;
    transform: translateX(-50%);
  }
  
  .app-shell {
    position: relative;
    background: transparent;
  }

  .app-content {
    position: relative;
    z-index: 1;
  }
</style>
