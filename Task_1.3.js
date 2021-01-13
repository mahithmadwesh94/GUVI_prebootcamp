//Declare variables to store your first name, last name, marital status, country and age in multiple lines

// Getting input via STDIN
const readline = require("readline");
const userInput = [];
const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
  userInput.push(data);
});


inp.on("close", () => {

let firstName;
let lastName;
let maritalStatus;
let country;
let age;
 
 
});
