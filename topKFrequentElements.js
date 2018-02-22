/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let distinct = {};
  for (let i = 0; i < nums.length; i++) {
    if (!distinct[nums[i]]) {
      distinct[nums[i]] = 1;
    } else {
      distinct[nums[i]]++;
    }
  }
  //make tuples of letter-freq combo
  let tuples = [];
  for (let keys in distinct) {
    tuples.push([distinct[keys], parseInt(keys)]);
  }

  tuples = tuples.sort((a, b) => {
    return b[0] - a[0];
  });
  let results = [];
  let index = 0;
  while (k > 0) {
    results.push(tuples[index][1]);
    index++;
    k--;
  }

  return results;
};
