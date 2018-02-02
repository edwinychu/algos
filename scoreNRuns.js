const scoreNRuns = (runs) => {
  const scores = [1,2,4];
  let results = [];

  const recurse = (currentRuns, possibilities) => {
    if (currentRuns > runs) {
      return;
    }

    if (currentRuns === runs) {
      results.push(possibilities);
      return;
    }

    for (let i=0; i<scores.length; i++) {
      recurse(currentRuns + scores[i], possibilities.concat(scores[i]));
    }
  }

  recurse(0, []);
  return results;
}


// const scoreDP = (runs) => {
//   const scores = [1,2,4];
//   let dp = [];
//   for (let i=0; i<=runs; i++) {
//     dp[i] = 0;
//   }
//   dp[0] = 1;

//   for (let i=0; i<scores.length; i++) {
//     for (let j=1; j<=runs; j++) {
//       if (j >= scores[i]) {
//         dp[j] += dp[ j - scores[i]];
//       }
//     }
//   }
//   return dp[runs];
// }




const runs = 5;
const runs2 = 5;
const runs3 = 1;
const runs4 = 0;
// const f = scoreDP(runs);
const f1 = scoreNRuns(runs2);
const f2 = scoreNRuns(runs3);
const f3 = scoreNRuns(runs4);
// console.log(f);
console.log(f1);
// console.log(f2);
// console.log(f3);
