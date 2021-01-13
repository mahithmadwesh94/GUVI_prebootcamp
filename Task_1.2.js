//How to get value of the variable myvar as output

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
 
var myvar= 1;
console.log(myvar);// logs 1
 
 
});


