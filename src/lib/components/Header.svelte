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
    <a class="logo" href="/">
      <span>Fartech</span>
      <small>Startup de Inteligência</small>
    </a>

    <nav>
      {#each links as link}
        <a href={link.href}>{link.label}</a>
      {/each}
    </nav>

    <a class="btn btn-primary" href="/contato">Solicitar Orçamento</a>
  </div>
</header>

<style>
  .site-header {
    position: sticky;
    top: 0;
    z-index: 50;
    backdrop-filter: blur(12px);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  }

  .site-header::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.85);
    z-index: -1;
    border-bottom: 1px solid var(--color-line);
  }

  .site-header.is-transparent::after {
    background: rgba(255, 255, 255, 0.75);
  }

  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-block: 16px;
    gap: 32px;
  }

  nav {
    display: flex;
    gap: 2px;
    font-weight: 500;
    color: var(--color-text);
    font-size: 0.93rem;
    letter-spacing: 0.01em;
  }

  nav a {
    padding: 8px 12px;
    border-radius: 6px;
    transition: var(--transition);
    border: 1px solid transparent;
  }

  nav a:hover {
    color: var(--color-accent);
    background: rgba(9, 105, 218, 0.08);
    border-color: rgba(9, 105, 218, 0.12);
  }

  .logo {
    font-family: var(--font-display);
    display: flex;
    flex-direction: column;
    font-weight: 700;
    letter-spacing: 0.02em;
    font-size: 1.1rem;
    color: var(--color-text);
  }

  .logo span {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    color: transparent;
  }

  .logo small {
    font-size: 0.65rem;
    font-weight: 500;
    color: var(--color-muted);
    margin-top: 2px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    nav {
      display: none;
    }

    .header-inner {
      gap: 16px;
    }
  }
</style>
