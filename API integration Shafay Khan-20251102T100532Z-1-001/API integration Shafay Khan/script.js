const Api = "https://fakestoreapi.com/products";

async function getApi(url) {
  try {
    console.log("Fetching data from API...");
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("✅ API data received:", data);

    displayProducts(data);
  } catch (error) {
    console.error("❌ Error fetching API:", error);
  }
}

function displayProducts(products) {
  const container = document.getElementById("productContainer");
  if (!container) {
    console.error("Could not find #productContainer in HTML");
    return;
  }

  container.innerHTML = "";

  if (!products || products.length === 0) {
    container.innerHTML = `<p class="text-center text-muted">No products found.</p>`;
    return;
  }

  products.forEach((product, index) => {
    const col = document.createElement("div");
    col.className = "col-12 col-sm-6 col-md-4 col-lg-3";
    col.setAttribute("data-aos", "fade-up");
    col.setAttribute("data-aos-delay", index * 100);

    col.innerHTML = `
      <div class="card product-card h-100">
        <img src="${product.image}" alt="${product.title}" class="card-img-top" loading="lazy">
        <div class="card-body d-flex flex-column text-center">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text text-muted small">${product.description.substring(0, 80)}...</p>
          <div class="mt-auto">
            <h6 class="price mb-3">$${product.price}</h6>
            <button class="btn btn-buy w-100 fw-semibold">Add to Cart</button>
          </div>
        </div>
      </div>
    `;

    container.appendChild(col);
  });
}

getApi(Api);
