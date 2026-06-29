let cart = [];

loadCart();

function loadCart() {
    const params = new URLSearchParams(window.location.search);
    cart = JSON.parse(params.get('cart'));

    let display = '';
    const orderLines = ['New order from Kongkow Cafe'];

    let totalItem = 0;
    let grandTotal = 0;

    const today = new Date();
    orderLines.push(`Date: ${today.toLocaleString('id-ID')}`);
    orderLines.push('');

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

                orderLines.push(`${e.name} - ${f.description} x${qty} = Rp ${subtotal.toLocaleString('id-ID')}`);
            }
        }
    }

    document.getElementById('cart').innerHTML = display;

    document.getElementById('totalItem').innerHTML = `
        Total Item : ${totalItem}<br>
        Grand Total : Rp ${grandTotal.toLocaleString('id-ID')}
    `;

    document.getElementById('date').innerHTML =
        today.toLocaleString('id-ID');

    orderLines.push('');
    orderLines.push(`Total items: ${totalItem}`);
    orderLines.push(`Grand total: Rp ${grandTotal.toLocaleString('id-ID')}`);

    const whatsappButton = document.getElementById('whatsappButton');
    const orderMessage = orderLines.join('\n');
    const whatsappUrl = `https://wa.me/62816605733?text=${encodeURIComponent(orderMessage)}`;

    if (whatsappButton) {
        whatsappButton.href = whatsappUrl;
        whatsappButton.setAttribute('title', 'Send this order to WhatsApp');
    }

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

    const localQrAsset = '../assets/My First Qr Code With The Link.png';

    paymentLink.href = qrData;
    paymentLink.textContent = 'Open payment page';
    paymentQr.src = localQrAsset;
    paymentQr.alt = 'Payment QR code';
}