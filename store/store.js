// store/store.js — loads products.json and renders interactive UI
(function(){
  const productsPath = 'products.json';

  const el = sel => document.querySelector(sel);
  const productGrid = el('#productGrid');
  const categorySelect = el('#categorySelect');
  const searchInput = el('#searchInput');
  const themeToggle = el('#themeToggle');
  const browseBtn = el('#browseBtn');

  // fetch JSON and init
  fetch(productsPath).then(r => r.json()).then(data => {
    const products = data.products || [];
    initCategories(products);
    renderProducts(products);
    attachEvents(products);
  }).catch(err => {
    console.error('Failed to load products.json', err);
    productGrid.innerHTML = '<p style="color:#6b7280">Failed to load products. Check products.json path.</p>';
  });

  function initCategories(products){
    const cats = ['all', ...Array.from(new Set(products.map(p => p.category)))];
    cats.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c;
      opt.textContent = c === 'all' ? 'All categories' : capitalize(c);
      categorySelect.appendChild(opt);
    });
  }

  function renderProducts(products, filter='all', query=''){
    productGrid.innerHTML = '';
    const q = (query||'').trim().toLowerCase();

    const list = products.filter(p => {
      const okCat = filter === 'all' || p.category === filter;
      const okQuery = !q || (p.title + ' ' + p.short + ' ' + (p.long||'')).toLowerCase().includes(q);
      return okCat && okQuery;
    });

    if(list.length === 0){
      productGrid.innerHTML = '<p style="color:#6b7280">No products found.</p>';
      return;
    }

    list.forEach(p => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <div class="thumb"><img src="${p.thumbnail}" alt="${escapeHtml(p.title)}"></div>
        <div class="card-body">
          <div class="title">${escapeHtml(p.title)}</div>
          <div class="short">${escapeHtml(p.short)}</div>
          <div class="meta">
            <div class="price">${escapeHtml(p.price||'')}</div>
            <div class="actions">
              <a class="demo" href="${p.demo || p.full || '#'}" target="_blank" rel="noopener">Try Demo</a>
              <a class="full" href="${p.full || p.demo || '#'}" target="_blank" rel="noopener">Start Full Test</a>
              <a class="wa" href="${p.whatsapp || '#'}" target="_blank" rel="noopener">Unlock / Buy</a>
            </div>
          </div>
          <div class="details" aria-hidden="true">${escapeHtml(p.long || '')}</div>
        </div>
      `;
      productGrid.appendChild(card);
    });
  }

  function attachEvents(products){
    categorySelect.addEventListener('change', ()=> renderProducts(products, categorySelect.value, searchInput.value));
    searchInput.addEventListener('input', ()=> renderProducts(products, categorySelect.value, searchInput.value));
    themeToggle.addEventListener('click', toggleTheme);
    browseBtn && browseBtn.addEventListener('click', ()=> {
      window.scrollTo({top: document.querySelector('#productGrid').offsetTop - 20, behavior: 'smooth'});
    });
  }

  function toggleTheme(){
    document.body.classList.toggle('dark');
    const pressed = document.body.classList.contains('dark');
    themeToggle.setAttribute('aria-pressed', pressed ? 'true' : 'false');
    themeToggle.textContent = pressed ? 'Light' : 'Dark';
  }

  function capitalize(s){ return s.charAt(0).toUpperCase() + s.slice(1); }
  function escapeHtml(s){ return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
})();
