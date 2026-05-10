const randomNumber = Math.floor(Math.random() * 10) + 1;

document.getElementById("guessForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const guess = Number(document.getElementById("guessNumber").value);

  if (guess > randomNumber) {
    alert("OOPS SORRY!! TRY A SMALLER NUMBER");
  } else if (guess < randomNumber) {
    alert("OOPS SORRY!! TRY A LARGER NUMBER");
  } else {
    alert("CONGRATULATIONS! YOU GUESSED THE CORRECT NUMBER");
  }
});
