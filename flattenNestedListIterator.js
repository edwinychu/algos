class NestedListIterator {
  //populates stack with items in nested list
  constructor(NestedList) {
    this.stack = [];
    for (let i=NestedList.length - 1; i>=0; i--) {
      this.stack.push(NestedList[i]);
    }
  }

  hasNext() {
    //only returns true if stack is not empty and if the top most item in stack is an integer
    while (this.stack.length > 0) {
      let current = this.stack[this.stack.length - 1];
      if (!Array.isArray(current)) {
        return true;
      } else {
        current = this.stack.pop();
        for (let i=current.length - 1; i>=0; i--) {
          this.stack.push(current[i]);
        }
      }
    }
    return false;
  }

  next() {
    return this.stack.pop();
  }

}

const nestedArray = [1,[2,[3,[4,[5,[]]]]]];
const iterator = new NestedListIterator(nestedArray);
const a = [];
while (iterator.hasNext()) {
  a.push(iterator.next());
}
console.log(a);