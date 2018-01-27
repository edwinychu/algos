let maxSumSubsequence = (array) => {
  let dp = [];
  dp[0] = array[0];
  let maxSoFar;
  for (let i=1; i<array.length; i++) {
    //first we gotta get the maxSoFar up until that subarray 
    maxSoFar = Math.max(array[i], dp[i-1]);
    if (i >= 2) {
      //then, compare compare that maxSoFar with (array[i] and dp[i-2]);
      //the new max at that index will be whichever is bigger 
      dp[i] = Math.max(maxSoFar, array[i] + dp[i-2]);
    } else {
      dp[i] = maxSoFar;
    }
  }
  console.log(array)
  console.log(dp)
  dp = dp.sort((a,b) => { return a - b });
  return dp[dp.length - 1];
}
const arr2 = [1, -1, 6, -4, 2, 2];
const arr = [1, 6, 10, 14, -5, -1, 2, -1, 3];
console.log(maxSumSubsequence(arr2));