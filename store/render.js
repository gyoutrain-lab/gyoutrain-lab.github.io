// store/render.js
document.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('product-list');
  if (!list) {
    console.error('Missing #product-list in DOM');
    return;
  }

  // sanitize text utility
  const esc = s => String(s||'').replace(/</g,'&lt;').replace(/>/g,'&gt;');

  store.products.forEach(p => {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="thumb">
        <img src="${esc(p.img)}" alt="${esc(p.title)}">
      </div>
      <div class="card-body">
        <h3 class="card-title">${esc(p.title)}</h3>
        <p class="card-desc">${esc(p.short)}</p>
        <div class="button-row">
          <a class="btn btn-demo" href="${esc(p.demo||p.full||'#')}" target="_blank" rel="noopener">Try Free Demo</a>
          <a class="btn btn-full" href="${esc(p.full||p.demo||'#')}" target="_blank" rel="noopener">Start Full Test</a>
          <a class="btn btn-wa" href="${esc(p.whatsapp)}" target="_blank" rel="noopener">Unlock / Buy</a>
          <button class="toggle-details" aria-expanded="false">Show details</button>
        </div>
        <div class="details" hidden>
          <strong>About this product</strong>
          <p>${esc(p.long)}</p>
          <p style="color:var(--muted);font-size:13px">Price: <strong>${esc(p.price)}</strong></p>
        </div>
      </div>
    `;

    // toggle functionality
    const toggleBtn = card.querySelector('.toggle-details');
    const details = card.querySelector('.details');
    toggleBtn.addEventListener('click', () => {
      const isHidden = details.hasAttribute('hidden');
      if (isHidden) {
        details.removeAttribute('hidden');
        toggleBtn.textContent = 'Hide details';
        toggleBtn.setAttribute('aria-expanded','true');
      } else {
        details.setAttribute('hidden','');
        toggleBtn.textContent = 'Show details';
        toggleBtn.setAttribute('aria-expanded','false');
      }
    });

    list.appendChild(card);
  });

  // SEO microdata in page (JSON-LD)
  const ld = {
    "@context":"https://schema.org",
    "@type":"ItemList",
    "name":"GyouTrain Nursing Prometric Tests",
    "itemListElement": store.products.map((p,i) => ({
      "@type":"ListItem","position":i+1,
      "url": p.full || p.demo || window.location.href,
      "name": p.title,
      "description": p.short
    }))
  };
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(ld);
  document.head.appendChild(script);
});
