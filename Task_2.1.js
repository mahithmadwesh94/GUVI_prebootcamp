//Square of a number


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



function returnSquare(num){
    return num*num;
}

console.log(returnSquare(2));// logs 4
console.log(returnSquare(-1));// logs 1


});




