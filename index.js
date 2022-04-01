const tax = document.querySelector(".tax")
const money = document.querySelector(".money")
const mileage = document.querySelector(".mileage")
const buy_money = document.querySelector(".buy_money")
const MILEAGE = 30

let debounce = null;

money.addEventListener('keyup', keyUpFn);
buy_money.addEventListener('keyup', keyUpFn);
tax.addEventListener('click', keyUpFn);
mileage.addEventListener('click', keyUpFn);

function keyUpFn() {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
            const TAX = Number(tax.value)
            const result = document.querySelector(".result");
            const efficiency = document.querySelector(".efficiency");
            const MONEY = Number(money.value)
            const BUY_MONEY = Number(buy_money.value)
            const use_cash = document.querySelector(".use_cash")

            if(mileage.checked){
                const SALE_MONEY  = calc(BUY_MONEY, MILEAGE)
                use_cash.textContent = SALE_MONEY
            } else {
                use_cash.textContent = BUY_MONEY
                result.textContent = calc(MONEY, TAX)
            }

            console.dir(use_cash.textContent)
            console.dir(result.textContent)
            efficiency.textContent = Number(result.textContent) / Number(use_cash.textContent)

        }, 0);
    
}

const calc = (MONEY, TAX) => {
    return MONEY - (TAX * MONEY)/100
}