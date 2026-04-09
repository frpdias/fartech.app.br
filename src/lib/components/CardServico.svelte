<script lang="ts">
  export let title: string;
  export let description: string;
  export let href: string = '/servicos';
</script>

<a class="card service-card" href={href}>
  <h3>{title}</h3>
  <p>{description}</p>
  <span>Saiba mais →</span>
</a>

<style>
  .service-card {
    color: inherit;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border: 1px solid rgba(255, 255, 255, 0.75);
    box-shadow: 0 2px 8px rgba(15,23,42,0.06), inset 0 1px 0 rgba(255,255,255,0.8);
    position: relative;
    overflow: hidden;
    border-radius: 12px;
    padding: 28px;
    transition: var(--transition);
  }

  .service-card::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(9, 105, 218, 0.06), rgba(137, 87, 229, 0.03));
    opacity: 0;
    transition: var(--transition);
    z-index: 0;
  }

  .service-card:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.82);
    border-color: rgba(37, 99, 235, 0.2);
    box-shadow: 0 8px 24px rgba(15,23,42,0.1), inset 0 1px 0 rgba(255,255,255,0.9);
  }

  .service-card:hover::after {
    opacity: 1;
  }

  h3 {
    font-family: var(--font-display);
    margin: 0;
    font-size: 1.0625rem;
    position: relative;
    z-index: 1;
    font-weight: 600;
    color: var(--color-text-primary);
  }

  p {
    margin: 0;
    color: var(--color-text-secondary);
    position: relative;
    z-index: 1;
    font-size: clamp(12.5px, 1.05vw, 14px);
    line-height: 1.65;
  }

  span {
    font-weight: 600;
    color: var(--color-blue);
    position: relative;
    z-index: 1;
    font-size: 13px;
    transition: var(--transition);
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }

  .service-card:hover span {
    transform: translateX(4px);
    color: var(--color-blue-dark);
  }
</style>
