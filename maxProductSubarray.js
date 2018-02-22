/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  if (nums.length === 1) return nums[0];
  let mult = 1;
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
      
    //multiply your running mult by nums[i]
    mult *= nums[i];

    //max will be the bigger between your running mult total vs max so far
    max = Math.max(max, mult);

    //if number was 0, then reset mult to 1
    if (nums[i] === 0) {
      mult = 1;
    }
  }
  mult = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    mult *= nums[i];
    max = Math.max(max, mult);
    if (nums[i] === 0) {
      mult = 1;
    }
  }
  return max;
};
