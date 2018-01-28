const findAllPalindrome = (string) => {
  let count = 0;
  const findNumsOfPalindrome = (start, end) => {
    let count = 0;
    while (start >= 0 && end < string.length) {
      if (string[start] !== string[end]) {
        break;
      }
      count++;
      start--;
      end++;
    }
    return count;
  }

  for (var i=0; i<string.length; i++) {
    count += findNumsOfPalindrome(i-1, i+1);
    count += findNumsOfPalindrome(i, i+1);
  }

  return count;
}

console.log(findAllPalindrome('aabbaa'));