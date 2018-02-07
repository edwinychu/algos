const threeSum = (array) => {
  nums = nums.sort((a, b) => {
    return a - b;
  });
  let results = [];
  let used = {};
  const binarySearch = (start, remaining, skipi, skipj) => {
    let low = start;
    let high = nums.length - 1;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (nums[mid] === remaining && mid !== skipi && mid !== skipj) {
        return nums[mid];
      }

      if (nums[mid] > remaining) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return undefined;
  };

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let sub = [];
      let remaining = 0 - (nums[i] + nums[j]);
      let k = binarySearch(i, remaining, i, j);
      if (k !== undefined) {
        if (!results.includes([k, nums[i], nums[j]])) {
          results.push([k, nums[i], nums[j]]);
        }
        break;
      }
    }
  }

  return results;


}