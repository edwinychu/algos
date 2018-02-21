var lengthOfLongestSubstring = function(s) {
  let start = 0;
  let end = 0;
  let longest = 0;
  let count = 0;
  let distinct = {};
  while (end < s.length) {
    if (distinct[s[end]]) {
      start++;
      end = start;
      distinct = {};
      count = 0;
    } else {
      distinct[s[end]] = 1;
      count++;
      end++;
      if (count > longest) {
        longest = count;
      }
    }
  }
  return longest;
};
