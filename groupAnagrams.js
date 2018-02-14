/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let anagrams = {};
  let result = [];
  for (let i = 0; i < strs.length; i++) {
    let sorted = strs[i].split("").sort();
    if (!anagrams[sorted.join("")]) {
      anagrams[sorted.join("")] = [strs[i]];
    } else {
      anagrams[sorted.join("")].push(strs[i]);
    }
  }
  for (let keys in anagrams) {
    result.push(anagrams[keys]);
  }
  return result;
};
