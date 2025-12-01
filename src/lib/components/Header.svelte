<script lang="ts">
  export let transparent = false;

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Quem Somos', href: '/quem-somos' },
    { label: 'Serviços', href: '/servicos' },
    { label: 'Cases', href: '/cases' },
    { label: 'Clientes', href: '/clientes' },
    { label: 'Contato', href: '/contato' }
  ];
</script>

<header class={`site-header ${transparent ? 'is-transparent' : ''}`}>
  <div class="container header-inner">
	<a class="logo" href="/" aria-label="Fartech - Página inicial">
		<img src="/images/logo.png" alt="Fartech Logo" />
    <span class="logo-text">FARTECH</span>
	</a>
    <nav aria-label="Navegação principal">
      {#each links as link}
        <a href={link.href}>{link.label}</a>
      {/each}
    </nav>

    <a
      class="btn btn-primary"
      href="mailto:contato@fartech.app.br"
      aria-label="Fale conosco por e-mail"
    >
      Fale Conosco
    </a>
  </div>
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

  nav {
    display: flex;
    gap: 4px;
    font-weight: 500;
    color: var(--color-text-primary);
    font-size: clamp(14px, 1.8vw, 16px);
    letter-spacing: -0.01em;
  }

  nav a {
    padding: 10px 14px;
    border-radius: 8px;
    transition: var(--transition);
    border: 1px solid transparent;
  }

  nav a:hover {
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
    font-size: clamp(20px, 2.4vw, 26px);
    letter-spacing: -0.01em;
    color: #0f172a;
    line-height: 1;
  }

  @media (max-width: 768px) {
    nav {
      display: none;
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
      height: 72px;
      gap: 8px;
    }

    .btn.btn-primary {
      padding: 12px 16px;
      font-size: 15px;
      border-radius: 10px;
    }

    .logo-text {
      font-size: 19px;
    }
  }
</style>
