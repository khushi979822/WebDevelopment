var a = 10;
console.log(a); // 10
console.log(b); // undefined (due to hoisting)
var b = 20;
console.log(a); // 10
console.log(b); // 20

let test = "Hello khushi its a Global variable";

function classA() {
  console.log("classA", test);
}
classA(); // calling the function before its declaration (hoisting)

function classB() {
  console.log("ClassB", test);
}
classB(); // calling the function after its declaration

function classC() {
  let test1 = "Hello khushi its a Local variable";
  console.log("ClassC", test1);
  console.log("ClassC", test);
}
classC(); // calling the function after its declaration

function classD() {
  // block scope
  console.log("ClassD", test);
  {
    let v = 10;
    console.log(v); // 10
  }
}
classD(); // calling the function after its declaration

function classE() {
  console.log("ClassE", test);
}
classE(); // calling the function after its declaration

function classF() {
  console.log("ClassF", test);
}
classF(); // calling the function after its declaration
