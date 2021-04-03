const graph = {};
graph.a = {b: 2, c: 1};
graph.b = {f: 3};
graph.c = {d: 2, e: 5};
graph.d = {f: 3};
graph.e = {f: 2};
graph.f = {g: 12};
graph.g = {};

function findShortPath(graph, start, end) {
    const pathCosts = {};
    let neighbors = {};
    const processedNodes = [];
    Object.keys(graph).forEach((node) => {
        if (node !== start) {
            let nodeValue = graph[start][node];
            pathCosts[node] = nodeValue || 1000000;
        }
    });
    let node = findNodeLeastCost(pathCosts, processedNodes);
    while (node) {
        const cost = pathCosts[node];
        neighbors = graph[node];
        Object.keys(neighbors).forEach(neighbor => {
            let newCost = cost + neighbors[neighbor];
            if (newCost < pathCosts[neighbor]) {
                pathCosts[neighbor] = newCost;
            }
        });
        processedNodes.push(node);
        node = findNodeLeastCost(pathCosts, processedNodes)
    }
    return pathCosts
}

function findNodeLeastCost(pathCost, processedNodes) {
    let leastCost = 1000000;
    let nodeWithLeastCost;
    Object.keys(pathCost).forEach(node=> {
        let cost = pathCost[node];
        if (cost < leastCost && !processedNodes.includes(node)) {
            leastCost = cost;
            nodeWithLeastCost = node;
        }
    });
    return nodeWithLeastCost
}

console.log(findShortPath(graph, "a", "g"));
