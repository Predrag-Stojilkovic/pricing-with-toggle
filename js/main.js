const toggle = document.querySelector(`#toggle`)
const priceTags = document.querySelectorAll(`.price-tag`)
const prices = {
    monthlyPrices: [19.99, 24.99, 39.99],
    annuallyPrices: [199.99, 249.99, 399.99]
}

toggle.addEventListener(`click`, () => getPrices())

function getPrices() {
    if (toggle.checked) {
        for (let i = 0; i < priceTags.length; i++) {
            priceTags[i].innerHTML = prices.monthlyPrices[i]
        }
    } else {
        for (let i = 0; i < priceTags.length; i++) {
            priceTags[i].innerHTML = prices.annuallyPrices[i]
        }
    }
}

getPrices()