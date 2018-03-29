/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let output = [];
    const recurse = (array) => {
        if (array.length === nums.length) {
            output.push(array);
            return;
        }
        for (let i=0; i<nums.length; i++) {
            if (!array.includes(nums[i])) recurse(array.concat(nums[i])); 
        }
    }
    recurse([]);
    return output;
};
