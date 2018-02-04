const isBalancedBinaryTree = (root) => {
  if (!root || (!root.left && !root.right)) return true;
  let balanced = true;
  const DFS = (node) => {
    if (!node) {
      return 0;
    }
    let left = 1 + DFS(node.left);
    let right = 1 + DFS(node.right);
    if (Math.abs(left -right) >= 2) {
      balanced = false;
    }
    return Math.max(left, right);
  }
  DFS(root);
  return balanced;
}