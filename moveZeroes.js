let moveZeroes = (array) => {
  let nonZeroes = 0;
  for (let i=0; i<array.length; i++) {
    if (array[i] !== 0) {
      array[nonZeroes] = array[i];
      nonZeroes++;
    }
  }

  for (let j=nonZeroes; j<array.length; j++) {
    array[j] = 0;
  }
  return array;
}


console.log(moveZeroes([]))