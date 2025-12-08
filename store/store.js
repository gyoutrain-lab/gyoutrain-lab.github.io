// ==========================================================
// PRODUCT DATA
// ==========================================================
export const products = [
  // Nursing Category
  {
    id: "nursing-bundle",
    title: "Nursing Bundle",
    category: "nursing",
    thumbnail: "/assets/nursing/nursing-bundle.svg",
    description: "Complete nursing preparation bundle.",
    link: "https://gyoutrain-lab.github.io/nursing/bundle"
  },
  {
    id: "nursing-explainer",
    title: "Nursing Explainer",
    category: "nursing",
    thumbnail: "/assets/nursing/nursing-explainer.svg",
    description: "Core concepts explained with clarity.",
    link: "https://gyoutrain-lab.github.io/nursing/explainer"
  },
  {
    id: "nursing-quicktest",
    title: "Nursing Quick Test",
    category: "nursing",
    thumbnail: "/assets/nursing/nursing-quicktest.svg",
    description: "Fast practice test with instant results.",
    link: "https://gyoutrain-lab.github.io/nursing/quicktest"
  },

  // Prometric Category
  {
    id: "prometric-main",
    title: "Prometric Main Course",
    category: "prometric",
    thumbnail: "/assets/nursing/prometric-main.svg",
    description: "Primary preparation program.",
    link: "https://gyoutrain-lab.github.io/prometric/main"
  },
  {
    id: "prometric-demo",
    title: "Prometric Demo Test",
    category: "prometric",
    thumbnail: "/assets/nursing/prometric-demo.svg",
    description: "Free demo test to evaluate your level.",
    link: "https://gyoutrain-lab.github.io/prometric/demo"
  },
  {
    id: "prometric-full",
    title: "Prometric Full Test",
    category: "prometric",
    thumbnail: "/assets/nursing/prometric-full.svg",
    description: "Full-length 100-item mock test.",
    link: "https://gyoutrain-lab.github.io/prometric/full"
  }
];

export const categories = [
  { id: "all", name: "All" },
  { id: "nursing", name: "Nursing" },
  { id: "prometric", name: "Prometric" }
];

// ==========================================================
// RENDER CATEGORY DROPDOWN
// ==========================================================
const categorySelect = document.getElementById("categorySelect");
categories.forEach(cat => {
  const option = document.createElement("option");
  option.value = cat.id;
  option.textContent = cat.name;
  categorySelect.appendChild(option);
});

// ==========================================================
// RENDER PRODUCTS
// ==========================================================
const productGrid = document.getElementById("productGrid");

function renderProducts(filter = "all") {
  productGrid.innerHTML = "";

  const filtered =
    filter === "all" ? products : products.filter(p => p.category === filter);

  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.onclick = () => (window.location.href = item.link);

    card.innerHTML = `
      <img src="${item.thumbnail}" class="product-thumb" alt="${item.title}">
      <div class="product-info">
        <div class="product-title">${item.title}</div>
        <div class="product-desc">${item.description}</div>
      </div>
    `;

    productGrid.appendChild(card);
  });
}

renderProducts();

// ==========================================================
// FILTER EVENT
// ==========================================================
categorySelect.addEventListener("change", (e) => {
  renderProducts(e.target.value);
});
