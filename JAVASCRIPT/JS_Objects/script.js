//JSON - JavaScript Object Notation
// let fd = [
//   ["Khushi Kumari", "11-03-2006", "9798227499", "Student", "Bihar", "India"],
//   ["Rohit Kumar", "15-08-2005", "9876543210", "Student", "Bihar", "India"],
//   ["Anjali Singh", "20-12-2004", "9876543211", "Student", "Bihar", "India"],
//   ["Rahul Sharma", "05-05-2006", "9876543212", "Student", "Bihar", "India"],
//   ["Pooja Verma", "30-09-2005", "9876543213", "Student", "Bihar", "India"],
// ];
// fd.forEach((element) => console.log(element[0]));

// // Using JSON
// // bracket notation
// // Dot Notation only work on JSON
// console.log("Using JSON");
let fy = [
  {
    name: "Mann Verma",
    dob: "08-08-2005",
    mobile: 8839486316,
    city: "Bhopal",
    profession: "Teacher",
  },
  {
    name: "Khushi Kumari",
    dob: "15-12-2002",
    mobile: 9876543210,
    city: "Indore",
    profession: "Engineer",
  },
  {
    name: "Aarav Sharma",
    dob: "21-03-1998",
    mobile: 9123456780,
    city: "Delhi",
    profession: "Doctor",
  },
  {
    name: "Priya Singh",
    dob: "10-11-2001",
    mobile: 9988776655,
    city: "Mumbai",
    profession: "Designer",
  },
  {
    name: "Rohan Patel",
    dob: "05-06-1995",
    mobile: 9012345678,
    city: "Ahmedabad",
    profession: "Developer",
  },
];

fy.forEach((element) => {
  console.log(element.name);
});

fy.map((element, idx) => {
  console.log(idx);
  console.log(element.city);
});

// console.log(fy);
// console.log(fy[1].name);
// console.log(fy[1]["name"]);

// let khushi = {
//   name: "Khushi Kumari",
//   dob: "11-03-2006",
//   mobile: 9798227499,
//   city: "Bhopal",
//   profession: "Software Engineer",
// };
// console.log(Object.keys(khushi));
// console.log(Object.values(khushi));
// console.log(Object.entries(khushi));

let arr = [2, 4, 6, 8, 30, 20, 40, 10, 23, 60, 40, 30];
arr.sort((a, b) => a - b);
console.log(arr);

console.log(arr.find((val) => val === 30));
console.log(arr.findIndex((val) => val === 30));
console.log(arr.findLastIndex((val) => val === 30));
console.log(arr.filter((val) => val > 30));

console.log(arr.slice(2, 5));
let ab = "This is a web - development course";
console.log(ab.split(" "));
console.log(ab.split("- "));

let str = "This is a String";
console.log(str.charAt(5));
console.log(str.toUpperCase());
console.log(str.toLowerCase());

let a = 3.14;
console.log(a);

console.log(typeof a);
let b = a.toString();
console.log(b);
console.log(b.charAt(2));

let c = 3.1478990874899000000233;

console.log(c.toFixed(2));

let fullname = "khushi kumari";
console.log("My name is " + fullname);
