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
    grid-template-columns: minmax(0, 1.1fr) minmax(320px, 480px);
    gap: clamp(40px, 6vw, 100px);
    align-items: center;
    width: 100%;
  }

  .hero-content {
    max-width: 800px;
  }

  .hero-visual {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 600px;
  }

  .hero-meta {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 28px;
    margin-top: 56px;
  }

  .hero-meta article {
    padding: 24px 28px;
    border: 1px solid rgba(255, 255, 255, 0.35);
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.88);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.16);
  }

  .hero-meta strong {
    display: block;
    font-size: 1.5rem;
    color: var(--color-text);
    font-weight: 700;
  }

  .hero-meta span {
    color: var(--color-muted);
    font-size: 0.85rem;
  }

  @media (max-width: 960px) {
    .hero-grid {
      grid-template-columns: 1fr;
    }

    .hero-visual {
      order: -1;
    }
  }
</style>
