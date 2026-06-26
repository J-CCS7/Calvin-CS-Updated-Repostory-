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
                                Rp ${f.price.toLocaleString('id-ID')} x ${qty}
                            </small>
                        </div>

                        <div>
                            Rp ${subtotal.toLocaleString('id-ID')}
                        </div>
                    </div>
                `;
            }
        }
    }

    document.getElementById('cart').innerHTML = display;

    document.getElementById('totalItem').innerHTML = `
        Total Item : ${totalItem}<br>
        Grand Total : Rp ${grandTotal.toLocaleString('id-ID')}
    `;

    const today = new Date();

    document.getElementById('date').innerHTML =
        today.toLocaleString('id-ID');

    const paymentAmount = `Rp ${grandTotal.toLocaleString('id-ID')}`;
    const paymentUrl = new URL('payment.html', window.location.href);
    paymentUrl.searchParams.set('bank', 'BCA');
    paymentUrl.searchParams.set('name', 'Calvin Carol Sen');
    paymentUrl.searchParams.set('number', '4373489584');
    paymentUrl.searchParams.set('amount', paymentAmount);
    paymentUrl.searchParams.set('reference', `ORDER-${Date.now()}`);

    const paymentLink = document.getElementById('paymentLink');
    const paymentQr = document.getElementById('paymentQr');
    const qrData = paymentUrl.toString();

    paymentLink.href = qrData;
    paymentLink.textContent = 'Open payment page';
    // Use api.qrserver.com to generate a direct QR image for the payment URL
    paymentQr.src = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(qrData)}`;
    paymentQr.alt = 'Payment QR code';
}