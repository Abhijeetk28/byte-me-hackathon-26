(function () {
  var canvas = document.getElementById('particleCanvas');
  if (!canvas) return;

  var ctx = canvas.getContext('2d');
  var raf = 0;
  var particles = [];
  var w = 0;
  var h = 0;
  var dpr = 1;
  var reduced = false;

  function checkReduced() {
    try {
      reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch (e) {
      reduced = false;
    }
    return reduced;
  }

  /** Rich theme palette: visible violets / indigos */
  function themeConfig() {
    var dark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (dark) {
      return {
        palette: [
          { r: 196, g: 181, b: 253 },
          { r: 167, g: 139, b: 250 },
          { r: 192, g: 132, b: 252 },
          { r: 129, g: 140, b: 248 },
          { r: 167, g: 139, b: 250 },
        ],
        lineRgb: { r: 139, g: 92, b: 246 },
        maxParticles: 200,
        minParticles: 72,
        areaDivisor: 3800,
        linkDist: 108,
        lineAlphaMul: 0.38,
        lineWidth: 1.05,
      };
    }
    return {
      palette: [
        { r: 124, g: 58, b: 237 },
        { r: 92, g: 45, b: 214 },
        { r: 79, g: 70, b: 229 },
        { r: 139, g: 92, b: 246 },
        { r: 109, g: 40, b: 217 },
      ],
      lineRgb: { r: 92, g: 45, b: 214 },
      maxParticles: 240,
      minParticles: 96,
      areaDivisor: 3200,
      linkDist: 128,
      lineAlphaMul: 0.42,
      lineWidth: 1.1,
    };
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    initParticles();
  }

  function initParticles() {
    var cfg = themeConfig();
    var area = Math.max(1, w * h);
    var n = Math.floor(area / cfg.areaDivisor);
    n = Math.min(cfg.maxParticles, Math.max(cfg.minParticles, n));
    var pal = cfg.palette;
    particles = [];
    for (var i = 0; i < n; i++) {
      var c = pal[Math.floor(Math.random() * pal.length)];
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.42,
        vy: (Math.random() - 0.5) * 0.42,
        r: Math.random() * 2.4 + 1.1,
        o: Math.random() * 0.38 + 0.32,
        pulse: Math.random() * Math.PI * 2,
        cr: c.r,
        cg: c.g,
        cb: c.b,
      });
    }
  }

  function dotStyle(p) {
    return 'rgba(' + p.cr + ',' + p.cg + ',' + p.cb + ',' + p.o + ')';
  }

  function drawStatic() {
    var cfg = themeConfig();
    ctx.clearRect(0, 0, w, h);
    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = dotStyle(p);
      ctx.fill();
    }
  }

  function tick() {
    if (checkReduced()) {
      drawStatic();
      return;
    }
    var cfg = themeConfig();
    var lr = cfg.lineRgb;
    ctx.clearRect(0, 0, w, h);

    var i, j, p, q, dx, dy, dist, alpha;
    for (i = 0; i < particles.length; i++) {
      p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < -24) p.x = w + 24;
      if (p.x > w + 24) p.x = -24;
      if (p.y < -24) p.y = h + 24;
      if (p.y > h + 24) p.y = -24;
      p.pulse += 0.018;
    }

    for (i = 0; i < particles.length; i++) {
      p = particles[i];
      for (j = i + 1; j < particles.length; j++) {
        q = particles[j];
        dx = p.x - q.x;
        dy = p.y - q.y;
        dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < cfg.linkDist) {
          alpha = (1 - dist / cfg.linkDist) * cfg.lineAlphaMul;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = 'rgba(' + lr.r + ',' + lr.g + ',' + lr.b + ',' + alpha + ')';
          ctx.lineWidth = cfg.lineWidth;
          ctx.stroke();
        }
      }
    }

    for (i = 0; i < particles.length; i++) {
      p = particles[i];
      var tw = 0.88 + Math.sin(p.pulse) * 0.12;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * tw, 0, Math.PI * 2);
      ctx.fillStyle = dotStyle(p);
      ctx.fill();
    }

    raf = requestAnimationFrame(tick);
  }

  function start() {
    cancelAnimationFrame(raf);
    resize();
    if (checkReduced()) {
      drawStatic();
      return;
    }
    raf = requestAnimationFrame(tick);
  }

  function onResize() {
    cancelAnimationFrame(raf);
    resize();
    if (checkReduced()) {
      drawStatic();
      return;
    }
    raf = requestAnimationFrame(tick);
  }

  window.addEventListener('resize', onResize, { passive: true });

  var mo = new MutationObserver(function () {
    initParticles();
    cancelAnimationFrame(raf);
    if (checkReduced()) {
      drawStatic();
      return;
    }
    raf = requestAnimationFrame(tick);
  });
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  if (window.matchMedia) {
    var mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.addEventListener) mq.addEventListener('change', start);
    else if (mq.addListener) mq.addListener(start);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else start();
})();
