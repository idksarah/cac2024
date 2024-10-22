const purchase = document.querySelector('.buy');
const payment = document.querySelector('.payment');
const thanks = document.querySelector('.thanks');
const hint = document.querySelector('.hint');

purchase.addEventListener("click", () => {
    payment.classList.remove('hidden');
    thanks.addEventListener("click", () => {
        payment.classList.add('hidden');
        hint.classList.remove('hidden');
    })
})