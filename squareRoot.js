var squareRoot = function(n) {
  var low = 0;
  var high = 1 + n/2.0;
  while (low <= high) {
    var mid = (low + high) / 2;
    var square = mid * mid;
    var diff = Math.abs(n - square);

    if (diff <= 0.00001) {
      return mid;
    }

    if (square > n) {
      high = mid;
    } else {
      low = mid;
    }
  }
  return 'cannot find string';
}


console.log(squareRoot(48));