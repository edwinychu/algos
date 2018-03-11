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
    return null
  }
  let visited = {}
  const DFS = node => {
    let newClone
    if (visited[node.label]) {
      newClone = visited[node.label]
    } else {
      newClone = new UndirectedGraphNode(node.label)
      visited[node.label] = newClone
    }

    for (let i = 0; i < node.neighbors.length; i++) {
      if (node.neighbors[i].label !== node.label) {
        //check if neighbor is in visited
        if (visited[node.neighbors[i].label]) {
          newClone.neighbors.push(visited[node.neighbors[i].label])
        } else {
          newClone.neighbors.push(DFS(node.neighbors[i]))
        }
      } else {
        newClone.neighbors.push(visited[node.label])
      }
    }

    return newClone
  }

  return DFS(graph)
}
