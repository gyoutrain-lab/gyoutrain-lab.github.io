// ---- STORE CONFIG ---- //

const STORE_CONFIG = {
  baseAssetUrl: "https://gyoutrain-lab.github.io/assets",
};

// ---- PRODUCT LIST ---- //

const products = [
  {
    id: "nursing-demo",
    category: "nursing",
    title: "Nursing Prometric Demo Test",
    description: "20-question demo • Instant scoring • Mobile-friendly practice.",
    price: "Free",
    url: "https://script.google.com/macros/s/AKfycbwQX3XRFHwz5u5t1A8ROqaRO8U0yw019UC19lwQjQYqTmKO9iGhjVqBeBGiGYDKvFkJ/exec",
    image: "/assets/nursing/prometric-demo.svg",
    whatsapp: "https://wa.me/6285399652487"
  },
  {
    id: "nursing-test6",
    category: "nursing",
    title: "Nursing Prometric Full Test (Model 6)",
    description: "Full simulation • 75 questions • Answer key included.",
    price: "Premium",
    url: "https://gyoutrain-lab.github.io/production-prometrictest6/",
    image: "/assets/nursing/prometric-main.svg",
    whatsapp: "https://wa.me/6285399652487"
  },
  {
    id: "nursing-bundle",
    category: "nursing",
    title: "Nursing Exam Bundle",
    description: "All Prometric models combined • Best for full preparation.",
    price: "Premium",
    url: "#", // Update later
    image: "/assets/nursing/nursing-bundle.svg",
    whatsapp: "https://wa.me/6285399652487"
  },
  {
    id: "nursing-explainer",
    category: "nursing",
    title: "Prometric Strategy Explainer",
    description: "Exam breakdown • Strategy guide • Tips & techniques.",
    price: "Free",
    url: "#", // Update later
    image: "/assets/nursing/nursing-explainer.svg",
    whatsapp: "https://wa.me/6285399652487"
  },
  {
    id: "nursing-quicktest",
    category: "nursing",
    title: "Nursing Quick Test",
    description: "Mini-test mode • Fast practice • Great for warm-ups.",
    price: "Free",
    url: "#", // Update later
    image: "/assets/nursing/nursing-quicktest.svg",
    whatsapp: "https://wa.me/6285399652487"
  }
];

// ---- RENDERING LOGIC ---- //

function loadCategories() {
  const categorySelect = document.getElementById("categorySelect");
  const categories = [...new Set(products.map(p => p.category))];

  categories.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat.replace("-", " ").toUpperCase();
    categorySelect.appendChild(option);
  });
}

function renderProducts(category = "all") {
  const container = document.getElementById("productList");
  container.innerHTML = "";

  const filtered = category === "all" 
      ? products 
      : products.filter(p => p.category === category);

  filtered.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.image}" class="thumbnail" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>${product.description}</p>
      <p class="price">${product.price}</p>

      <div class="actions">
        <a class="btn" href="${product.url}" target="_blank">Open</a>
        <a class="btn whatsapp" href="${product.whatsapp}" target="_blank">WhatsApp</a>
      </div>
    `;

    container.appendChild(card);
  });
}

// ---- INITIALIZE ---- //

document.addEventListener("DOMContentLoaded", () => {
  loadCategories();
  renderProducts();
  
  document.getElementById("categorySelect").addEventListener("change", (e) => {
    renderProducts(e.target.value);
  });
});
