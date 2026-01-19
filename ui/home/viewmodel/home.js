import { products } from "../../../data/products.js";
import { categories } from "../../../data/products.js";
import { topWelcomeData } from "../../../data/products.js";


const cleaners = [
    {
        name: "Changyutgich Bosch BGS7RCL",
        image: "/assets/images/cleaner.png",
        price: 9800000,
        oldPrice: "8 407 000 so'm",
        discount: "25%",
        id: 1
    },
    {
        name: "Xiaomi changyutgich G20 Lite simsiz tik changyutgich",
        image: "/assets/images/cleaner_2.png",
        price: 9800000,
        oldPrice: "11 000 000 so'm",
        discount: "10%",
        id: 9
    },
    {
        name: "Quruq va nam tozalash uchun Dreame G10 COMBO",
        image: "/assets/images/cleaner_3.png",
        price: 9800000,
        oldPrice: "11 000 000 so'm",
        discount: "10%",
        id: 10
    },
    {
        name: "Xiaomi Truclean W20 Wet Dry Vacuum EU Vertikal",
        image: "/assets/images/cleaner_4.png",
        price: 9800000,
        oldPrice: "11 000 000 so'm",
        discount: "10%",
        id: 11
    },
]



function renderTopWelcomeItems() {
    const container = document.getElementById("topWelcomeItems");

    topWelcomeData.forEach(item => {
        const div = document.createElement("div");
        div.className = "top-welcome-item";

        div.innerHTML = `
            <img class="small-icon" src="${item.img}" alt="">
            <p class="body-grey">${item.text}</p>
            <div style="height: 18px;width: 1px;background-color: #D9D9D9"></div>
        `;

        div.style.cursor = "pointer";

        div.addEventListener("click", () => {
            document.getElementById("serviceCardsTitle")
                .scrollIntoView({ behavior: "smooth" });
        });

        container.appendChild(div);
    });
}


function renderCategories() {
    const container = document.getElementById('categories-container');
    container.innerHTML = '';

    categories.forEach(category => {
        const card = document.createElement('div');
        card.classList.add('category-card');

        card.innerHTML = `
            <div class="category-circle" data-id="${category.category_id}">
                <img src="${category.img}" alt="${category.category_name}">
            </div>
            <p class="body-medium">${category.category_name}</p>
        `;



        container.appendChild(card);
    });
}

function renderCleaners() {
    const cleanersContainers = document.querySelectorAll(".cleaners");
    cleanersContainers.forEach(container => {
        cleaners.forEach(product => {
            container.innerHTML += `
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
        `;
        });
    });
}

function renderProducts() {
    const productsContainers = document.querySelectorAll(".products");
    productsContainers.forEach(container => {
        products.forEach(product => {
            container.innerHTML += `
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
        `;
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const page = document.body.dataset.page;
    renderTopWelcomeItems();
    if (page === "home") {
        renderCategories();
        renderCleaners()
        renderProducts();
    }
    if(page==="like")renderProducts()

    if (page === "products") {
        // renderProducts();
    }
});

document.addEventListener("click", (e) => {
    const card = e.target.closest(".product-card");

    if (!card) return;

    const id = card.dataset.id;
    location.href = `ui/detail/presentation/detail.html?id=${id}`;
});

document.addEventListener("click", (e) => {
    const category = e.target.closest(".category-circle");

    if (!category) return;

    const cat_id = category.dataset.id;
    location.href = `/techhouseweb/ui/products/presentation/products.html?id=${cat_id}`;
});
