<script lang="ts">
  import BubbleBackground from '$components/BubbleBackground.svelte';

  export let eyebrow: string = 'Fartech Soluções Industriais';
  export let title: string;
  export let subtitle: string;
  export let primaryHref: string;
  export let primaryLabel: string;
  export let secondaryHref: string;
  export let secondaryLabel: string;
  export let meta: { label: string; value: string }[] = [];
  export let showEnemUltra: boolean = false;

  const hasVisual = Boolean($$slots.visual);
</script>

<section class="hero">
  <BubbleBackground />
  <div class="hero-container">
    <div class="hero-grid" class:has-visual={hasVisual}>
      <div class="hero-content">
        <div class="hero-text-wrapper">
        <p class="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href={primaryHref}>{primaryLabel}</a>
          <a class="btn btn-secondary" href={secondaryHref}>{secondaryLabel}</a>
        </div>
        {#if meta.length}
          <div class="hero-meta">
            {#each meta as item}
              <article>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            {/each}
            {#if showEnemUltra}
              <article class="enem-card">
                <img src="/images/enem-ultra.png" alt="ENEM ULTRA" class="enem-preview" loading="lazy" decoding="async" />
              </article>
            {/if}
          </div>
        {/if}
      </div>
    </div>

    {#if hasVisual}
      <div class="hero-visual">
        <slot name="visual" />
      </div>
    {/if}
    </div>
  </div>
</section>

<style>
  .hero-container {
    max-width: min(var(--max-width), 100%);
    width: 100%;
    margin-inline: auto;
    padding-left: clamp(20px, 3.5vw, 48px);
    padding-right: clamp(20px, 3.5vw, 48px);
  }

  .hero-grid {
    display: block;
    width: 100%;
    max-width: 100%;
    overflow: visible;
  }

  .hero-grid.has-visual {
    display: grid;
    grid-template-columns: minmax(0, 1.4fr) minmax(320px, 480px);
    gap: clamp(40px, 6vw, 100px);
    align-items: center;
  }

  .hero-content {
    width: 100%;
    min-width: 0;
    position: relative;
    z-index: 10;
    isolation: isolate;
  }

  .hero-text-wrapper {
    width: 100%;
    min-width: 0;
    position: relative;
    z-index: 10;
  }

  .hero h1 {
    font-family: var(--font-display);
    font-size: clamp(34px, 4.2vw, 60px);
    line-height: 1.08;
    margin: 0 0 18px 0;
    font-weight: 800;
    letter-spacing: -0.03em;
    color: var(--color-text-primary);
    position: relative;
    z-index: 10;
    word-break: keep-all;
    overflow-wrap: normal;
    white-space: normal;
    hyphens: none;
  }

  .hero-visual {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 100%;
    pointer-events: none;
  }

  .hero-meta {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-top: 56px;
    width: 100%;
  }

  .hero-meta article {
    padding: 28px;
    border: 1px solid var(--color-line);
    border-radius: 14px;
    background: var(--color-surface);
    box-shadow: var(--shadow-md);
    transition: all 300ms var(--transition-smooth);
    animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .hero-meta article:hover {
    border-color: var(--color-blue);
    box-shadow: var(--shadow-lg);
    transform: translateY(-4px);
  }

  .hero-meta strong {
    display: block;
    font-size: 1.375rem;
    color: var(--color-primary);
    font-weight: 700;
  }

  .hero-meta span {
    color: var(--color-text-secondary);
    font-size: 0.8125rem;
    margin-top: 4px;
    display: block;
  }

  .enem-card {
    padding: 16px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .enem-preview {
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 8px;
    transition: all 400ms var(--transition-smooth);
  }

  .enem-card:hover .enem-preview {
    transform: scale(1.05);
  }

  @media (max-width: 960px) {
    .hero-grid.has-visual {
      grid-template-columns: 1fr;
      gap: clamp(40px, 6vw, 80px);
    }

    .hero-visual {
      order: -1;
    }

    .hero-meta {
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    }
  }

  @media (max-width: 640px) {
    .hero-grid.has-visual {
      gap: 32px;
    }

    .hero h1 {
      font-size: clamp(26px, 7.5vw, 40px);
      line-height: 1.1;
      margin: 0 0 14px 0;
    }

    .hero-text-wrapper p {
      font-size: 14px;
    }

    .hero-actions {
      flex-direction: column;
      align-items: stretch;
      gap: 12px;
    }

    .hero-meta {
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 12px;
      margin-top: 28px;
    }

    .hero-visual {
      order: -1;
      max-width: 100%;
    }
  }

  @media (max-width: 480px) {
    .hero h1 {
      font-size: clamp(22px, 7vw, 32px);
      line-height: 1.1;
      margin: 0 0 12px 0;
      letter-spacing: -0.02em;
    }

    .hero-text-wrapper p {
      font-size: 13.5px;
      line-height: 1.6;
    }

    .hero-actions {
      gap: 10px;
    }

    .hero-meta {
      gap: 10px;
    }
  }


</style>
