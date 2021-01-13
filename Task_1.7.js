//Write 6 statement which provide truthy & falsey values.




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






