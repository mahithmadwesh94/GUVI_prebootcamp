//write a code to count the elements in the array . Don’t use length property

function arrayLength(arr){
    let sum = 0

    arr.forEach((e)=>{
        sum++;
    })
    return sum;
}

var myarray=[11,22,33,44,55];
console.log(arrayLength(myarray));// logs 5

var emptyArray = []
console.log(arrayLength(emptyArray));// logs 0
 
