document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById("products");

  if (!container) {
    console.error("Missing #products element");
    return;
  }

  store.products.forEach(item => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <a href="${item.url}" target="_blank">Open Product</a><br>
      <a href="${item.whatsapp}" target="_blank">Contact Admin</a>
      <p><b>${item.price}</b></p>
    `;

    container.appendChild(card);
  });
});
