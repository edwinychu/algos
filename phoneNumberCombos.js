var phoneNumberCombos = (digits) => {

  let results = [];
  var letters = { 2: ["a", "b", "c"], 3: ["d", "e", "f"], 4: ["g", "h", "i"], 5: ["j", "k", "l"], 6: ["m", "n", "o"], 7: ["p", "q", "r", "s"], 8: ["t", "u", "v"], 9: ["w", "x", "y", "z"] };

  let recurse = (index, string) => {
    if (index === digits.length) {
      results.push(string);
      return;
    }
    for (let i=0; i<letters[digits[index]].length; i++) {
      recurse(index+1, string + letters[digits[index]][i]);
    }

  }
  recurse(0, '');
  return results;
  
}

console.log(phoneNumberCombos('233'));

