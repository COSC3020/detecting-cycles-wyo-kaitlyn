function hasCycle(graph) {
    // visited nodes
    let visited = [];
    // seperate array to keep track of the current path 
    let path = [];

    // creates an array of visited nodes
    // intializes all to false
    for (i in graph) {
        visited[i] = false;
    }

    // for all of the nodes, marks them as visited and then check
    // if they form a cycle
    for (let i = 0; i < graph.length; i++) {
        if (visited[i] == false) {
            visited[i] = true;
            return checkCycle(graph, visited, i, path);
        }
    }
    return false;
}

function checkCycle(graph, visited, node, path) {
    // cycle exists, return true
    if (path.includes(node)) { return true; }
    else {
        // adds the current node to the path
        path.push(node);
        for(i in graph[node]) {
            // recursively calls to see if cycle exists
            let cycleExists = checkCycle(graph, visited, graph[node][i], path);
            if (cycleExists == true) {
                return true;
            }
            // if it doesn't exist, reset the path and add the starting node
            else {
                path = [];
                path.push(node);
            }
        }

        // no cycle exists, so return false
        return false;
    }
}
