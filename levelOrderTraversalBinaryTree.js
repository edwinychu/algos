class TreeLinkNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = this.next = null;
  }
}

const levelOrderTraversalBinaryTree = (root) => {
  let level = 1;
  let queue = [];
  let levels = {};
  levels[level] = [root];
  queue[0] = [root, level];

  while (queue.length > 0) {
    let current = queue.shift();
    let currentNode = current[0];
    let nextLevel = current[1] + 1;

    if(currentNode.left) {
      if (levels[nextLevel] === undefined) {
        levels[nextLevel] = [];
      }
      levels[nextLevel].push(currentNode.left);
      queue.push([currentNode.left, nextLevel]);
    }

    if(currentNode.right) {
      if (levels[nextLevel] === undefined) {
        levels[nextLevel] = [];
      }
      levels[nextLevel].push(currentNode.right);
      queue.push([currentNode.right, nextLevel]);
    }
  }

  return levels;
}

var n1 = new TreeLinkNode(1);
var n2 = new TreeLinkNode(2);
var n3 = new TreeLinkNode(3);
var n4 = new TreeLinkNode(4);
var n5 = new TreeLinkNode(5);
var n6 = new TreeLinkNode(6);
var n7 = new TreeLinkNode(7);
n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.left = n6;
n4.right = n7;

console.log(levelOrderTraversalBinaryTree(n1));
