/* =========================================================================
   Ashina's Birthday site — shared script
   Every function below checks for its target element before running, so
   this one file can be safely included on every page.
   ========================================================================= */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNav();
  initPetals();
  initCursorSparkle();
  initScrollReveal();

  initEnvelope();
  initTyped();
  initFlipCards();
  initGarden();
  initSurprise();
});

/* ---------- helpers ---------- */
function cssVar(name){
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}
function rand(min, max){ return Math.random() * (max - min) + min; }

/* ---------- theme switcher (persists choice) ---------- */
function initTheme(){
  const saved = localStorage.getItem('ashina-theme');
  if (saved) document.documentElement.setAttribute('data-theme', saved);

  const dots = document.querySelectorAll('.theme-dot');
  dots.forEach(dot => {
    if (dot.dataset.t === (saved || 'rosewood')) dot.classList.add('active');
    dot.addEventListener('click', () => {
      dots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
      if (dot.dataset.t === 'rosewood'){
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('ashina-theme', 'rosewood');
      } else {
        document.documentElement.setAttribute('data-theme', dot.dataset.t);
        localStorage.setItem('ashina-theme', dot.dataset.t);
      }
    });
  });
}

/* ---------- nav: active link + mobile burger ---------- */
function initNav(){
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.ribbon-links a').forEach(a => {
    if (a.getAttribute('href') === here) a.classList.add('active');
  });

  const burger = document.querySelector('.nav-burger');
  const links = document.querySelector('.ribbon-links');
  if (burger && links){
    burger.addEventListener('click', () => links.classList.toggle('mobile-open'));
    document.addEventListener('click', (e) => {
      if (!links.contains(e.target) && !burger.contains(e.target)) links.classList.remove('mobile-open');
    });
  }
}

/* ---------- ambient falling petals ---------- */
function initPetals(){
  const field = document.getElementById('petalsField');
  if (!field) return;
  const count = window.innerWidth < 640 ? 8 : 14;
  const petalSVG = (color) => `<svg viewBox="0 0 20 20"><path d="M10 0C13 5 20 7 20 12C20 16.5 15.5 20 10 20C4.5 20 0 16.5 0 12C0 7 7 5 10 0Z" fill="${color}"/></svg>`;
  const colors = [cssVar('--rose'), cssVar('--blush'), cssVar('--lilac'), cssVar('--gold')];

  for (let i = 0; i < count; i++){
    const el = document.createElement('div');
    el.className = 'petal';
    const size = rand(10, 20);
    el.style.left = rand(0, 100) + 'vw';
    el.style.width = size + 'px';
    el.style.height = size + 'px';
    el.style.setProperty('--drift', rand(-60, 60) + 'px');
    el.style.animationDuration = rand(11, 22) + 's';
    el.style.animationDelay = rand(0, 18) + 's';
    el.innerHTML = petalSVG(colors[i % colors.length]);
    field.appendChild(el);
  }
}

/* ---------- cursor sparkle trail (desktop only, throttled) ---------- */
function initCursorSparkle(){
  if (window.matchMedia('(pointer: coarse)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let last = 0;
  window.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - last < 90) return;
    last = now;
    const s = document.createElement('div');
    s.className = 'spark';
    s.style.left = e.clientX + 'px';
    s.style.top = e.clientY + 'px';
    s.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c1 4 3 6 7 7-4 1-6 3-7 7-1-4-3-6-7-7 4-1 6-3 7-7Z"/></svg>';
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 700);
  });
}

/* ---------- scroll reveal ---------- */
function initScrollReveal(){
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('in-view'); });
  }, { threshold: 0.15 });
  items.forEach(i => io.observe(i));
}

/* ---------- INDEX: envelope open ---------- */
function initEnvelope(){
  const env = document.getElementById('envelope');
  const btn = document.getElementById('enterBtn');
  if (!env) return;
  env.addEventListener('click', () => {
    if (env.classList.contains('open')) return;
    env.classList.add('open');
    setTimeout(() => btn && btn.classList.add('show'), 700);
  });
  env.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); env.click(); }
  });
}

/* ---------- LETTER: typewriter reveal ---------- */
function initTyped(){
  const nodes = document.querySelectorAll('[data-typed]');
  if (!nodes.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      io.unobserve(entry.target);
      typeParagraph(entry.target);
    });
  }, { threshold: 0.4 });
  nodes.forEach(n => io.observe(n));
}
function typeParagraph(node){
  const full = node.textContent;
  node.textContent = '';
  const cursor = document.createElement('span');
  cursor.className = 'typed-cursor';
  node.after(cursor);
  let i = 0;
  const speed = Math.max(8, 900 / full.length);
  (function step(){
    node.textContent = full.slice(0, i);
    i++;
    if (i <= full.length) setTimeout(step, speed);
    else cursor.remove();
  })();
}

/* ---------- REASONS: flip cards (click, works for touch too) ---------- */
function initFlipCards(){
  document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', () => card.classList.toggle('flipped'));
  });
}

