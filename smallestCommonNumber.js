const smallestCommonNumber = (array1, array2, array3) => {
  let pointer1 = 0;
  let pointer2 = 0;
  let pointer3 = 0;

  const compareThreeNumbers = (index1, index2, index3) => {
    if (array1[index1] <= array2[index2] && array1[index1] <= array3[index3]) {
      pointer1++;
      return;
    }
    if (array2[index2] <= array1[index1] && array2[index2] <= array3[index3]) {
      pointer2++;
      return;
    }
    if (array3[index3] <= array1[index1] && array3[index3] <= array2[index2]) {
      pointer3++;
      return;
    }
  }

  while (pointer1 < array1.length && pointer2 < array2.length && pointer3 < array3.length) {
    if (array1[pointer1] === array2[pointer2] && array1[pointer1] === array3[pointer3]) {
      return array1[pointer1];
    } else {
      compareThreeNumbers(pointer1, pointer2, pointer3);
    }
    console.log(pointer1, pointer2, pointer3);
  }
  return false;
}



const array1 = [6,7,10,25,30,63,64];
const array2 = [-1,4,5,5,10,8];
const array3 = [1,2,6,3,10];
const f = smallestCommonNumber(array1, array2, array3);
console.log(f);

