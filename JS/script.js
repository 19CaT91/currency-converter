let currencyElement = document.querySelector(".js-currency");
let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let resultElement = document.querySelector(".js-result");
let resetElement = document.querySelector(".js-reset");

let USD = 4.1665;
let GBP = 5.1046;
let EUR = 4.4433;
let JPY = 2.7610;
let CHF = 4.6191;
let INR = 0.0494;
let TND = 1.3076;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = amountElement.value;
    let currency = currencyElement.value;

    switch (currency) {
        case "EUR":
            result = amount / EUR;
            break;
        case "USD":
            result = amount / USD;
            break;
        case "GBP":
            result = amount / GBP;
            break;
        case "JPY":
            result = amount / JPY;
            break;
        case "CHF":
            result = amount / CHF;
            break;
        case "INR":
            result = amount / INR;
            break;
        case "TND":
            result = amount / TND;
            break;
    }
    resultElement.innerHTML = `<strong> ${result.toFixed(2)} ${currency} </strong>`;
})

console.log(resetElement);

formElement.addEventListener("reset", (event) => {
    console.log('The form has been reset');
    resultElement.innerText = "0.00";
  });
  