const connectAllSiblings = (root) => {
  if (root === null) {
    return;
  }
  let queue = [];
  queue[0] = root;
  queue[1] = null;
  let current;
  while (queue.length > 1) {
    current = queue.shift();
    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
    if (queue[0] === null) {
      current.next = null;
      queue.push(queue.shift());
    } else {
      current.next = queue[0];
    }
  }
}

