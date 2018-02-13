/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
  if (!head) return null;
  let copy = null;
  let visited = {};
  const recurse = original => {
    if (!original) return null;
    if (visited[original.label]) {
      return visited[original.label];
    }
    let copy = new RandomListNode(original.label);
    visited[original.label] = copy;
    copy.next = recurse(original.next);
    copy.random = recurse(original.random);
    return copy;
  };
  return recurse(head, copy);
};
