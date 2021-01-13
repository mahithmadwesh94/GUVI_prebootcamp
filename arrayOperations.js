var friends1 = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];
    var friends2 = [
    "Gabbar",
    "Rajinikanth",
    "Mass",
    "Spiderman",
    "Jeff",
    "ET"
    ];
    function dataHandling(arr1,arr2){
   
      let arr = arr1.concat(arr2);

        return arr.sort();

    }
    
    
    let finalSortedArray = dataHandling(friends1,friends2);
    // console.log(finalSortedArray);
    
    
    // 1. Get the first item, the middle item and the last item of the array
        let firstItem = finalSortedArray[0];
        let lastItem = finalSortedArray[finalSortedArray.length-1];
        let mid = Math.floor(0 + finalSortedArray.length)/2
        
        let midElement = finalSortedArray[mid];
        
        // console.log(firstItem, lastItem, midElement)

// 2. Add your name to the end of the friends array, and add another name to beginning.

finalSortedArray.push('Mahith');

finalSortedArray.unshift('BanuPrakash');

// console.log(finalSortedArray)
// 3. Add Mr or Ms to the names in the friends array.
for(let i=0;i<finalSortedArray.length;i++){
    if(finalSortedArray[i] === "MaryJane" || finalSortedArray[i] === "Mari" ){
        finalSortedArray[i] = 'Ms. '+finalSortedArray[i];
    }else{
        finalSortedArray[i] = 'Mr. '+finalSortedArray[i];
    }
}

console.log(finalSortedArray)

// 4. Concat all the names the friends array and return as comma “,” seperated string.
finalSortedArray.join(',');
// 5. Find the friends names who has letter ‘a’ and return the list.

let names = [];

for(let i=0;i<finalSortedArray.length;i++){
    if(finalSortedArray[i].includes('a')){
        names.push(finalSortedArray[i]);
    }
}
// console.log(names);

// 6. Find the avg length of all the friends names. Get the individual length of the names and do the avg.

let nameLengthArray = [];
for(let i=0;i<finalSortedArray.length;i++){
   nameLengthArray.push(finalSortedArray[i].length)
}

let sum =0
for(let i=0;i<nameLengthArray.length;i++){
    sum += nameLengthArray[i];
}

// console.log("Average Names length is: "+(sum/nameLengthArray.length).toFixed(3))



// 7. Find the names and return the list starting with letter M.

let namesArray = [];
for(let i=0;i<finalSortedArray.length;i++){
    if(finalSortedArray[i].split('. ')[1].startsWith('M')){
        namesArray.push(finalSortedArray[i]);
    }    
}

console.log(namesArray);


// 8. Find the name with max characters and return the name.
console.log(finalSortedArray.reduce(
    function (a, b) {
        return a.split('. ')[1].length > b.split('. ')[1].length ? a : b;
    }
));

// 9. Find the name with min characters and return the name.
console.log(finalSortedArray.reduce(
    function (a, b) {
        return a.split('. ')[1].length < b.split('. ')[1].length ? a : b;
    }
));
