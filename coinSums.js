let coinSums = (coins, amount) => {
  let results = [];
  
  let recurse = (coinIndex, sum, arr) => {

    if (coinIndex === coins.length) {
      if (sum > amount) {
        return;
      }
      if (sum === amount) {
        results.push(arr);
        return;
      }
    }

    if (sum > amount) {
      return;
    }

    if (sum === amount) {
      results.push(arr);
      return;
    }
  
    for (var i=coinIndex; i<coins.length; i++) {
      recurse(i, sum + coins[i], arr.concat(coins[i]));
    }
  }

  recurse(0, 0, []);
  return results;
}

console.log(coinSums([1,2,3,4], 6));

