/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
  const recurse = (t1, t2) => {
    if (!t1 && !t2) return null;
    if (!t1) return t2;
    if (!t2) return t1;
    let root = new TreeNode(t1.val + t2.val);
    root.left = recurse(t1.left, t2.left);
    root.right = recurse(t1.right, t2.right);
    return root;
  };
  return recurse(t1, t2);
};
