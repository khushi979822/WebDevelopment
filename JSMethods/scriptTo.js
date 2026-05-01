const abc = function () {
  console.log("Hello Khushi");
};

console.log(abc); // function expression
abc(); // calling the function

let add = function (x, y) {
  return x + y;
};
console.log(add); // function expression
console.log(add(2, 3)); // function declaration

const arrowfun = () => {
  console.log("This is an arrow function");
};
arrowfun(); // calling the arrow function

const arrowfun2 = (x, y) => {
  return x + y;
};
console.log(arrowfun2(5, 10)); // calling the arrow function with parameters

const arrowfun3 = (x, y) => x + y; // concise body syntax
console.log(arrowfun3(7, 8)); // calling the concise arrow function
