/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.stack = nums;
    this.copy = nums.slice(0);
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    this.stack = this.copy.slice(0);
    return this.stack;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    for (let i=0; i<this.stack.length; i++) {
        let random = Math.floor(Math.random() * (this.stack.length - 1)) + 0;
        let copy = this.stack[i];
        this.stack[i] = this.stack[random];
        this.stack[random] = copy;
    }
    return this.stack;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */