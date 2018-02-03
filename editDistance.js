var minDistance = function(word1, word2) {
  let dp = [[]];
  word1 = word1.split("");
  word2 = word2.split("");

  word1.unshift("");
  word2.unshift("");

  //populate dp grid
  for (let i = 0; i < word1.length; i++) {
    dp[i] = [i];
  }
  for (let j = 0; j < word2.length; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i < word1.length; i++) {
    for (let j = 1; j < word2.length; j++) {
      if (word1[i] === word2[j]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j - 1], dp[i - 1][j]) + 1;
      }
    }
  }

  return dp[dp.length - 1][dp[0].length - 1];
};

const word1 = 'abcd';
const word2 = 'aed';
const f = minDistance(word1, word2);
console.log(f);
