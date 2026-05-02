let a;
let b;
let c;

a = 10;
console.log(a); // 10
console.log(b); // undefined
console.log(c); // undefined

b = 15;
console.log(a); // 10
console.log(b); // 15
console.log(c); // undefined

c = 20;
console.log(a); // 10
console.log(b); // 15
console.log(c); // 20

abc(); // calling the function before its declaration (hoisting)
function abc() {
  console.log("Hey! Khushi");
}

function submit() {
  console.log("Button clicked!");
}