const insertionSort = (array) => {
  for (let i=1; i<array.length; i++) {
    for (let j=i; j>=0; j--) {
      if (array[j] < array[j-1]) {
        let copy = array[j];
        array[j] = array[j-1];
        array[j-1] = copy;
      }
    }
  }
  return array;
}

console.log(insertionSort([2,12,2,9,3]));