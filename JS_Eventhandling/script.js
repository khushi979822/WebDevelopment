function BulbON() {
  document.getElementById("bulb1").style.backgroundColor = "yellow";
}

function BulbOFF() {
  document.getElementById("bulb1").style.backgroundColor = "white";
}

function Warning() {
  document.getElementById("bulb1").style.backgroundColor = "red";
}

function Success() {
  document.getElementById("bulb1").style.backgroundColor = "green";
}

function Secondary() {
  document.getElementById("bulb1").style.backgroundColor = "blue";
}


document.getElementById("Warning").addEventListener("click", Warning());
document.getElementById("Success").addEventListener("click", Success());
document.getElementById("Secondary").addEventListener("click", Secondary());

document
  .getElementById("bulb1Color")
  .addEventListener("change", ChangeBulbColor);

function ChangeBulbColor() {
  const color = document.getElementById("bulb1Color").value;
  document.getElementById("bulb1").style.backgroundColor = color;
}
