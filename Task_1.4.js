//Declare variables to store your first name, last name, marital status, country and age in a single line

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

//Single line variable declaration
let firstName,lastName,maritalStatus,country,age;
 
 
});
