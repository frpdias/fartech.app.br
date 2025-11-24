<script>
</script>

<section class="dashboard-section">
  <div class="dashboard-container">
    <img 
      src="/images/dashboard-card.png" 
      alt="Dashboard de Desempenho"
      class="dashboard-card-image"
    />
  </div>
</section>

<style>
  .dashboard-section {
    width: 100%;
    padding: 4rem clamp(1.5rem, 5vw, 12rem);
    background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%);
    margin-top: 6rem;
    border-top: 1px solid rgba(0, 153, 255, 0.2);
  }

  .dashboard-container {
    max-width: 1400px;
    margin: 0 auto;
    animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    opacity: 0;
  }

  .dashboard-card-image {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 24px;
    box-shadow: 0 20px 60px rgba(0, 102, 255, 0.15),
                0 0 40px rgba(124, 58, 237, 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(0, 153, 255, 0.2);
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    animation: float 3s ease-in-out infinite;
  }

  .dashboard-card-image:hover {
    box-shadow: 0 30px 80px rgba(0, 102, 255, 0.25),
                0 0 60px rgba(124, 58, 237, 0.2),
                inset 0 1px 0 rgba(255, 255, 255, 0.15);
    transform: translateY(-4px);
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-8px);
    }
  }

  @media (max-width: 768px) {
    .dashboard-section {
      padding: 2rem 1rem;
      margin-top: 3rem;
    }

    .dashboard-card-image {
      animation: none;
    }

    .dashboard-card-image:hover {
      transform: none;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .dashboard-card-image {
      animation: none;
    }

    .dashboard-container {
      animation: none;
      opacity: 1;
    }
  }
</style>
