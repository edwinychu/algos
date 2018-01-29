const productArrayExceptSelf = (array) => {
  let left = 1;
  let right = 1;
  let newArray = [];
  
  for (let i=0; i<array.length; i++) {
    newArray[i] = 1;
  }
  //go from left to right
  for (let i=0; i<array.length; i++) {
    newArray[i] *= left;
    left *= array[i];
  }
  //go from right to left
  for (let i=array.length - 1; i>=0; i--) {
    newArray[i] *= right;
    right *= array[i];
  }
  return newArray;
}

console.log(productArrayExceptSelf([2,2,8,4]))