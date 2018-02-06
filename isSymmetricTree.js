var isSymmetric = function(root) {
  if (!root || (!root.left && !root.right)) {
    return true;
  }
  const DFS = (node1, node2) => {
    if (!node1 && !node2) return true;

    if (!node1 || !node2 || node1.val !== node2.val) return false;

    return DFS(node1.left, node2.right) && DFS(node1.right, node2.left);
  };

  return DFS(root.left, root.right);
};