/* ---------- GARDEN: bloom-in-view + click-to-bloom + butterflies ---------- */
function initGarden(){
  const flowers = document.querySelectorAll('.flower');
  if (!flowers.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('in-view'); });
  }, { threshold: 0.3 });
  flowers.forEach(f => io.observe(f));

  flowers.forEach(f => {
    f.addEventListener('click', () => {
      f.classList.toggle('bloomed');
      spawnPetalBurst(f);
    });
  });

  const field = document.querySelector('.garden-field');
  if (field){
    for (let i = 0; i < 3; i++){
      const b = document.createElement('div');
      b.className = 'butterfly';
      b.style.left = rand(10, 85) + '%';
      b.style.top = rand(0, 40) + '%';
      b.style.animationDelay = rand(0, 4) + 's';
      b.style.animationDuration = rand(7, 12) + 's';
      b.innerHTML = `<svg viewBox="0 0 40 30"><g class="wing"><path d="M20 15C14 2 2 2 2 12C2 20 12 20 20 15Z" fill="${cssVar('--rose')}"/></g><g class="wing" style="animation-delay:.1s"><path d="M20 15C26 2 38 2 38 12C38 20 28 20 20 15Z" fill="${cssVar('--lilac')}"/></g><line x1="20" y1="10" x2="20" y2="20" stroke="${cssVar('--plum')}" stroke-width="1.5"/></svg>`;
      field.appendChild(b);
    }
  }
}
function spawnPetalBurst(origin){
  const rect = origin.getBoundingClientRect();
  const colors = [cssVar('--rose'), cssVar('--gold'), cssVar('--lilac')];
  for (let i = 0; i < 8; i++){
    const p = document.createElement('div');
    p.className = 'confetti-piece';
    const size = rand(5, 9);
    p.style.width = size + 'px';
    p.style.height = size + 'px';
    p.style.left = (rect.left + rect.width / 2) + 'px';
    p.style.top = (rect.top + 20) + 'px';
    p.style.background = colors[i % colors.length];
    document.body.appendChild(p);
    const dx = rand(-70, 70), dy = rand(-90, -20);
    p.animate([
      { transform: 'translate(0,0) rotate(0deg)', opacity: 1 },
      { transform: `translate(${dx}px, ${dy}px) rotate(${rand(180,360)}deg)`, opacity: 0 }
    ], { duration: 900, easing: 'ease-out' }).onfinish = () => p.remove();
  }
}

/* ---------- SURPRISE: blow candle + confetti + balloons ---------- */
function initSurprise(){
  const btn = document.getElementById('blowBtn');
  const flame = document.getElementById('flame');
  const smoke = document.getElementById('smoke');
  const msg = document.getElementById('finaleMsg');
  const again = document.getElementById('againBtn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    flame.classList.add('out');
    smoke.classList.add('show');
    btn.style.display = 'none';
    setTimeout(() => {
      msg.classList.remove('hide');
      launchConfetti();
      launchBalloons();
    }, 500);
  });

  if (again){
    again.addEventListener('click', () => {
      flame.classList.remove('out');
      smoke.classList.remove('show');
      msg.classList.add('hide');
      btn.style.display = '';
      launchConfetti();
      launchBalloons();
    });
  }
}
function launchConfetti(){
  const colors = [cssVar('--rose'), cssVar('--gold'), cssVar('--lilac'), cssVar('--blush'), cssVar('--sage')];
  for (let i = 0; i < 60; i++){
    const p = document.createElement('div');
    p.className = 'confetti-piece';
    const size = rand(6, 12);
    p.style.width = size + 'px';
    p.style.height = size * rand(0.6, 1.4) + 'px';
    p.style.left = rand(0, 100) + 'vw';
    p.style.background = colors[Math.floor(rand(0, colors.length))];
    document.body.appendChild(p);
    const fall = rand(70, 100);
    const drift = rand(-60, 60);
    p.animate([
      { transform: 'translate(0,0) rotate(0deg)', opacity: 1 },
      { transform: `translate(${drift}px, ${fall}vh) rotate(${rand(200,720)}deg)`, opacity: 0.9 }
    ], { duration: rand(2400, 3600), easing: 'ease-in' }).onfinish = () => p.remove();
  }
}
function launchBalloons(){
  const field = document.getElementById('balloonField');
  if (!field) return;
  const colors = [cssVar('--rose'), cssVar('--gold'), cssVar('--lilac'), cssVar('--sage')];
  for (let i = 0; i < 7; i++){
    const b = document.createElement('div');
    b.className = 'balloon';
    b.style.left = rand(5, 90) + '%';
    b.style.setProperty('--sway', rand(-40, 40) + 'px');
    b.style.animationDuration = rand(6, 9) + 's';
    b.style.animationDelay = rand(0, 1.2) + 's';
    const c = colors[i % colors.length];
    b.innerHTML = `<svg viewBox="0 0 40 54"><ellipse cx="20" cy="20" rx="18" ry="20" fill="${c}"/><path d="M20 40 L20 54" stroke="${cssVar('--plum-soft')}" stroke-width="1"/><path d="M15 40 Q20 46 25 40" fill="${c}"/></svg>`;
    field.appendChild(b);
    setTimeout(() => b.remove(), 9000);
  }
}
