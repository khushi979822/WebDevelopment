let fromCurrency = document.getElementById("fromCurrency");
let toCurrency = document.getElementById("toCurrency");
let flag1 = document.getElementById("flag1");
let flag2 = document.getElementById("flag2");
let result = document.getElementById("result");
let errorMsg = document.getElementById("errorMsg");

let currencyData = [];

async function loadCurrencies() {
  let response = await fetch("codes.json");
  currencyData = await response.json();

  currencyData.forEach((currency) => {
    let option1 = document.createElement("option");
    option1.value = currency.currency_code.toLowerCase();
    option1.innerHTML = `${currency.country} (${currency.currency_code})`;

    let option2 = document.createElement("option");
    option2.value = currency.currency_code.toLowerCase();
    option2.innerHTML = `${currency.country} (${currency.currency_code})`;

    fromCurrency.appendChild(option1);
    toCurrency.appendChild(option2);
  });

  fromCurrency.value = "inr";
  toCurrency.value = "usd";

  updateFlags();
}

function getCountryCode(currencyCode) {
  let country = currencyData.find(
    (item) => item.currency_code.toLowerCase() === currencyCode,
  );

  return country.country_code;
}

function updateFlags() {
  let fromCode = getCountryCode(fromCurrency.value);
  let toCode = getCountryCode(toCurrency.value);

  flag1.src = `https://flagsapi.com/${fromCode}/flat/64.png`;
  flag2.src = `https://flagsapi.com/${toCode}/flat/64.png`;
}

fromCurrency.addEventListener("change", updateFlags);
toCurrency.addEventListener("change", updateFlags);

async function convertCurrency() {
  let amount = document.getElementById("amount").value;
  let from = fromCurrency.value;
  let to = toCurrency.value;

  errorMsg.innerHTML = "";
  result.innerHTML = "Converted Amount : 0";

  if (amount === "") {
    errorMsg.innerHTML = "Please enter amount";
    return;
  }

  if (amount <= 0) {
    errorMsg.innerHTML = "Amount must be greater than 0";
    return;
  }

  let apiUrl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`;

  let response = await fetch(apiUrl);
  let data = await response.json();

  let rate = data[from][to];
  let finalAmount = amount * rate;

  result.innerHTML = `Converted Amount : ${finalAmount.toFixed(2)} ${to.toUpperCase()}`;
}

function swapCurrency() {
  let temp = fromCurrency.value;

  fromCurrency.value = toCurrency.value;
  toCurrency.value = temp;

  updateFlags();

  if (document.getElementById("amount").value !== "") {
    convertCurrency();
  }
}

loadCurrencies();
