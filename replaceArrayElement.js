//Starting from the existing friends variable below, change the element that is currently “Mari” to “Munnabai”.

let friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];
    function dataHandling(input){
    for (var i = 0; i < input.length; i++) {
    if(input[i]=== 'Mari'){
        input[i] = "Munnabai";
    }
    }
    }
    dataHandling(friends);
   console.log(friends);
