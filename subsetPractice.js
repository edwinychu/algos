const subsets = (nums) => {
  let results = [];
  const recurse = (index, array) => {
    results.push(array);
    for (let i=index; i<nums.length; i++) {
      recurse(i+1, array.concat(nums[i]));
    }
  }
  recurse(0, []);
  return results;
}

const array = [1,2,3];
const f = subsets(array);
console.log(f);