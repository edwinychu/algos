const split = (array) => {
  if (array.length <= 1) {
    return array;
  }
  let left = [];
  let right = [];
  let pivot = Math.ceil(array.length/2);
  for (let i=0; i<pivot; i++) {
    left.push(array[i]);
  }
  for (let i=pivot; i<array.length; i++) {
    right.push(array[i]);
  }
  let newLeft = split(left);
  let newRight = split(right);

  return merge(newLeft, newRight);
}

const merge = (array1, array2) => {
  let firstPointer = secondPointer = 0;
  let newArray = [];

  while (firstPointer < array1.length && secondPointer < array2.length) {
    if (array1[firstPointer] < array2[secondPointer]) {
      newArray.push(array1[firstPointer]);
      firstPointer++;
    } else {
      newArray.push(array2[secondPointer]);
      secondPointer++;
    }
  }

  if (firstPointer < array1.length) {
    while (firstPointer < array1.length) {
      newArray.push(array1[firstPointer]);
      firstPointer++;
    }
  } else if (secondPointer < array2.length) {
    while (secondPointer < array2.length) {
      newArray.push(array2[secondPointer]);
      secondPointer++;
    }
  }
  return newArray;
}

const array = [1,2,3,4,5,6];
console.log(split(array));