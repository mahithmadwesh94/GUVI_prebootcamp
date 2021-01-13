//Program To Calculate CGPA

function calculateCGPA(gradePointsArray ){
  let sum = 0
for(let i=0;i<gradePointsArray.length;i++){
sum += gradePointsArray[i];
}

return sum/gradePointsArray.length;

}
