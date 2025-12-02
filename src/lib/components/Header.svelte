<script lang="ts">
  export let transparent = false;
  let menuOpen = false;

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Quem Somos', href: '/quem-somos' },
    { label: 'Serviços', href: '/servicos' },
    { label: 'Cases', href: '/cases' },
    { label: 'Clientes', href: '/clientes' },
    { label: 'Contato', href: '/contato' }
  ];

  function toggleMenu() {
    menuOpen = !menuOpen;
  }

  function closeMenu() {
    menuOpen = false;
  }
</script>

<header class={`site-header ${transparent ? 'is-transparent' : ''}`}>
  <div class="container header-inner">
	<a class="logo" href="/" aria-label="Fartech - Página inicial">
		<img src="/images/logo.png" alt="Fartech Logo" />
    <span class="logo-text">FARTECH</span>
	</a>
    
    <!-- Menu Desktop -->
    <nav class="nav-desktop" aria-label="Navegação principal">
      {#each links as link}
        <a href={link.href}>{link.label}</a>
      {/each}
    </nav>

    <!-- Botão Hambúrguer Mobile -->
    <button 
      class="menu-toggle" 
      on:click={toggleMenu}
      aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
      aria-expanded={menuOpen}
    >
      <span class="hamburger" class:open={menuOpen}></span>
    </button>

    <a
      class="btn btn-primary cta-desktop"
      href="mailto:contato@fartech.app.br"
      aria-label="Fale conosco por e-mail"
    >
      Fale Conosco
    </a>
  </div>

  <!-- Menu Mobile -->
  {#if menuOpen}
    <nav class="nav-mobile" aria-label="Navegação mobile">
      {#each links as link}
        <a href={link.href} on:click={closeMenu}>{link.label}</a>
      {/each}
      <a 
        class="btn btn-primary mobile-cta" 
        href="mailto:contato@fartech.app.br"
        on:click={closeMenu}
      >
        Fale Conosco
      </a>
    </nav>
  {/if}
</header>

<style>
  .site-header {
    position: sticky;
    top: 0;
    z-index: 50;
    backdrop-filter: blur(12px);
    box-shadow: var(--shadow-sm);
  }

  .site-header::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.95);
    z-index: -1;
    border-bottom: 1px solid var(--color-line);
  }

  .site-header.is-transparent::after {
    background: rgba(255, 255, 255, 0.92);
  }

  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-block: 18px;
    gap: 24px;
  }

  .nav-desktop {
    display: flex;
    gap: 4px;
    font-weight: 500;
    color: var(--color-text-primary);
    font-size: clamp(19px, 2.4vw, 22px);
    letter-spacing: -0.01em;
  }

  .nav-desktop a {
    padding: 10px 14px;
    border-radius: 8px;
    transition: var(--transition);
    border: 1px solid transparent;
  }

  .nav-desktop a:hover {
    color: var(--color-blue);
    background: var(--color-blue-light);
    border-color: var(--color-blue);
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    flex-shrink: 0;
    background: transparent;
    mix-blend-mode: multiply;
    gap: 12px;
  }

  .logo img {
    height: 100%;
    width: auto;
    object-fit: contain;
  }

  .logo-text {
    font-family: var(--font-display, 'Inter'), sans-serif;
    font-weight: 800;
    font-size: clamp(27px, 3.2vw, 35px);
    letter-spacing: -0.01em;
    color: #0f172a;
    line-height: 1;
  }

  /* Menu Hambúrguer */
  .menu-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    z-index: 60;
  }

  .hamburger {
    display: block;
    width: 24px;
    height: 2px;
    background: var(--color-primary);
    position: relative;
    transition: all 0.3s ease;
  }

  .hamburger::before,
  .hamburger::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 2px;
    background: var(--color-primary);
    transition: all 0.3s ease;
  }

  .hamburger::before {
    top: -7px;
  }

  .hamburger::after {
    top: 7px;
  }

  .hamburger.open {
    background: transparent;
  }

  .hamburger.open::before {
    top: 0;
    transform: rotate(45deg);
  }

  .hamburger.open::after {
    top: 0;
    transform: rotate(-45deg);
  }

  /* Menu Mobile */
  .nav-mobile {
    display: none;
    flex-direction: column;
    padding: 16px;
    background: rgba(255, 255, 255, 0.98);
    border-top: 1px solid var(--color-line);
    animation: slideDown 0.3s ease;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .nav-mobile a {
    padding: 14px 16px;
    font-size: 22px;
    font-weight: 500;
    color: var(--color-text-primary);
    border-radius: 8px;
    transition: var(--transition);
  }

  .nav-mobile a:hover {
    background: var(--color-blue-light);
    color: var(--color-blue);
  }

  .mobile-cta {
    margin-top: 12px;
    text-align: center;
    justify-content: center;
  }

  @media (max-width: 900px) {
    .nav-desktop {
      display: none;
    }

    .cta-desktop {
      display: none;
    }

    .menu-toggle {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .nav-mobile {
      display: flex;
    }

    .header-inner {
      gap: 20px;
    }
  }

  @media (max-width: 640px) {
    .site-header::after {
      background: rgba(255, 255, 255, 0.96);
    }

    .header-inner {
      padding-block: 12px;
      gap: 14px;
    }

    .logo {
      height: 60px;
      gap: 8px;
    }

    .logo-text {
      font-size: 24px;
    }

    .nav-mobile a {
      padding: 12px 14px;
      font-size: 20px;
    }
  }
</style>
