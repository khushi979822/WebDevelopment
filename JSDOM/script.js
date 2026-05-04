function Submit() {
  console.log("Submit button Clicked");

  const fn = document.getElementById("fullName").value;
  console.log(fn);

  document.getElementById("myData").innerText = fn;
  document.getElementById("fullName").value = "";
}
