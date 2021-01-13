//Area Of Isosceles Triangle


function areaOfTriange(side1,side2,side3){
  
  let s = (side1+side2+side3)/2;

  let area = Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
  return area;
}
