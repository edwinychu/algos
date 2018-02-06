const findLowestCommonNumber = (array1, array2, array3) => {
  let pointer1 = 0;
  let pointer2 = 0;
  let pointer3 = 0;

  while (pointer1 < array1.length && pointer2 < array2.length && pointer3 < array3.length) {
    if (array1[pointer1] === array2[pointer2] && array1[pointer1] === array3[pointer3]) {
      return array1[pointer1];
    }

    if (array1[pointer1] <= array2[pointer2] && array1[pointer1] <= array3[pointer3]) {
      pointer1++;
    } else if (array2[pointer2] <= array3[pointer3] && array2[pointer2] <= array1[pointer1]) {
      pointer2++;
    } else if (array3[pointer3] <= array1[pointer1] && array3[pointer3] <= array2[pointer2]) {
      pointer3++;
    }

  
  }

  return 'cannot be found';
}

const array1 = [0,1,2,3,4];
const array2 = [4];
const array3 = [1,4];
const f = findLowestCommonNumber(array1, array2, array3);
console.log(f);