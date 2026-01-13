const topWelcomeData = [
    { img: "/assets/images/location.png", text: "423651 ga yetkazish" },
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


const container_welcome = document.getElementById("topWelcomeItems");
const productsContainers = document.querySelectorAll(".products");
const container_categories = document.getElementById('categories-container');

// Top welcome items
topWelcomeData.forEach(item => {
    container_welcome.innerHTML += `
        <div class="top-welcome-item">
            <img class="small-icon" src="${item.img}" alt="">
            <p class="body-grey">${item.text}</p>
            <div style="height: 18px;width: 1px;background-color: #D9D9D9"></div>
        </div>
    `;
});


// Categories with single select
let selectedCategory = null;
categories.forEach(category => {
    const div = document.createElement('div');
    div.classList.add('category-btn');

    div.innerHTML = `
        <p class="body-grey" style="color: #222222">${category.category_name}</p>
        <img class="small-icon" src="/assets/images/bottom-arrow.png">
    `;

    // Bosilganda
    div.addEventListener('click', () => {
        // Agar oldin tanlangan bo'lsa, o'chiramiz
        if (selectedCategory && selectedCategory !== div) {
            selectedCategory.classList.remove('selected');
        }

        // Tanlangan elementni toggle qilamiz
        if (div.classList.contains('selected')) {
            div.classList.remove('selected');
            selectedCategory = null;
        } else {
            div.classList.add('selected');
            selectedCategory = div;
        }
    });

    container_categories.appendChild(div);
});

//add products
productsContainers.forEach(container => {
    products.forEach(product => {
        container.innerHTML += `
            <div class="product-card">
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