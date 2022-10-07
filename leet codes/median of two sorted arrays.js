var findMedianSortedArrays = function(nums1, nums2) {
  let output=0;
let arr = nums1.concat(nums2)
arr=arr.sort((a,b)=>(a-b))
//console.log(arr)
let median =((arr.length/2))
//console.log(median)
//console.log(Number.isInteger(median))
if(Number.isInteger(median)){
//console.log("integer")
output=((arr[median-1]+arr[median])/2)
}
else{
median=(Math.floor(median))
output=arr[median]
//console.log("float")
}
return(output)
};
