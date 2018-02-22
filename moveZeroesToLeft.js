const moveZeroesToLeft = (arr) => {
    let nonZeroes = arr.length - 1;
    for (let i=arr.length - 1; i>=0; i--) {
        if (arr[i] !== 0) {
            console.log(i, arr[i], nonZeroes)
            arr[nonZeroes] = arr[i];
            nonZeroes--;
        }
    }

    for (let i=nonZeroes; i>=0; i--) {
        arr[i] = 0;
    }

    return arr;

}

console.log(moveZeroesToLeft([1,2,3,0,0]))