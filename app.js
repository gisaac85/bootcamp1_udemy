alert("Hello, This is my first JS app!");
console.log("Hello Isaac from CONSOLE!");

var fName = prompt("Enter Your First Name?");
var lName = prompt("Enter Your Last Name?");
var age = parseInt(prompt("Enter your age?"));

var fullName = fName + ' ' + lName
var ageInDays = age * 365;

console.log("Your Full Name is: " + fullName);
console.log("Your Age= " + age + " years old");
console.log("Your Age in Days = " + ageInDays);