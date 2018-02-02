const longestIncreasingSubsequence = (array) => {
  let dp = [];
  dp[0] = 1;
  let max;
  // let overallMax = 0;
  for (let i=1; i<array.length; i++) {
    max = 0;
    for (let j=0; j < i; j++) {
      if (array[i] > array[j]) {
        max = Math.max(max, dp[j]);
      }
    }
    dp[i] = max + 1;
    // overallMax = Math.max(overallMax, dp[i]);
  }
  dp.sort((a,b) => {return a-b});
  return dp[dp.length - 1];
}


const array = [9,4,10,1,2];
const f = longestIncreasingSubsequence(array);
console.log(f);