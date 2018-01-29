const largestSumSubarray = (num) => {
  let dp = [];
  dp[0] = num[0];
  for (let i=1; i<num.length-1; i++) {
    dp[i] = Math.max(num[i], num[i] + dp[i-1]);
  }
  dp = dp.sort((a,b) => {return a-b});
  return dp[dp.length - 1];
}

console.log(largestSumSubarray([-4,2,-5,1,2,3,6,-5,1]));



