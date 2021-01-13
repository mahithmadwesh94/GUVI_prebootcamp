//Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.

const friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
];
function dataHandling(input){
for (var i = 0; i < input.length; i++) {
if(input[i] === "CaptianAmerica"){
   
    break;
}else{
    console.log(input[i]);
}

}

}
dataHandling(friends);
