let n = 5;
if (n > 0) {
  console.log("Positive Integer");
} else {
  console.log("Negative Integer");
}

let age = 20;
if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}

let num = 10;
if (num % 2 === 0) {
  console.log("Even Number");
} else {
  console.log("Odd Number");
}

let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: Fail");
}

let user = "abcde";
let pass = "12345";
if (user === "abcde" && pass === "12345") {
  console.log("Login Successful");
} else {
  console.log("Login Failed");
}

let a = 5;
b = 6;
console.log(a > 2 && b < 10); // true
console.log(a < 2 || b > 10); // false

let data;

let name = "Khushi";
data = name || "N/A";
// if (name) {
//   data = name;
// } else {
//   data = "N/A";
// }
console.log(data);
