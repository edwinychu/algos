const removeWhiteSpaces = (string) => {
  let readPointer = 0;
  let writePointer = 0;
  string = string.split('');
  while (readPointer < string.length) {
    if (string[readPointer] !== ' ') {
      string[writePointer] = string[readPointer];
      readPointer++;
      writePointer++;
    } else {
      readPointer++;
    }
  }
  return string.slice(0, writePointer).join('');
}

const string = '            All Greek To Me';
const f = removeWhiteSpaces(string);
console.log(f);