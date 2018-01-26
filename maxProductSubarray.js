var maxProduct = function(nums) {
    var cache = 1;
    var max = nums[0];
    //left to right
    for (var i=0; i<nums.length; i++) {
        if (nums[i] === 0) {
            cache = 1;
            max = Math.max(0, max);
        } else {
            cache *= nums[i];
            max = Math.max(cache, max);
        }
    }
    cache = 1;
    //right to left
    for (var i=nums.length - 1; i>= 0; i--) {
        if (nums[i] === 0) {
            cache = 1;
            max = Math.max(0, max);
        } else {
            cache *= nums[i];
            max = Math.maxc(cache, max);
        }
    }
    return max;
};

