import { products, categories } from "../../data/products.js";
const container = document.querySelector(".products-main");

function normalizeText(text) {
    return text
        .toLowerCase()
        .replace(/[\s\-_,.]+/g, "") // bo‘shliq va belgilarni olib tashlaymiz
        .replace(/g‘|gʻ/g, "g")
        .replace(/o‘|oʻ/g, "o")
        .replace(/sh/g, "s")
        .replace(/ch/g, "c");
}


/* ===============================
   URL DAN FILTERLARNI OLISH
================================ */
function getFiltersFromURL() {
    const params = new URLSearchParams(window.location.search);

    return {
        categoryId: params.get("id"),
        search: params.get("search")?.toLowerCase() || null,
    };
}


/* ===============================
   PRODUCTLARNI CHIZISH
================================ */
function renderProducts(list) {
    const container = document.querySelector(".products");
    if (!container) return;

    console.log(container);

    container.innerHTML = "";

    if (list.length === 0) {
        container.innerHTML = `<p class="body-grey">Hech narsa topilmadi</p>`;
        return;
    }

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
                        <p class="body-medium">${product.price.toLocaleString("uz-UZ")} so'm</p>
                        <div class="divider"></div>
                        <p class="body-medium" style="color:red;text-decoration:line-through">
                            ${product.oldPrice}
                        </p>
                    </div>

                    <div class="product-card-btn">
                        <img class="small-icon" src="/techhouseweb/assets/images/basket_white.png">
                    </div>
                </div>
            </div>
        </div>
    `).join("");
}

/* ===============================
   CATEGORY + SEARCH FILTER
================================ */
function applyFilters() {
    const { categoryId, search } = getFiltersFromURL();

    let result = [...products];

    if (categoryId) {
        const id = Number(categoryId);
        if (!Number.isNaN(id)) {
            result = result.filter(p => p.category_id === id);
        }
    }


    if (search) {
        const normalizedSearch = normalizeText(search);

        result = result.filter(p => {
            const normalizedName = normalizeText(p.name);
            return normalizedName.includes(normalizedSearch);
        });
    }

    renderProducts(result);
}


/* ===============================
   CATEGORYLARNI CHIZISH
================================ */
function renderCategories() {
    const container = document.querySelector(".product-category-items");
    if (!container) return;

    container.innerHTML = "";

    const params = new URLSearchParams(window.location.search);
    const selectedId = params.get("id");

    categories.forEach(category => {
        const btn = document.createElement("button");
        btn.className = "category-item-btn body-medium";
        btn.textContent = category.category_name;

        // MUHIM JOY
        btn.dataset.id = category.category_id;

        if (selectedId && String(category.category_id) === selectedId) {
            btn.classList.add("selected");
        }

        btn.addEventListener("click", () => {
            const params = new URLSearchParams(window.location.search);

            params.delete("search");              // 🔥 search o‘chadi
            params.set("id", category.category_id);

            window.location.href =
                window.location.pathname + "?" + params.toString();
        });


        container.appendChild(btn);
    });
}


/* ===============================
   DETAIL PAGE NAVIGATION
================================ */
document.addEventListener("click", (e) => {
    const card = e.target.closest(".product-card");
    if (!card) return;

    const id = card.dataset.id;
    window.location.href = `/techhouseweb/ui/pages/detail.html?id=${id}`;
});

/* ===============================
   INIT
================================ */
document.addEventListener("DOMContentLoaded", () => {
    renderCategories();
    applyFilters();

    const searchInput = document.querySelector(".search-input");
    const params = new URLSearchParams(window.location.search);

    // 🔹 URL dagi searchni inputga qo‘yish
    if (searchInput && params.get("search")) {
        searchInput.value = params.get("search");
    }

    if (searchInput) {
        searchInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                const value = searchInput.value.trim();
                const params = new URLSearchParams(window.location.search);

                if (value) {
                    params.delete("id");
                    params.set("search", value);
                } else {
                    params.delete("search");
                }


                window.location.search = params.toString();
            }
        });
    }
});



