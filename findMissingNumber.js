const findMissingNum = (arr) => {
    let n = arr.length + 1;
    let expected_arr = [];
    for (i=1; i<=n; i++) {
        expected_arr.push(i);
    }
    let expected_sum = expected_arr.reduce((accumulator, value) => { return accumulator + value }, 0);
    let actual_sum = arr.reduce((accumulator, value) => { return accumulator + value }, 0);

    return expected_sum - actual_sum;
}

console.log(findMissingNum([]));

