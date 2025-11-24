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

  const hasVisual = Boolean($$slots.visual);
</script>

<section class="hero">
  <BubbleBackground />
  <div class="container hero-grid">
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
</section>

<style>
  .hero-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(60px, 8vw, 120px);
    align-items: center;
    width: 100%;
    max-width: 100%;
  }

  .hero-content {
    max-width: 100%;
    width: 100%;
    min-width: 0;
  }

  .hero-text-wrapper {
    width: 100%;
    max-width: 700px;
    min-width: 0;
  }

  .hero-visual {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 100%;
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
  }

  .hero-meta strong {
    display: block;
    font-size: 1.6rem;
    color: var(--color-primary);
    font-weight: 800;
  }

  .hero-meta span {
    color: var(--color-text-secondary);
    font-size: 0.85rem;
    margin-top: 6px;
    display: block;
  }

  @media (max-width: 960px) {
    .hero-grid {
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
</style>
