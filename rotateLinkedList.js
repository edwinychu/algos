/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (head === null || k === 0) {
    return head;
  }

  //find length of list
  let pointer = new ListNode(0);
  pointer.next = head;
  let len = 0;
  while (pointer.next) {
    len++;
    pointer = pointer.next;
  }

  pointer.next = head;
  let travel = len - k % len;

  while (travel > 0) {
    pointer = pointer.next;
    travel--;
  }
  head = pointer.next;
  pointer.next = null;
  return head;
};
