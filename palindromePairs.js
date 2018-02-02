var palindromePairs = function(words) {
  const isPalindrome = word => {
    let pointer1 = 0;
    let pointer2 = word.length - 1;
    while (pointer1 < pointer2) {
      if (word[pointer1] !== word[pointer2]) {
        return false;
      }
      pointer1++;
      pointer2--;
    }
    return true;
  };

  let results = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (words[i] !== words[j] && isPalindrome(words[i] + words[j])) {
        results.push([i, j]);
      }
    }
  }

  return results;
};

const array = ["abcd", "dcba", "lls", "s", "sssll"];
const f = palindromePairs(array);
console.log(f);