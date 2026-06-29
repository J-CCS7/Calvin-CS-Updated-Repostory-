// e.g. When there are 4 menus with 2 variants each,
// then the cart variable will be like this: 
// [[0, 0], [0, 0], [0, 0], [0, 0]]
let cart = [];
let selectedCategory = 'Meals';
let searchTerm = '';

function formatPriceK(price) {
    return (price / 1000).toFixed(0) + 'k';
}

setupCart();
renderMenus();

const searchInput = document.getElementById('menu-search');
if (searchInput) {
    searchInput.addEventListener('input', (event) => {
        searchTerm = event.target.value.trim().toLowerCase();
        renderMenus();
    });
}

function substractQty(menuIndex, variantIndex) {
    cart[menuIndex][variantIndex] -= 1;

    if (cart[menuIndex][variantIndex] < 0) {
        cart[menuIndex][variantIndex] = 0;

        const menuName = menus[menuIndex].name;
        const variantName = menus[menuIndex].variants[variantIndex].description;
        alert(`${menuName} - ${variantName} cannot be less than 0.`);
    }

    const id = `qty-${menuIndex}-${variantIndex}`;

    document.getElementById(id).innerHTML = cart[menuIndex][variantIndex];
}

function addQty(menuIndex, variantIndex) {
    cart[menuIndex][variantIndex] += 1;

    const stock = menus[menuIndex].variants[variantIndex].stock;
    if (cart[menuIndex][variantIndex] > stock) {
        cart[menuIndex][variantIndex] = stock;
        const menuName = menus[menuIndex].name;
        const variantName = menus[menuIndex].variants[variantIndex].description;
        alert(`${menuName} - ${variantName} cannot exceed ${stock}.`);
    }

    const id = `qty-${menuIndex}-${variantIndex}`;

    document.getElementById(id).innerHTML = cart[menuIndex][variantIndex];
}

function setupCart() {
    for (let i = 0; i < menus.length; i++) {
        let variantCart = [];
        for (let j = 0; j < menus[i].variants.length; j++) {
            variantCart.push(0);
        }
        cart[i] = variantCart;
    }
}

function switchCategory(category) {
    selectedCategory = category;

    document.querySelectorAll('.menu-tab').forEach((tab) => {
        tab.classList.toggle('active', tab.textContent.trim() === category);
    });

    renderMenus();
}

function renderMenus() {
    let menuGrid = '';

    for (let i = 0; i < menus.length; i++) {
        if (selectedCategory !== 'All' && menus[i].category !== selectedCategory) {
            continue;
        }

        const searchableText = `${menus[i].name} ${menus[i].description} ${menus[i].variants.map((variant) => variant.description).join(' ')}`.toLowerCase();
        if (searchTerm && !searchableText.includes(searchTerm)) {
            continue;
        }

        let menuVariantList = '';
        for (let j = 0; j < menus[i].variants.length; j++) {

            const qtyId = `qty-${i}-${j}`;

            menuVariantList += `
                <div class="menu-price-row">
                    <div class="price-description">${menus[i].variants[j].description}</div>
                    <div class="price-and-qty">
                        <h3 class="price">${formatPriceK(menus[i].variants[j].price)}</h3>
                        <button onclick="substractQty(${i}, ${j})">
                            <span class="material-symbols-outlined">
                                do_not_disturb_on
                            </span>
                        </button>
                        <span class="qty" id="${qtyId}">0</span>
                        <button onclick="addQty(${i}, ${j})">
                            <span class="material-symbols-outlined">
                                add_circle
                            </span>
                        </button>
                    </div>
                </div>
            `;
        }

        menuGrid += `
            <div class="menu-card">
                <img src="${menus[i].photoUrl}" alt="${menus[i].name}" id="pic">
                <h3 class="menu-name">${menus[i].name}</h3>
                <p class="menu-description">${menus[i].description}</p>
                ${menuVariantList}
            </div>
        `;
    }

    document.getElementById('menu-grid').innerHTML = menuGrid || '<div class="no-results">No menu matches your search right now.</div>';
}

function checkout() {
    let total = 0;
    for (let i = 0; i < menus.length; i++) {
        const m = menus[i];
        for (let j = 0; j < m.variants.length; j++) {
            const v = m.variants[j];
            total += cart[i][j] * v.price;
        }
    }

    if (total <= 0) {
        alert('Select at least 1 menu variant first.');
        return;
    }

    const params = new URLSearchParams();
    const tableNumberInput = document.getElementById('table-number');
    const tableNumber = tableNumberInput ? tableNumberInput.value.trim() : '';

    params.set('cart', JSON.stringify(cart));
    if (tableNumber) {
        params.set('tableNumber', tableNumber);
    }
    window.location.href = `order-confirmation/index.html?${params.toString()}`;
}