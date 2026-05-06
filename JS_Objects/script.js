let fd = [
  ["Khushi Kumari", "11-03-2006", "9798227499", "Student", "Bihar", "India"],
  ["Rohit Kumar", "15-08-2005", "9876543210", "Student", "Bihar", "India"],
  ["Anjali Singh", "20-12-2004", "9876543211", "Student", "Bihar", "India"],
  ["Rahul Sharma", "05-05-2006", "9876543212", "Student", "Bihar", "India"],
  ["Pooja Verma", "30-09-2005", "9876543213", "Student", "Bihar", "India"],
];
fd.forEach((element) => console.log(element[0]));

// Using JSON
console.log("Using JSON");
let fy = [
  {
    name: "Mann Verma",
    dob: "08-08-2005",
    mobile: 8839486316,
    city: "Bhopal",
    profession: "Teacher",
  },
  {
    name: "Khushi Kumaari",
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

console.log(fy);