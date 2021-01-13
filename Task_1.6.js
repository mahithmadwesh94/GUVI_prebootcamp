//Convert the string to integer

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


let stringVariable = `I am 25 years old. 
You are 30 years old.`;


console.log(parseInt(stringVariable));//logs NaN
console.log(Number(stringVariable));//logs NaN
console.log(+(stringVariable));//logs NaN
 
 
});
