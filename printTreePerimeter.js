class Node {
  constructor(value) {
    this.val = value;
    this.left = this.right = null;
  }
}

const printLeaves = node => {
  if (node) {
    if (!node.left && !node.right) console.log(node.val);
    printLeaves(node.left);
    printLeaves(node.right);
  }
};

//print all left nodes except leaf
const leftPerimeter = node => {
  //left node is always a priority; we only traverse into right node if left node doesnt exist 
  if (node.left) {
    console.log(node.val);
    leftPerimeter(node.left);
  } else if (node.right) {
    console.log(node.val);
    leftPerimeter(node.right);
  }
};

//print all right nodes except leaf
const rightPerimeter = node => {
  //right node is priority; we only traverse into right node if left node doesnt exist
  if (node.right) {
    rightPerimeter(node.right);
    console.log(node.val);
  } else if (node.left) {
    rightPerimeter(node.left);
    console.log(node.val);
  }
};

const printTreePerimeter = (root) => {
  if(root) {
    console.log(root.val);
    if(root.left) leftPerimeter(root.left);
    if (root.left) printLeaves(root.left);
    if (root.right) printLeaves(root.right);
    if (root.right) rightPerimeter(root.right);
  }
}


let root = new Node(1);
root.left = new Node(2);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.left.right.right = new Node(6);


// let root = new Node(20);
// root.left = new Node(8);
// root.left.left = new Node(4);
// root.left.right = new Node(12);
// root.left.right.left = new Node(10);
// root.left.right.right = new Node(14);
// root.right = new Node(22);
// root.right.right = new Node(25);

const f = printTreePerimeter(root);
console.log(f);
