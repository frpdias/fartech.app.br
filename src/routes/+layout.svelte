<script>
  import Header from '$components/Header.svelte';
  import Footer from '$components/Footer.svelte';
  import Particles from '$components/Particles.svelte';
  import '$styles/global.css';
</script>

<svelte:head>
  <title>Fartech — TalentForge e TalentJUD</title>
  <meta
    name="description"
    content="Fartech cria produtos SaaS para RH e Jurídico. TalentForge para recrutamento inteligente e gestão COPC. TalentJUD para escritórios de advocacia com DataJud e IA."
  />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Fartech — TalentForge e TalentJUD" />
  <meta
    property="og:description"
    content="Produtos SaaS para RH e Jurídico. TalentForge: recrutamento, DISC e COPC. TalentJUD: gestão de casos, DataJud CNJ e IA jurídica."
  />
  <meta property="og:image" content="https://fartech.app.br/images/og-image.jpg" />
  <meta property="og:url" content="https://fartech.app.br/" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Fartech — TalentForge e TalentJUD" />
  <meta
    name="twitter:description"
    content="Produtos SaaS para RH e Jurídico. TalentForge: recrutamento, DISC e COPC. TalentJUD: gestão de casos, DataJud CNJ e IA jurídica."
  />
  <meta name="twitter:image" content="https://fartech.app.br/images/og-image.jpg" />
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
