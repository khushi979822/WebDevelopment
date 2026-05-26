let countryCode = {
  inr: "IN",
  usd: "US",
  eur: "EU",
  gbp: "GB",
};

function updateFlag() {
  let from = document.getElementById("fromCurrency").value;

  let to = document.getElementById("toCurrency").value;

  document.getElementById("flag1").src =
    `https://flagsapi.com/${countryCode[from]}/flat/64.png`;

  document.getElementById("flag2").src =
    `https://flagsapi.com/${countryCode[to]}/flat/64.png`;
}

document.getElementById("fromCurrency").addEventListener("change", updateFlag);

document.getElementById("toCurrency").addEventListener("change", updateFlag);

async function convertCurrency() {
  let amount = document.getElementById("amount").value;

  let from = document.getElementById("fromCurrency").value;

  let to = document.getElementById("toCurrency").value;

  let response = await fetch(
    `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`,
  );

  let data = await response.json();

  let rate = data[from][to];

  let total = amount * rate;

  document.getElementById("result").innerHTML =
    `Converted Amount : ${total.toFixed(2)} ${to.toUpperCase()}`;
}

function swapCurrency() {
  let from = document.getElementById("fromCurrency");

  let to = document.getElementById("toCurrency");

  let temp = from.value;

  from.value = to.value;

  to.value = temp;

  updateFlag();
}
