var maxArea = function(height) {
  let output=0;
let i=0;
let j=height.length-1;
do
{
//console.log(i,j)
 area=(j-i)*Math.min(height[i],height[j])
//console.log(area)
if(area>output){
  output=area;
  
}
if(height[i]>height[j]){
  j--;
}
else{
  i++;
}
}
while (i<j)
return(output)
};
