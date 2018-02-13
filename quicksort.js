const quicksort = (array, start, end) => {
  if(start < end) {
    let partitionIndex = partition(array, start, end);
    quicksort(array, start, partitionIndex - 1);
    quicksort(array, partitionIndex + 1, end);
  }
  return array;
}

const partition = (array, start, end) => {
  let pivot = array[end];
  let partitionIndex = start;
  for (let i=start; i<end; i++) {
    //if array[i] is less than or equal to pivot element, then swap array[i] element with element at PARTITION INDEX
    if (array[i] <= pivot) {
      let copy = array[i];
      array[i] = array[partitionIndex];
      array[partitionIndex] = copy;
      partitionIndex++;
    }
  }
  //swap whatever element is at partition index with pivot
  array[end] = array[partitionIndex];
  array[partitionIndex] = pivot;
  return partitionIndex;
};


console.log(quicksort([4,3,6,7,8,2,1,0], 0, 7));