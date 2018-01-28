const insertionSort = (array) => {
  // if (array.length === 0) {
  //   return [];
  // } else if (array.length === 1) {
  //   return [array[0]];
  // }

  for (var i=1; i<array.length; i++) {
    for (var j=i; j>=0; j--) {
      if (array[j] < array[j-1]){
        let copy = array[j];
        array[j] = array[j-1];
        array[j-1] = copy;
      }
    }
  }
  return array;
}

console.log(insertionSort([2,12,2,2.3,3]));