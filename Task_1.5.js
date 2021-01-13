//Declare variables and assign string, boolean, undefined and null data types

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


let stringvar = 'test';//EMptry stringvar

let boolVar = true;//Boolean variable

let someVar;//undefined

let nullVar = null;//null

console.log(stringvar)
console.log(boolVar)
console.log(someVar)
console.log(nullVar)
 
 
});
