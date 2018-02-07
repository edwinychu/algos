const stringPermute = (string) => {
  let results = [];
  const recurse = (built) => {
    if (built.length === string.length) {
      results.push(built);
    }

    //i starts at 0 because you want built string to have options from the beginning of string again
    for (let i=0; i<string.length; i++) {
      if (!built.includes(string[i])) {
        recurse(built + string[i]);
      }
    }
  }
  recurse('')
  return results;

}


const string = 'bad';
const f = stringPermute(string);
console.log(f);