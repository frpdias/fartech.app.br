<script>
  import Header from '$components/Header.svelte';
  import Footer from '$components/Footer.svelte';
  import Particles from '$components/Particles.svelte';
  import '$styles/global.css';
</script>

<svelte:head>
  <title>Fartech Platform OS | Infraestrutura digital para operações críticas</title>
  <meta
    name="description"
    content="Fartech Platform OS conecta IoT, automação e dados corporativos com observabilidade total, segurança e entregas rápidas para operações críticas."
  />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/favicon.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Fartech Platform OS | Infraestrutura digital" />
  <meta
    property="og:description"
    content="Plataforma que integra automação, IA e dashboards em tempo real para manter operações críticas sempre online."
  />
  <meta property="og:image" content="/images/hero-factory.jpg" />
  <meta property="og:url" content="https://fartech.com" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Fartech Platform OS | Infraestrutura digital" />
  <meta
    name="twitter:description"
    content="Automação, IA e observabilidade total para operações críticas sempre online."
  />
  <meta name="twitter:image" content="/images/hero-factory.jpg" />
</svelte:head>

<div class="app-shell">
  <Particles />
  <div class="app-content">
    <Header transparent />
    <main class="page-shell">
      <slot />
    </main>
    <Footer />
  </div>
</div>

<style>
  .app-shell {
    position: relative;
    background: transparent;
  }

  .app-content {
    position: relative;
    z-index: 1;
  }
</style>
