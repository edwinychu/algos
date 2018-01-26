var stringPermute = function(string) {
  var output = [];

  var recurse = function(index, built) {
    if (index === string.length) {
      output.push(built);
      return;
    }
    
    for (var i=0; i<string.length; i++) {
      if (!built.includes(string[i])) {
        recurse(index + 1, string[i] + built);
      }
    }
  }

  recurse(0, '');
  return output;
}

console.log(stringPermute('bad'));