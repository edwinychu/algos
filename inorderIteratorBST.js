class BSTIterator {
  constructor(root) {
    this.stack = [];
    //first push in all the left nodes on the tree
    while (root) {
      this.stack.push(root);
      root = root.left;
    }
  }

  hasNext() {
    if (this.stack.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  next() {
    if (this.hasNext()) {
      let current = this.stack.pop();
      //if current has a right node, push the right node onto the stack as well as all its left children
      if (current.right) {
        let addNode = current.right;
        while (addNode) {
          this.stack.push(addNode);
          addNode = addNode.left;
        }
      }
      return current.val;
    }
  }
}
