//Write 6 statement which provide truthy & falsey values.

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



function trueOrFalse(val){
    if(val){
        console.log(true);
    }else{
        console.log(false);
    }
}


//Truthy values
trueOrFalse(1);

trueOrFalse(true);

trueOrFalse({});

trueOrFalse('some string');

trueOrFalse(new Date());

trueOrFalse([]);


//Falsy values
trueOrFalse();

trueOrFalse(false);

trueOrFalse('');

trueOrFalse(null);

trueOrFalse(undefined);

trueOrFalse(NaN);

trueOrFalse(0);


});




