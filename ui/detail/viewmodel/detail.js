import { products } from "../../../data/products.js";


const categories = [
    { category_name: "Tozalash uskunalari", category_id: 1, img: "/assets/images/cleaner.png", },
    { category_name: "Changyutgich", category_id: 2,img: "/assets/images/heater.png", },
    { category_name: "Changyutgich Bosch BGS7RCL", category_id: 3,img: "/assets/images/heater.png", },
];

function renderCategories() {
    const container_categories = document.getElementById('categories-container');
    let selectedCategory = null;
    categories.forEach(category => {
        const div = document.createElement('div');
        div.classList.add('category-btn');

        div.innerHTML = `
        <p class="body-grey" style="color: #222222">${category.category_name}</p>
        <img class="small-icon" style="transform: rotate(-90deg); " src="/assets/images/bottom-arrow.png">
    `;

        if(category.category_id===1) {
            div.classList.add('selected');
            selectedCategory = div;
        }

        container_categories.appendChild(div);
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

function getProductData() {
    const params = new URLSearchParams(location.search);
    const id = Number(params.get("id"));
    const product = products.find(p => p.id === id);
    if(!product) {
        console.log('Mahsulot topilmadi')
    } else return product;
}

document.addEventListener("DOMContentLoaded", () => {
    renderCategories();
    renderProducts();
    const response = getProductData()
    document.querySelector("#productName").textContent = response.name;
    document.querySelector("#productPrice").textContent = response.price.toLocaleString("uz-UZ") + " so'm";
    document.querySelector("#productPrice2").textContent = response.price.toLocaleString("uz-UZ") + " so'm";
    document.querySelector("#productImg").src = response.image;
    document.querySelector("#productImg2").src = response.image;
    document.querySelector("#productImg3").src = response.image;
    document.querySelector("#productImg4").src = response.image;
    document.querySelector("#productOldPrice").textContent = response.oldPrice;
    document.querySelector("#productDiscount").textContent = response.discount;
    document.querySelector("#productDiscount2").textContent = response.discount;

});

const BASE_URL = location.origin;

document.addEventListener("click", (e) => {
    const card = e.target.closest(".product-card");
    if (!card) return;

    const id = card.dataset.id;
    location.href = `/ui/detail/presentation/detail.html?id=${id}`;
});
