// Load categories
async function loadCategories() {
  const res = await fetch('/store/categories.json');
  const data = await res.json();
  return data.categories;
}

// Load products
async function loadProducts() {
  const res = await fetch('/store/products.json');
  const data = await res.json();
  return data.products;
}

// Render products to HTML
async function renderProducts(category = null) {
  const products = await loadProducts();
  const filtered = category
    ? products.filter(p => p.category === category)
    : products;

  const container = document.getElementById('product-list');
  container.innerHTML = '';

  filtered.forEach(p => {
    container.innerHTML += `
      <div class="product-card">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <a href="${p.url}" class="btn">Open Demo</a>
        <a href="${p.whatsapp}" class="btn-wa">Order via WhatsApp</a>
      </div>
    `;
  });
}
