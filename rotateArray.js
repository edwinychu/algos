const rotateArray = (arr, n) => {
    const rotate = (start, end) => {
        while (start < end) {
            let copy = arr[start];
            arr[start] = arr[end];
            arr[end] = copy;
            start++;
            end--;
        }
    }

    n = n % arr.length;
    if (n < 0) {
        n = n + arr.length;
    }


    //rotate entire array first
    rotate(0, arr.length - 1);
    //rotate 0, n - 1
    rotate(0, n - 1);
    //rotate n, arr.length - 1
    rotate(n, arr.length - 1);

    return arr;
}


let arr = [1,2,3,4,5];
let n = -1;
console.log(rotateArray(arr, n));