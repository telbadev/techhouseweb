import { products, categories } from "../../../data/products.js";

function filterProducts(categoryId) {
    console.log("categoryId:", categoryId, typeof categoryId);

    if (categoryId == null || categoryId === "null" || categoryId === "") {
        renderProducts(products);
        return;
    }

    const id = Number(categoryId);
    if (Number.isNaN(id)) {
        renderProducts(products);
        return;
    }

    const filtered = products.filter(p => p.category_id === id);
    renderProducts(filtered);
}


function renderProducts(list) {
    const container = document.querySelector(".products"); // bittasini oling
    if (!container) return;

    // 1) tozalash
    container.innerHTML = "";

    // 2) qayta chizish
    container.innerHTML = list.map(product => `
    <div class="product-card" data-id="${product.id}">
      <div class="product-card-img">
        <img src="${product.image}" alt="${product.name}">
        <span class="product-discount-badge">${product.discount}</span>
      </div>

      <div class="product-card-info">
        <p class="body-medium">${product.name}</p>

        <div class="product-card-prices" style="flex-direction: row; align-items: end; justify-content: space-between">
          <div class="product-card-prices">
            <p class="body-medium">${product.price}</p>
            <div class="divider"></div>
            <p class="body-medium" style="color:red;text-decoration:line-through">
              ${product.oldPrice}
            </p>
          </div>

          <div class="product-card-btn">
            <img class="small-icon" src="/assets/images/basket_white.png">
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

function renderCategories() {
    const container = document.querySelector(".product-category-items");
    if (!container) return;

    container.innerHTML = "";

    // URL'dan id olish
    const params = new URLSearchParams(window.location.search);
    const idParam = params.get("id");
    const selectedId =
        idParam !== null && idParam !== "" && !Number.isNaN(Number(idParam))
            ? String(Number(idParam)) // string qilib olamiz (dataset string bo'ladi)
            : null;

    let selectedButton = null;

    categories.forEach((category) => {
        const button = document.createElement("button");
        button.classList.add("category-item-btn", "body-medium");
        button.textContent = category.category_name;

        // Category ID ni topamiz (qaysi field bo'lsa)
        const categoryId = category.id ?? category.category_id ?? null;

        // Agar id topilmasa, bu categoryni skip qilamiz
        if (categoryId === null || categoryId === undefined) return;

        // button ga data-id biriktiramiz
        button.dataset.id = String(categoryId);

        // Page ochilganda URL id bo'lsa, shu button selected bo'lsin
        if (selectedId !== null && button.dataset.id === selectedId) {
            button.classList.add("selected");
            selectedButton = button;
            filterProducts(button.dataset.id);
        }

        button.addEventListener("click", () => {
            // oldingi selectedni olib tashlash
            if (selectedButton && selectedButton !== button) {
                selectedButton.classList.remove("selected");
            }

            // toggle
            const isSelected = button.classList.contains("selected");
            if (isSelected) {
                button.classList.remove("selected");
                selectedButton = null;

                // xohlasangiz hammasini ko'rsatish:
                filterProducts(null);
            } else {
                button.classList.add("selected");
                selectedButton = button;
                filterProducts(button.dataset.id);
            }
        });

        container.appendChild(button);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderCategories();
    renderProducts(products);
});

const BASE_URL = location.origin;

document.addEventListener("click", (e) => {
    const card = e.target.closest(".product-card");
    if (!card) return;

    const id = card.dataset.id;
    location.href = `../../detail/presentation/detail.html?id=${id}`;
});
