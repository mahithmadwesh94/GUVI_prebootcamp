/*Input can be as 1 1 1
                1 1 1
                1 1 1*/
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
 
 let sum = 0;
 
 for(i=0;i<userInput.length;i++){
     for(j=0;j<userInput[i].split(' ').length;j++){
         sum += parseInt(userInput[i].split(' ')[j]);
     }
 }
 
 console.log(sum);
 
 
});


