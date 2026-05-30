function greaternum(a, b) {
  if (a > b) {
    console.log(a + " is greater than " + b);
  } else if (b > a) {
    console.log(b + " is greater than " + a);
  } else {
    console.log("Both numbers are equal.");
  }
}
greaternum(10, 20); // calling the function with arguments
greaternum(30, 15); // calling the function with arguments
