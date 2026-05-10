function calculateTip() {
  const billAmount = Number(document.getElementById("billAmount").value);

  const service = Number(document.getElementById("service").value);

  const persons = Number(document.getElementById("persons").value);

  const totalTip = billAmount * service;

  const tipPerPerson = totalTip / persons;

  document.getElementById("tip").innerText = tipPerPerson.toFixed(2);
}
