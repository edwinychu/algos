const isNumberValid = (number) => {
  const hash = {};
  let foundPeriod = false;
  for (let i=0; i<number.length; i++) {
    if (!foundPeriod && number[i] === '.') {
      foundPeriod = true;
    } else if (number[i] === '.' && foundPeriod) {
      return false;
    }
  }
  return true;
}

var number = '1.222';
const f = isNumberValid(number);
console.log(f);