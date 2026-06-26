const params = new URLSearchParams(window.location.search);
const bankName = params.get('bank') || 'BCA';
const accountName = params.get('name') || 'Calvin Carol Sen';
const bankAccountNumber = params.get('number') || '4373489584';
const amount = params.get('amount') || '0';
const reference = params.get('reference') || 'ORDER-0000';

document.getElementById('bankName').textContent = bankName;
document.getElementById('accountName').textContent = accountName;
document.getElementById('bankAccountNumber').textContent = bankAccountNumber;
document.getElementById('amountValue').textContent = amount;
document.getElementById('referenceValue').textContent = reference;

const copyButton = document.getElementById('copyAccount');
copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(bankAccountNumber)
        .then(() => {
            copyButton.textContent = 'Copied!';
            setTimeout(() => copyButton.textContent = 'Copy account number', 2000);
        })
        .catch(() => {
            copyButton.textContent = 'Copy failed';
            setTimeout(() => copyButton.textContent = 'Copy account number', 2000);
        });
});
