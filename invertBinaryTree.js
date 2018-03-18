/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) return root;
    let queue = [root];
    while (queue.length > 0) {
        let current = queue.shift();
        let copy = current.left;
        current.left = current.right;
        current.right = copy;
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }
    return root;
};