var combinationSum = function(candidates, target) {
  let results = [];
  const recurse = (array, candidateIndex, sum) => {
    if (sum > target) {
      return;
    }
    if (sum === target) {
      results.push(array);
      return;
    }
    for (let i = candidateIndex; i < candidates.length; i++) {
      recurse(array.concat(candidates[i]), i, sum + candidates[i]);
    }
  };

  recurse([], 0, 0);
  return results;
};
