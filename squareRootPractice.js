const squareRoot = (num) => {
  const ACCURACY = 0.000000000000000001;
  let low = 0;
  let high = num;//high can also be num/2 because square root will never be greater than half of number
  while (low < high) {
    let mid = (low + high) / 2;
    let square = mid * mid;
    if (Math.abs(square - num) <= ACCURACY) {
      return mid;
    }

    if (square > num) {
      high = mid;
    } else {
      low = mid;
    }
  }
  return 'not found';
}

const num1 = 49;
const num2 = 0;
const num3 = 19023;
const f1 = squareRoot(num1);
const f2 = squareRoot(num2);
const f3 = squareRoot(num3);
console.log(f1);
console.log(f2);
console.log(f3);