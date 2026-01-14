const basketProducts = [
    {
        title: "Changyutgich Bosch BGS7RCL",
        price: "6 407 000 so'm",
        seller: "Buxoro/Gijduvon 777 market",
        image: "/assets/images/cleaner.png"
    },
    {
        title: "Muzlatgich Artel HD 455",
        price: "5 200 000 so'm",
        seller: "Toshkent Artel Store",
        image: "/assets/images/cleaner.png"
    },
    {
        title: "Muzlatgich Artel HD 455",
        price: "5 200 000 so'm",
        seller: "Toshkent Artel Store",
        image: "/assets/images/cleaner.png"
    }
];

function renderBasketProducts() {
    const basketList = document.getElementById("basket-products");

    basketProducts.forEach(item => {
        basketList.innerHTML += `
        <div class="basket-cart">
            <div class="basket-cart-img">
                <img src="${item.image}" alt="">
            </div>

            <div class="basket-cart-info">
                <div class="basket-cart-title">
                    <p class="body-medium">${item.title}</p>
                    <input class="basket-check" type="checkbox">
                </div>

                <div class="basket-cart-price">
                    <p class="body-grey">
                        Narxi: <span class="body-medium">${item.price}</span>
                    </p>

                    <div class="basket-cart-bottom">
                        <p class="body-grey">
                            Sotuvchi: ${item.seller}
                        </p>

                        <button class="basket-delete" type="button">
                            <span class="body-grey">O'chirish</span>
                            <img class="small-icon" src="/assets/images/delete.png" alt="">
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    });

}

document.addEventListener("DOMContentLoaded", () => {
    renderBasketProducts()
})
