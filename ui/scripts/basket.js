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
    basketList.innerHTML = "";

    basketProducts.forEach((item, index) => {
        basketList.innerHTML += `
        <div class="basket-cart" data-index="${index}">
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
                </div>
            </div>
        </div>
        `;
    });
}
const selectAllCheckbox = document.getElementById("select-all");

selectAllCheckbox.addEventListener("change", () => {
    const checks = document.querySelectorAll(".basket-check");
    checks.forEach(ch => ch.checked = selectAllCheckbox.checked);
});
const deleteSelectedBtn = document.getElementById("delete-selected");

deleteSelectedBtn.addEventListener("click", () => {
    const carts = document.querySelectorAll(".basket-cart");

    let indexesToDelete = [];

    carts.forEach(cart => {
        const checkbox = cart.querySelector(".basket-check");
        if (checkbox.checked) {
            indexesToDelete.push(Number(cart.dataset.index));
        }
    });

    // Oxiridan boshlab o‘chiramiz (indexlar buzilmasligi uchun)
    indexesToDelete
        .sort((a, b) => b - a)
        .forEach(i => basketProducts.splice(i, 1));

    renderBasketProducts();
});


document.addEventListener("DOMContentLoaded", () => {
    renderBasketProducts()
})
