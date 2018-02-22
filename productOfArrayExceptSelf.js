/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let arr = [];
  let mult = 1;
  for (let i = 0; i < nums.length; i++) {
    arr[i] = 1;
    arr[i] *= mult;
    mult *= nums[i];
  }

  mult = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    console.log(mult);
    arr[i] *= mult;
    mult *= nums[i];
  }
  return arr;
};
