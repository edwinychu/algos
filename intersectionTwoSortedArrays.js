const intersectionTwoSortedArrays = (array1, array2) => {
  let hash = {};
  let results = [];
  for (let i=0; i<array1.length; i++) {
    if (hash[array1[i]] === undefined) {
      hash[array1[i]] = 1;
    }
  }
  for (let i=0; i<array2.length; i++) {
    if (hash[array2[i]]) {
      if (!results.includes(array2[i])) {
        results.push(array2[i]);
      }
    }
  }
  return results;
}

const array1 = [1,2,2,1];
const array2 = [2,2];
const f = intersectionTwoSortedArrays(array1, array2);
console.log(f);