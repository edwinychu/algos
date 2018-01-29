const knapsack = (items, target) => {
  let results = [];
  let max = 0;
  let recurse = (index, sum, array) => {
    if (index === items.length) {
      if (sum === target) {
        results.push(array);
      }
      return;
    }
    if (sum > target) {
      return;
    }
    if (sum === target) {
      results.push(array);
      return;
    }
    recurse(index+1, sum, array);
    recurse(index+1, sum + items[index], array.concat(items[index]));
  }
  recurse(0, 0, []);
  return results;
}

console.log(knapsack([1,3,5,21,19,7,2,5], 10));