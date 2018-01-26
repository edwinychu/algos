var subsets = function(nums) {
  var output = [];
  var backtrack = function(index, array) {
    output.push(array);
    for (var i = index; i < nums.length; i++) {
      backtrack(i + 1, array.concat(nums[i]));
    }
  };
  backtrack(0, []);
  return output;
};

console.log(subsets([1,2,3]));