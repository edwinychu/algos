var allSumCombos = function(number) {
  var num = [];
  var result = [];
  for (var i=0; i<number; i++) {
    num[i] = i+1;
  }

  var recurse = function(sum, array) {
    if (sum > number) {
      return;
    }
    if (sum === number) {
      result.push(array);
      return;
    }
    for (var i=0; i<num.length; i++) {
      recurse(sum + num[i], array.concat(num[i]));
    }
  }

  recurse(0, []);
  return result;
}

var allSumCombos2 = function(number) {
    var num = [];
    var dp = [];
    for (var i=0; i<=number; i++) {
      dp[i] = 0;
    }
    dp[0] = 1;
    for (var i=0; i<number; i++) {
      num[i] = i+1;
    }
    console.log(num)

    for (var i=0; i<num.length; i++) {
      for (var j=1; j<=number; j++) {
        if (j >= num[i]) {
          dp[j] += dp[j-num[i]];
        }
      }
    }
    return dp[number];
}

console.log(allSumCombos(5));