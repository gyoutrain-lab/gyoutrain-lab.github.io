async function loadProducts() {
  const res = await fetch("../products.json");
  const data = await res.json();
  return data.products;
}

function populateCategories(products) {
  const select = document.getElementById("categorySelect");
  const categories = ["all", ...new Set(products.map(p => p.category))];

  categories.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    select.appendChild(option);
  });
}

function renderProducts(products) {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";

  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${p.thumbnail}" alt="${p.title}">
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <button onclick="window.location='${p.url}'">Open Product</button>
    `;

    grid.appendChild(card);
  });
}

function setupFilters(products) {
  const categorySelect = document.getElementById("categorySelect");
  const searchInput = document.getElementById("searchInput");

  function filter() {
    const category = categorySelect.value;
    const query = searchInput.value.toLowerCase();

    const filtered = products.filter(p =>
      (category === "all" || p.category === category) &&
      p.title.toLowerCase().includes(query)
    );

    renderProducts(filtered);
  }

  categorySelect.addEventListener("change", filter);
  searchInput.addEventListener("input", filter);

  filter();
}

loadProducts().then(products => {
  populateCategories(products);
  setupFilters(products);
});
