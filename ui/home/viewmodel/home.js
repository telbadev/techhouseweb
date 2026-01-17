const topWelcomeData = [
    { img: "/assets/images/location.png", text: "Manzilga ga yetkazish" },
    { img: "/assets/images/delivery_truck_1.png", text: "Buyurtmani kuzatish" },
    { img: "/assets/images/doscount_1.png", text: "Barcha xizmatlar" }
];

const categories = [
    {
        category_name: "Oshxona texnikasi",
        img: "/assets/images/washing_machine.png",
        category_id: 1
    },
    { category_name: "Tozalash uskunalari", category_id: 2, img: "/assets/images/cleaner.png", },
    { category_name: "Isitish qurilmalari", category_id: 3,img: "/assets/images/heater.png", },
    { category_name: "Shaxsiy parvarish qurilmalari", category_id: 4,img: "/assets/images/air_condition.png", },
    { category_name: "Aqlli uy texnikasi", category_id: 5 , img: "/assets/images/smart_home.png"},
    { category_name: "Changyutgich", category_id: 5 , img: "/assets/images/cleaner.png"},
    { category_name: "Sovutish qurilmalari", category_id: 5 , img: "/assets/images/air_condition.png"}
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

        // 👇 AGAR "Barcha xizmatlar" bo‘lsa
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
            <div class="category-circle">
                <img src="${category.img}" alt="${category.category_name}">
            </div>
            <p class="body-medium">${category.category_name}</p>
        `;



        container.appendChild(card);
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
    const page = document.body.dataset.page;
    renderTopWelcomeItems();
    if (page === "home") {
        renderCategories();
        renderProducts();
    }

    if (page === "products") {
        renderProducts();

    }
});
document.addEventListener("click", (e) => {
    const card = e.target.closest(".product-card");
    if (!card) return;

    const id = card.dataset.id;
    location.href = `/techhouseweb/ui/detail/presentation/detail.html`;
});
