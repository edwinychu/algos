const flattenNestedList = (array) => {
  return array.reduce( (flattened, toFlatten) => {
    //concat flattened array (accumulator) with toFlatten (value)
    //check if toFlatten is an array
      //if it isn't, then you concat it
      //if it is, then you call flattenNestedList(toFlatten)
      // if (Array.isArray(toFlatten)) {
      //   return flattened.concat(flattenNestedList(toFlatten));
      // } else {
      //   return flattened.concat(toFlatten);
      // }
    return flattened.concat(!Array.isArray(toFlatten) ? toFlatten : flattenNestedList(toFlatten));
  }, []);
}

const flatten = (array) => {
  if (!Array.isArray(array)) {
    return array;
  }
  
  let newArr = [];//accumulator

  for (let i=0; i<array.length; i++) {
    newArr = newArr.concat(flatten(array[i]));
  }

  return newArr;

}


const array = [1,[2,[3]]];
const f = flatten(array);
console.log(f);