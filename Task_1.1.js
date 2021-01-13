//Declare four variables without assigning values and print them in console
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
 
 var myVar1;
 var myVar2;
 var myVar3;
 var myVar4;
 
 
 console.log(myVar1);//Undefined
 console.log(myVar2);//Undefined
 console.log(myVar3);//Undefined
 console.log(myVar4);//Undefined
 
 
});
