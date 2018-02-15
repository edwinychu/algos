const prim = (graph, edges) => {
  let vertices = 0;
  let weight = 0;

  let current = graph[0];
  current.visited = true;
  vertices++;

  while (vertices < graph.length) {
    let smallest = null;
    for (let i=0; i<edges.length; i++) {
      if (!edges[i].visited && !edges[i].dest.visited) {
        smallest = edges[i];
        break;
      }
    }

    for (let i=0; i<edges.length; i++) {
      if (!edges[i].visited) {
        if (edges[i].src.visited && !edges[i].dest.visited && edges[i].weight < smallest.weight){
          smallest = edges[i];
        }
      }
    }

    smallest.visited = true;
    smallest.dest.visited = true;
    weight += smallest.weight;
    verices++;
  }

  return weight;
}