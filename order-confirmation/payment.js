const params = new URLSearchParams(window.location.search);
const bankName = params.get('bank') || 'BCA';
const accountName = params.get('name') || 'Kongkow Cafe';
const bankAccountNumber = params.get('number') || '43734895-70';
const amount = params.get('amount') || '0';
const reference = params.get('reference') || 'ORDER-0000';

const elBank = document.getElementById('bankName');
const elAccount = document.getElementById('accountName');
const elNumber = document.getElementById('bankAccountNumber');
const elAmount = document.getElementById('amountValue');
const elReference = document.getElementById('referenceValue');

if (elBank) elBank.textContent = bankName;
if (elAccount) elAccount.textContent = accountName;
if (elNumber) elNumber.textContent = bankAccountNumber;
if (elAmount) elAmount.textContent = amount;
if (elReference) elReference.textContent = reference;

const copyButton = document.getElementById('copyAccount');
if (copyButton) {
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
}