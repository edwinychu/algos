const connectAllSiblings = (root) => {
  if (root === null) {
    return;
  }
  let queue = [];
  queue[0] = root;
  queue[1] = null;
  let current;
  
  //queue[0] can't be null or else it'll be an infinite loop
  while (queue.length > 0 && queue[0] !== null) {
    let current = queue.shift();
    //make sure you don't push null values into the queue unless you run into the existing null in the queue!
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
    
    current.next = queue[0];
    
    if (queue[0] === null) {
        queue.push(queue.shift());    
    } 
            
  }
}

