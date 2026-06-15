let cart = [];

loadCart();

function loadCart() {
    const params = new URLSearchParams(window.location.search);
    cart = JSON.parse(params.get('cart'));

    let display = '';

    let totalItem = 0;
    let grandTotal = 0;

    for (let i = 0; i < menus.length; i++) {
        const e = menus[i];

        for (let j = 0; j < e.variants.length; j++) {
            const f = e.variants[j];

            if (cart[i][j] > 0) {

                const qty = cart[i][j];

                const subtotal = f.price * qty;

                totalItem += qty;
                grandTotal += subtotal;

                display += `
                    <div class="item">
                        <div>
                            <strong>${e.name}</strong><br>
                            <small>${f.description}</small><br>
                            <small>
                                $ ${f.price.toLocaleString()} x ${qty}
                            </small>
                        </div>

                        <div>
                            $ ${subtotal.toLocaleString()}
                        </div>
                    </div>
                `;
            }
        }
    }

    document.getElementById('cart').innerHTML = display;

    document.getElementById('totalItem').innerHTML = `
        Total Item : ${totalItem}<br>
        Grand Total : $ ${grandTotal.toLocaleString()}
    `;

    const today = new Date();

    document.getElementById('date').innerHTML =
        today.toLocaleString('id-ID');
}