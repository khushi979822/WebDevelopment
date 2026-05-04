let firstVariable = function (name) {
  console.log("Hello " + name);
};

let anotherVariable = firstVariable;

firstVariable("Khushi"); // calling the function expression through firstVariable
anotherVariable("Misti"); // calling the function expression through another variable
