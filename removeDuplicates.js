//O(n^2) time && O(n) space
const removeDuplicates = (string) => {
  let hash = {};
  let index = 0;
  string = string.split('');
  while (index < string.length) {
    if (hash[string[index]] === undefined) {
      hash[string[index]] = 1;
      index++;
    } else {
      string.splice(index, 1);
    }
  }
  return string.join('');
}

//O(n) time and O(n) space
const removeDuplicates2 = (string) => {
  let read = 0;
  let write = 0;
  let hash = {};
  string = string.split('');
  while (read < string.length) {
    if (hash[string[read]] === undefined) {
      hash[string[read]] = 1;
      string[write] = string[read] 
      write++;
    } 
    read++ //read will always move no matter what
  }
  
  return string.slice(0, write).join('');

}

const string = "abbabcddbabcdeedebc";
console.log(removeDuplicates2(string));