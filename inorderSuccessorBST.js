var inorderSuccessor = function(root, p) {
  let successor = null;
  const DFS = node => {
    //if p val is greater than current node val, then recurse right
    if (p.val >= node.val) {
      if (node.right) {
        DFS(node.right);
      }
    }

    //if p val is less than current node val, update successor to current node because it could POTENTIALLY be the successor to p
    if (p.val < node.val) {
      successor = node;
      if (node.left) {
        DFS(node.left);
      }
    }
  };
  DFS(root);
  return successor;
};
