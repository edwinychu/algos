/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  let dummyHead = new ListNode(0);
  dummyHead.next = head;
  let curr = dummyHead;
  for (let i = 1; i < m; i++) {
    curr = curr.next;
  }
  let tail = curr.next;
  for (let i = m; i < n; i++) {
    if (!tail) break;
    let tmp = tail.next;
    tail.next = tmp.next;
    tmp.next = curr.next;
    curr.next = tmp;
  }

  return dummyHead.next;
};
