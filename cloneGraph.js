/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function(graph) {
  if (!graph) {
    return null;
  }
  let visited = {};
  const DFS = node => {
    let newClone;

    //if another node with similar label already exists in visited object, set newClone to that
    //else, create new undirected graph node
    if (visited[node.label]) {
      newClone = visited[node.label];
    } else {
      newClone = new UndirectedGraphNode(node.label);
      visited[node.label] = newClone;
    }

    for (let i = 0; i < node.neighbors.length; i++) {
      //just push what already exists in visited object if label of newClone and its neighbor is the same
      if (node.neighbors[i].label !== node.label) {
        //check if neighbor is in visited already because if it is, then push that
        //else, recurse into DFS again and push in the returned node
        if (visited[node.neighbors[i].label]) {
          newClone.neighbors.push(visited[node.neighbors[i].label]);
        } else {
          newClone.neighbors.push(DFS(node.neighbors[i]));
        }
      } else {
        newClone.neighbors.push(visited[node.label]);
      }
    }

    return newClone;
  };

  return DFS(graph);
};
