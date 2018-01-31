/**
 * Initialize your data structure here.
 */
var MyStack = function() {
  this.storage1 = [];
  this.storage2 = [];
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  if (this.storage1.length > 0) {
    this.storage1.push(x);
  } else if (this.storage2.length > 0) {
    this.storage2.push(x);
  } else {
    this.storage1.push(x);
  }
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
  if (this.storage1.length > 0) {
    while (this.storage1.length > 1) {
      this.storage2.push(this.storage1.shift());
    }
    return this.storage1.shift();
  } else if (this.storage2.length > 0) {
    while (this.storage2.length > 1) {
      this.storage1.push(this.storage2.shift());
    }
    return this.storage2.shift();
  }
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
  if (this.storage1.length > 0) {
    return this.storage1[this.storage1.length - 1];
  } else if (this.storage2.length > 0) {
    return this.storage2[this.storage2.length - 1];
  }
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  if (this.storage1.length === 0 && this.storage2.length === 0) {
    return true;
  } else {
    return false;
  }
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = Object.create(MyStack).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
