var powerSet = function(set) {
  var output = [];
  var recurse = function(index, array) {
    if (index > set.length) {
      return;
    }
    output.push(array);
    for (var i=index; i<set.length; i++) {
      recurse(i+1, array.concat(set[i]));
    }
  }
  recurse(0, []);
  return output;
}


console.log(powerSet(['a','b']));