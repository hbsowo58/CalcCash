const tax = document.querySelector(".tax")
const TAX = Number(tax.value)

let debounce = null;

// const button = document.querySelector(".button")
const money = document.querySelector(".money")

money.addEventListener("keypress", function(){
    const result = document.querySelector(".result");
    const MONEY = Number(money.value)

    result.textContent = MONEY - (TAX * MONEY)/100
})

money.addEventListener('keyup', keyUpFn);

function keyUpFn(el) {
    console.log(el.target.value)
    clearTimeout(debounce);
    debounce = setTimeout(() => {
            const result = document.querySelector(".result");
            const MONEY = Number(el.target.value)
            result.textContent = MONEY - (TAX * MONEY)/100
        }, 0);
    
}
