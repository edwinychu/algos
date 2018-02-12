const maxSum = (array) => {
  let dp = [];
  for (let i=0; i<array.length + 2; i++) {
    dp[i] = 0;
  }
  console.log(dp);
  for (let i=2; i < dp.length; i++) {
    dp[i] = array[i-2] + Math.max(dp[i-1], dp[i-2]);
  }
  console.log(dp);
  return Math.max(dp[dp.length - 1], dp[dp.length - 2]);

}

const array = [-1,-2,-3,-4,-5];
const f = maxSum(array);
console.log(f);