const mapN = (...arguments) => {
  let results = [];
  let args = arguments.slice(0, arguments.length - 1);
  console.log(args);
  let func = arguments[arguments.length - 1];
  for (let i=0; i<args[0].length; i++) {
    results.push(func(...args[i]));
  }
  return results;
}


const f = mapN([1, 2, 3], [4, 5, 6], [2, 2, 2], (a, b, c)  => {
  return (a * b) + c;
});
console.log(f);
// => [6, 12, 20]