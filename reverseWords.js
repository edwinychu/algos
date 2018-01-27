let reverseWords = (sentence) => {
  sentence = sentence.split(' ');
  let start = 0;
  let end = sentence.length - 1;
  while (start < end) {
    let copy = sentence[start];
    sentence[start] = sentence[end];
    sentence[end] = copy;
    start++;
    end--;
  }
  return sentence.join(' ');
}


console.log(reverseWords("this"));