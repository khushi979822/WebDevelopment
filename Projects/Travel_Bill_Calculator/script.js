function calculateBill() {
  const km = Number(document.getElementById("km").value);

  const error = document.getElementById("error");

  error.innerText = "";

  if (document.getElementById("km").value === "" || isNaN(km) || km < 0) {
    error.innerText = "Please enter a non-negative number of kilometres";

    document.getElementById("resultCard").style.display = "none";

    return;
  }

  let slab1Km = 0;
  let slab2Km = 0;
  let slab3Km = 0;

  let slab1Cost = 0;
  let slab2Cost = 0;
  let slab3Cost = 0;

  if (km <= 10) {
    slab1Km = km;
  } else {
    slab1Km = 10;
  }

  slab1Cost = slab1Km * 11;

  if (km > 10) {
    slab2Km = Math.min(km - 10, 40);

    slab2Cost = slab2Km * 10;
  }

  if (km > 50) {
    slab3Km = km - 50;

    slab3Cost = slab3Km * 8;
  }

  const total = slab1Cost + slab2Cost + slab3Cost;

  document.getElementById("slab1").innerText =
    `${slab1Km} km × Rs.11 = Rs.${slab1Cost.toLocaleString(undefined, {
      minimumFractionDigits: 2,
    })}`;

  document.getElementById("slab2").innerText =
    `${slab2Km} km × Rs.10 = Rs.${slab2Cost.toLocaleString(undefined, {
      minimumFractionDigits: 2,
    })}`;

  document.getElementById("slab3").innerText =
    `${slab3Km} km × Rs.8 = Rs.${slab3Cost.toLocaleString(undefined, {
      minimumFractionDigits: 2,
    })}`;

  document.getElementById("total").innerText =
    `Total Bill = Rs. ${total.toLocaleString(undefined, {
      minimumFractionDigits: 2,
    })}`;

  document.getElementById("resultCard").style.display = "block";
}
