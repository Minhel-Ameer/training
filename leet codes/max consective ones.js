var findMaxConsecutiveOnes = function(nums) {
  
  if (nums.length == 1) {
 if (nums[0] == 1) {
   return(1)
 } else {
   return(0)
 }
} else {
 let aar = nums.join('');
 aar = aar.split(0);
 let consec = aar[0].length;
 for (let i = 0; i < aar.length; i++) {
   if(aar[i].length>consec)
   {
     consec = aar[i].length;
   }
 }
 return(consec);
}

};
