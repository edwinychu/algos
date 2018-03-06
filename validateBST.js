var isValidBST = function(root) {
  const validate = (max, min, node) => {
    if (node === null) {
      return true
    }
    if (node.val >= max || node.val <= min) return false
    return (
      validate(node.val, min, node.left) && validate(max, node.val, node.right)
    )
  }
  return validate(Infinity, -Infinity, root)
}
