function calculateBill() {
  const units = Number(document.getElementById("units").value);

  let subtotal = 0;

  let slab1Units = 0;
  let slab2Units = 0;
  let slab3Units = 0;
  let slab4Units = 0;

  let slab1Charge = 0;
  let slab2Charge = 0;
  let slab3Charge = 0;
  let slab4Charge = 0;

  if (units <= 50) {
    slab1Units = units;
  } else {
    slab1Units = 50;
  }

  slab1Charge = slab1Units * 0.5;

  if (units > 50) {
    slab2Units = Math.min(units - 50, 150);

    slab2Charge = slab2Units * 0.75;
  }

  if (units > 200) {
    slab3Units = Math.min(units - 200, 250);

    slab3Charge = slab3Units * 1.2;
  }

  if (units > 450) {
    slab4Units = units - 450;

    slab4Charge = slab4Units * 1.5;
  }

  subtotal = slab1Charge + slab2Charge + slab3Charge + slab4Charge;

  const surcharge = subtotal * 0.2;

  const total = subtotal + surcharge;

  document.getElementById("slab1").innerText =
    `First 50 Units : ${slab1Units} Units × ₹0.50 = ₹${slab1Charge.toFixed(2)}`;

  document.getElementById("slab2").innerText =
    `51-200 Units : ${slab2Units} Units × ₹0.75 = ₹${slab2Charge.toFixed(2)}`;

  document.getElementById("slab3").innerText =
    `201-450 Units : ${slab3Units} Units × ₹1.20 = ₹${slab3Charge.toFixed(2)}`;

  document.getElementById("slab4").innerText =
    `Above 450 Units : ${slab4Units} Units × ₹1.50 = ₹${slab4Charge.toFixed(2)}`;

  document.getElementById("subtotal").innerText =
    `Subtotal : ₹${subtotal.toFixed(2)}`;

  document.getElementById("surcharge").innerText =
    `20% Surcharge : ₹${surcharge.toFixed(2)}`;

  document.getElementById("total").innerText =
    `Grand Total : ₹${total.toFixed(2)}`;

  document.getElementById("billCard").style.display = "block";
}

function resetBill() {
  document.getElementById("units").value = "";

  document.getElementById("billCard").style.display = "none";
}
