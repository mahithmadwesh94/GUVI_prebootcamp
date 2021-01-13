//We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.

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
    console.log(dataHandling(friends1,friends2));// logs in alpahbetical order
