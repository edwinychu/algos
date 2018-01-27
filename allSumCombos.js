var allSumCombos = function(number) {
  var num = [];
  var result = [];
  for (var i=0; i<number; i++) {
    num[i] = i+1;
  }

  var recurse = function(sum, currentNum, array) {
    if (sum > number) {
      return;
    }
    if (sum === number) {
      result.push(array);
      return;
    }
    //start i from "current number" that we're on for the recursion
    //this ensures that after building up all the combos for one particular number, we will never re-visit it again later on when we're building up combos with higher numbers
    for (var i=currentNum; i<num.length; i++) {
      recurse(sum + num[i], i, array.concat(num[i]));
    }
  }

  recurse(0, 0, []);
  return result;
}

// var allSumCombos2 = function(number) {
//     var num = [];
//     var dp = [];
//     for (var i=0; i<=number; i++) {
//       dp[i] = 0;
//     }
//     dp[0] = 1;
//     for (var i=0; i<number; i++) {
//       num[i] = i+1;
//     }
//     console.log(num)

//     for (var i=0; i<num.length; i++) {
//       for (var j=1; j<=number; j++) {
//         if (j >= num[i]) {
//           dp[j] += dp[j-num[i]];
//         }
//       }
//     }
//     return dp[number];
// }

console.log(allSumCombos(5));