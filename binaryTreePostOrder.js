/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let results = [];
    const recurse = (node) => {
        if (!node) return;
        recurse(node.left);
        recurse(node.right);
        results.push(node.val);
    }
    recurse(root);
    return results;
};