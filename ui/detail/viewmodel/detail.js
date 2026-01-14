// import { renderTopWelcomeItems } from "/ui/home/viewmodel/home.js";

const categories = [
    { category_name: "Tozalash uskunalari", category_id: 1, img: "/assets/images/cleaner.png", },
    { category_name: "Changyutgich", category_id: 2,img: "/assets/images/heater.png", },
    { category_name: "Changyutgich Bosch BGS7RCL", category_id: 3,img: "/assets/images/heater.png", },
];
const products = [
    {
        name: "Changyutgich Bosch BGS7RCL",
        image: "/assets/images/cleaner.png",
        price: "6 407 000 so'm",
        oldPrice: "8 407 000 so'm",
        discount: "25%"
    },
    {
        name: "Kir yuvish mashinasi LG",
        image: "/assets/images/cleaner.png",
        price: "5 200 000 so'm",
        oldPrice: "6 000 000 so'm",
        discount: "15%"
    },
    {
        name: "Muzlatgich Samsung",
        image: "/assets/images/cleaner.png",
        price: "9 800 000 so'm",
        oldPrice: "11 000 000 so'm",
        discount: "10%"
    },
    {
        name: "Muzlatgich Samsung",
        image: "/assets/images/cleaner.png",
        price: "9 800 000 so'm",
        oldPrice: "11 000 000 so'm",
        discount: "10%"
    },
    {
        name: "Muzlatgich Samsung",
        image: "/assets/images/cleaner.png",
        price: "9 800 000 so'm",
        oldPrice: "11 000 000 so'm",
        discount: "10%"
    },
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
            <div class="product-card" data-id="000">
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
    // renderTopWelcomeItems();
    renderCategories();
    renderProducts();
});