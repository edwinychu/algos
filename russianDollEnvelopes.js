/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
  if (envelopes.length === 0) return 0
  envelopes = envelopes.sort((a, b) => {
    return a[0] - b[0]
  })
  let dp = []
  dp[0] = 1
  for (let i = 1; i < envelopes.length; i++) {
    let max = 0
    for (let j = 0; j < i; j++) {
      if (
        envelopes[i][0] > envelopes[j][0] &&
        envelopes[i][1] > envelopes[j][1]
      ) {
        max = Math.max(max, dp[j])
      }
    }
    dp[i] = max + 1
  }
  return Math.max(...dp)
}
