//Find the average in the array below.
//Make sure you add only the numbers and do avg.


const friendsInfo = [6, 12, 'Mari', 1, true, 'Munnabai', '200', 'CaptianAmerica', 8, 10];
let sum =0;
let count=0;
for(let i=0;i<friendsInfo.length;i++){
    if(typeof(friendsInfo[i]) == 'number'){
        count++;
        sum += friendsInfo[i];
    }
}

console.log('Average is: '+(sum/count));
