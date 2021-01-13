//What the output?
myobject = {1:one,”11":1,”name”:”arun”}
console.log(myobject.11); //Error
console.log(myobject.name);// will not show due to error


//Add a new key value pair to myobject
//key : ten
//value : ten
myobject = {1:'one',"11":1,"name":"arun"}
myobject.ten = 'ten';
console.log(myobject)


//Write out an object literal to represent the data below.
//Guvi, Geek, 6, IIT-M RP,Chennai.
let guviObject = {firstName:'Guvi',lastName:'Geek',Address:'6, IIT-M RP,Chennai'};


// How would you represent the following data using a combination of object literals and arrays? (You can describe a strategy without typing or writing out the whole thing.)
// Guvi, Geek, 6, IIT-M RP,Chennai.
// Amazon, Inc, 31, SP Infocity, Chennai.
// Google, Alphabet, 34 Amphitheater Parkway, MountainView.
// Tesla, Inc , 32, 333 Santana Row,San Jose.

// How would you represent the following data using a combination of object literals and arrays? (You can describe a strategy without typing or writing out the whole thing.)
// Guvi, Geek, 6, IIT-M RP,Chennai.
// Amazon, Inc, 31, SP Infocity, Chennai.
// Google, Alphabet, 34 Amphitheater Parkway, MountainView.
// Tesla, Inc , 32, 333 Santana Row,San Jose.
let objectArray = [
    {CompanyName:'Guvi Geek',
    Address: '6, IIT-M RP,Chennai'},
    {CompanyName:'Amazon Inc',
    Address: '31, SP Infocity, Chennai'},
    {CompanyName:'Google',
    parentCompany:'Alphabet',
    Address: '34 Amphitheater Parkway, MountainView'},
    {CompanyName:'Tesla Inc',
    Address: '32, 333 Santana Row,San Jose'}
]



