const connectAllSiblings = (root) => {
  let queue = [];
  queue.push(root);
  while (queue.length > 0) {
    let current = queue.shift();
    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
    
    //last check because if there's no more nodes in the queue, that means we've reached the end of the tree
    if (queue.length === 0) {
      current.next = null;
    } else {
      current.next = queue[0];
    }
  }
  console.log(root);
}

class TreeLinkNode {
  constructor(val) {
    this.val = val;
    this.right = this.left = this.next = null;
  }
}

const root = new TreeLinkNode(1);
root.left = new TreeLinkNode(2);
root.right = new TreeLinkNode(3);
root.left.left = new TreeLinkNode(4);
root.left.right = new TreeLinkNode(5);
root.right.left = new TreeLinkNode(6);
root.right.right = new TreeLinkNode(7);
const f = connectAllSiblings(root);
console.log(f);