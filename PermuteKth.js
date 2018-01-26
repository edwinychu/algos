var KthPermute = function(word, k) {
  var output = [];

  var recurse = function(index, string) {
    if (index === word.length) {
      output.push(string);
      return;
    }
    for (var i=0; i<word.length; i++) {
      if (!string.includes(word[i])) {
        recurse(index+1, string + word[i]);
      }
    }

  }

  recurse(0, '');

  return output[k-1];
}

console.log(KthPermute('123', 6));