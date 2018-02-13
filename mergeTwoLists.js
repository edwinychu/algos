var mergeTwoLists = function(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  let head;
  let headCopy;
  if (l1.val < l2.val) {
    head = l1;
    l1 = l1.next;
  } else {
    head = l2;
    l2 = l2.next;
  }
  headCopy = head;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      head.next = l1;
      l1 = l1.next;
    } else {
      head.next = l2;
      l2 = l2.next;
    }
    head = head.next;
  }
  if (l1) {
    head.next = l1;
  } else if (l2) {
    head.next = l2;
  }
  return headCopy;
};
