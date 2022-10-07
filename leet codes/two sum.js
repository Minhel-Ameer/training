var twoSum = function(nums, target) {
  let j = 0;
  let output = [];
  for (let i = 0; i < nums.length; i++) {
  
    if (nums.length > 2) {
  
      nums.forEach(elem => (nums[i] + elem) == target && ((i != nums.indexOf(elem))) ? (output = [nums.indexOf(elem), i]) : null)
    } else if (nums[0] + nums[1] == target) {
      output = [0, 1]
    }
  
  }
  return(output)
  
  };