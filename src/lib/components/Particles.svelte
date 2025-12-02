<script>
  import { onMount, onDestroy } from 'svelte';

  let canvas;
  let ctx;
  let frame;
  let dpr = 1;
  let width = 0;
  let height = 0;
  let scrollOffset = 0;

  const PARTICLE_COUNT = 160;
  const particles = [];
  const colors = [
    'rgba(82, 120, 255, 0.6)',
    'rgba(26, 188, 254, 0.55)',
    'rgba(45, 205, 170, 0.5)',
    'rgba(140, 122, 255, 0.5)'
  ];

  const resize = () => {
    if (!canvas) return;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    if (ctx) {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    }
  };

  const initParticles = () => {
    particles.length = 0;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: 2.6 + Math.random() * 4.4,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        color: colors[i % colors.length]
      });
    }
  };

  const step = () => {
    if (!ctx) return;
    ctx.clearRect(0, 0, width, height);

    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      ctx.beginPath();
      ctx.fillStyle = p.color;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();

      // glow
      const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4.2);
      gradient.addColorStop(0, p.color);
      gradient.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * 4.2, 0, Math.PI * 2);
      ctx.fill();
    }

    // linhas entre partículas próximas
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i];
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist2 = dx * dx + dy * dy;
        if (dist2 < 180 * 180) {
          const alpha = 1 - dist2 / (180 * 180);
          ctx.strokeStyle = `rgba(82,120,255,${0.35 * alpha})`;
          ctx.lineWidth = 1.1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    frame = requestAnimationFrame(step);
  };

  const handleResize = () => {
    resize();
    initParticles();
  };

  const handleScroll = () => {
    const y = window.scrollY || window.pageYOffset || 0;
    // aumenta range e velocidade para um parallax mais perceptível
    const clamped = Math.max(0, Math.min(y, 400));
    scrollOffset = clamped * 0.616; // ~50% menos que o intenso anterior
  };

  onMount(() => {
    ctx = canvas.getContext('2d');
    resize();
    initParticles();
    frame = requestAnimationFrame(step);
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<div class="particles-wrapper">
  <canvas
    class="particles-canvas"
    aria-hidden="true"
    bind:this={canvas}
    style={`transform: translateY(${scrollOffset}px);`}
  ></canvas>
</div>

<style>
.particles-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh; /* ocupa toda a página para aparecer em todas as seções */
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

.particles-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  opacity: 0.85;
}
</style>
