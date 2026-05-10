function calculateGrossSalary(basic) {
  let hra = 0;
  let da = 0;

  if (basic < 10000) {
    hra = basic * 0.2;
    da = basic * 0.8;
  } else if (basic <= 20000) {
    hra = basic * 0.25;
    da = basic * 0.9;
  } else {
    hra = basic * 0.3;
    da = basic * 0.95;
  }

  const gross = basic + hra + da;

  return {
    basic,
    hra,
    da,
    gross,
  };
}

function startCalculation() {
  const basicSalary = Number(document.getElementById("basicSalary").value);

  const error = document.getElementById("error");

  const success = document.getElementById("success");

  error.innerText = "";

  success.classList.add("d-none");

  if (
    document.getElementById("basicSalary").value === "" ||
    isNaN(basicSalary) ||
    basicSalary < 0
  ) {
    error.innerText = "Please enter a valid non-negative salary";

    document.getElementById("resultCard").classList.add("d-none");

    return;
  }

  const button = document.getElementById("calculateBtn");

  button.disabled = true;

  button.innerHTML = `<span class="spinner-border spinner-border-sm"></span>
     Calculating...`;

  setTimeout(() => {
    const result = calculateGrossSalary(basicSalary);

    document.getElementById("basic").innerText =
      `Basic Salary : ${formatCurrency(result.basic)}`;

    document.getElementById("hra").innerText =
      `HRA : ${formatCurrency(result.hra)}`;

    document.getElementById("da").innerText =
      `DA : ${formatCurrency(result.da)}`;

    document.getElementById("gross").innerText =
      `Gross Salary : ${formatCurrency(result.gross)}`;

    document.getElementById("resultCard").classList.remove("d-none");

    success.classList.remove("d-none");

    button.disabled = false;

    button.innerHTML = "Calculate Gross Salary";
  }, 500);
}

function formatCurrency(amount) {
  return amount.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  });
}

function resetForm() {
  document.getElementById("basicSalary").value = "";

  document.getElementById("error").innerText = "";

  document.getElementById("resultCard").classList.add("d-none");

  document.getElementById("success").classList.add("d-none");
}
