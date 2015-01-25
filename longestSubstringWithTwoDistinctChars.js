/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
  var start = 0;
  var end = 0;
  var repeatCount = 0;
  var stringLength = 0;
  var maxStringLength = 0;
  var obj = {};
  while (end < s.length) {
    if (obj[s[end]] === undefined) {
      obj[s[end]] = 1;
      repeatCount++;
    }
    if (repeatCount > 2) {
      // if (stringLength > maxStringLength) {
      //     maxStringLength = stringLength;
      // }
      stringLength = 0;
      start++;
      end = start;
      obj = {};
      repeatCount = 0;
    } else {
      stringLength++;

      end++;
      if (stringLength > maxStringLength) {
        maxStringLength = stringLength;
      }
    }
  }
  //if string length
  return maxStringLength;
};
