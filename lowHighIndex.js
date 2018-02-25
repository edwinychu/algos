const lowHigh = (array, key) => {
    const findLowIndex = (start, end) => {
        while (start <= end) {
            let mid = Math.floor((start + end)/2);
            if (array[mid] === key && array[mid - 1] !== key) {
                return mid;
            }

            if (array[mid] >= key ) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return -1;
    }
    const low = findLowIndex(0, array.length - 1);
    const findHighIndex = (start, end) => {
        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
            if (array[mid] === key && array[mid + 1] !== key) {
                return mid;
            }
            if (array[mid] <= key ) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return -1;
    }
    const high = findHighIndex(0, array.length - 1);
    return [low, high];
}


const arr = [5,5];
console.log(lowHigh(arr, 5));