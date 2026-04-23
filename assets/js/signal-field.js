(() => {
  const canvas = document.getElementById("signal-field-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d", { alpha: true });
  if (!ctx) return;

  const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  let width = 0;
  let height = 0;
  let dpr = 1;
  let time = 0;
  let frameId = 0;

  function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function drawDotField(t) {
    const cols = width < 640 ? 46 : width < 1080 ? 64 : 84;
    const rows = width < 640 ? 17 : 23;
    const horizon = height * 0.24;

    for (let row = 0; row < rows; row += 1) {
      const near = row / Math.max(rows - 1, 1);
      const eased = near * near;
      const span = width * (0.18 + near * 1.12);
      const xStart = width / 2 - span / 2;
      const yBase = horizon + eased * height * 0.66;
      const amplitude = 12 + near * 58;
      const phase = t * 0.34 + near * 4.6;
      const sway = Math.sin(t * 0.18 + near * 5.2) * near * 16;

      for (let col = 0; col < cols; col += 1) {
        const ratio = col / Math.max(cols - 1, 1);
        const nx = ratio - 0.5;
        const ridge =
          Math.sin(nx * 10.4 + phase) * amplitude * (0.34 + near * 0.82) +
          Math.cos(nx * 5.7 - phase * 0.68 + near * 6.1) * amplitude * 0.18 +
          Math.sin(nx * 28 + phase * 0.92) * near * 5;
        const x = xStart + ratio * span + sway * nx;
        const y = yBase + ridge;
        const size = 0.6 + near * 1.9;
        const alpha = (0.015 + near * 0.085) * (0.7 + Math.max(0, Math.sin(nx * 12 + phase)) * 0.35);
        const cyan = Math.round(184 + near * 56);
        const blue = Math.round(198 + near * 42);
        const whiteBoost = ridge > amplitude * 0.6 ? 30 : 0;

        ctx.fillStyle = `rgba(${120 + whiteBoost}, ${cyan + whiteBoost}, ${blue + whiteBoost}, ${alpha})`;
        ctx.fillRect(x, y, size, size);
      }
    }
  }

  function drawWaveTraces(t) {
    const waveCount = width < 720 ? 3 : 5;
    const startX = width * 0.04;
    const endX = width * 0.96;
    const baseY = height * 0.38;

    for (let i = 0; i < waveCount; i += 1) {
      ctx.beginPath();

      for (let x = startX; x <= endX; x += 3) {
        const ratio = x / width;
        const envelope = 0.22 + Math.exp(-Math.pow((ratio - 0.62) / 0.17, 2)) * 0.92;
        const y =
          baseY +
          Math.sin(ratio * 18 - t * (0.52 + i * 0.05) + i * 0.8) * (10 + i * 5) * envelope +
          Math.cos(ratio * 8 + t * 0.28 + i) * (4 + i * 1.6);

        if (x === startX) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      const alpha = 0.04 + i * 0.016;
      const tone = i === 0 ? "255,255,255" : i % 2 === 0 ? "83,200,255" : "130,220,255";
      ctx.strokeStyle = `rgba(${tone}, ${alpha})`;
      ctx.lineWidth = i === 0 ? 1.85 : 1.05;
      ctx.stroke();
    }
  }

  function drawSpectrum(t) {
    const bars = width < 640 ? 26 : 40;
    const span = Math.min(width * 0.26, 340);
    const centerX = width * 0.49;
    const baseY = height * 0.36;

    for (let i = 0; i < bars; i += 1) {
      const ratio = i / Math.max(bars - 1, 1);
      const x = centerX - span / 2 + ratio * span;
      const envelope = Math.exp(-Math.pow((ratio - 0.5) / 0.28, 2));
      const magnitude =
        14 +
        envelope * 74 * (0.35 + 0.65 * Math.abs(Math.sin(t * 0.58 + ratio * 10.5))) +
        Math.sin(t * 0.33 + i * 0.41) * 4;
      const alpha = 0.015 + envelope * 0.13;

      ctx.strokeStyle = `rgba(83, 200, 255, ${alpha})`;
      ctx.lineWidth = width < 640 ? 1 : 1.35;
      ctx.beginPath();
      ctx.moveTo(x, baseY - magnitude);
      ctx.lineTo(x, baseY + magnitude * 0.18);
      ctx.stroke();
    }
  }

  function renderFrame() {
    ctx.clearRect(0, 0, width, height);
    drawDotField(time);
    drawWaveTraces(time);
    drawSpectrum(time);
  }

  function stopAnimation() {
    if (frameId) {
      cancelAnimationFrame(frameId);
      frameId = 0;
    }
  }

  function startAnimation() {
    stopAnimation();
    renderFrame();

    if (reduceMotionQuery.matches || document.hidden) {
      return;
    }

    const loop = () => {
      time += 0.014;
      renderFrame();
      frameId = requestAnimationFrame(loop);
    };

    frameId = requestAnimationFrame(loop);
  }

  window.addEventListener("resize", () => {
    resizeCanvas();
    startAnimation();
  }, { passive: true });

  document.addEventListener("visibilitychange", () => {
    startAnimation();
  });

  reduceMotionQuery.addEventListener("change", () => {
    startAnimation();
  });

  resizeCanvas();
  startAnimation();
})();
