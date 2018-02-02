var combinationSum4 = function(nums, target) {
  let dp = [];
  for (let i = 0; i <= target; i++) {
    dp[i] = 0;
  }
  dp[0] = 1;

  for (let i = 1; i <= target; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i - nums[j] >= 0) {
        dp[i] += dp[i - nums[j]];
      }
    }
  }

  return dp[target];
};

const nums = [1,2,3];
const target = 4;
const f = combinationSum4(nums, target);
console.log(f);
