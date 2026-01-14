const categories = [
    { category_name: "Oshxona texnikasi", category_id: 1 },
    { category_name: "Tozalash uskunalari", category_id: 2 },
    { category_name: "Isitish qurilmalari", category_id: 3 },
    { category_name: "Shaxsiy parvarish qurilmalari", category_id: 4 },
    { category_name: "Aqlli uy texnikasi", category_id: 5 },
    { category_name: "Changyutgich", category_id: 6 },
    { category_name: "Sovutish qurilmalari", category_id: 7 }
];

function renderCategories() {
    const container = document.querySelector('.product-category-items');
    let selectedButton = null;

    categories.forEach(category => {
        const button = document.createElement('button');

        // classlar
        button.classList.add('category-item-btn', 'body-medium');

        // text
        button.textContent = category.category_name;

        // click hodisasi
        button.addEventListener('click', () => {
            if (selectedButton && selectedButton !== button) {
                selectedButton.classList.remove('selected');
            }

            if (button.classList.contains('selected')) {
                button.classList.remove('selected');
                selectedButton = null;
            } else {
                button.classList.add('selected');
                selectedButton = button;
            }
        });

        container.appendChild(button);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderCategories();
});
