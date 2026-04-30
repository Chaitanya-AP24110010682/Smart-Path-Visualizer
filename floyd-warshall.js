// Floyd-Warshall Algorithm: All-pairs shortest path implementation.
// Styled to strictly follow the project's variable naming and object structures.

var found = false, neighbors = [], copyOfBoardArray = [], copyOfNodes = {}, counter = 0, goBack = [], ready = false, totalDistance = 0;
var dist = {}, next = {};

function floyd_Function(nodes, start, end, boardArray) {
    copyOfBoardArray = boardArray;
    copyOfNodes = nodes;
    
    var nodeIds = Object.keys(nodes);
    var V = nodeIds.length;

    // Reset global state
    found = false;
    goBack = [];
    counter = 0;

    // Initialize the distance and next matrices
    for (var i = 0; i < V; i++) {
        var u = nodeIds[i];
        dist[u] = {};
        next[u] = {};
        for (var j = 0; j < V; j++) {
            var v = nodeIds[j];
            if (u === v) {
                dist[u][v] = 0;
            } else {
                dist[u][v] = Infinity;
            }
            next[u][v] = null;
        }
    }

    // Populate initial edges
    for (var r = 0; r < 15; r++) {
        for (var c = 0; c < 50; c++) {
            var uId = r + "-" + c;
            if (nodes[uId].nodeType === "wall") continue;

            var adj = getNeighbors(r, c);
            for (var k = 0; k < adj.length; k++) {
                var vId = adj[k];
                if (nodes[vId] && nodes[vId].nodeType !== "wall") {
                    dist[uId][vId] = 1 + nodes[vId].nodeWeight;
                    next[uId][vId] = vId;
                }
            }
        }
    }

    var k_idx = 0;
    
    function runKLoop() {
        if (k_idx >= V) {
            if (dist[start][end] === Infinity) {
                alert("No path found!");
            } else {
                found = true;
                reconstructPath(start, end);
                wayBackAnimation();
            }
            return;
        }

        var k = nodeIds[k_idx];
        if (nodes[k].nodeType !== "wall") {
            // Visualization
            var element = document.getElementById(k);
            if (nodes[k].nodeType === "unvisited") {
                element.style.animation = "visited 0.5s forwards";
            }

            for (var i_idx = 0; i_idx < V; i_idx++) {
                var i = nodeIds[i_idx];
                if (dist[i][k] === Infinity) continue;

                for (var j_idx = 0; j_idx < V; j_idx++) {
                    var j = nodeIds[j_idx];
                    if (dist[k][j] === Infinity) continue;

                    if (dist[i][j] > dist[i][k] + dist[k][j]) {
                        dist[i][j] = dist[i][k] + dist[k][j];
                        next[i][j] = next[i][k];
                    }
                }
            }
        }

        k_idx++;
        // Use a small delay for visualization and to prevent UI freezing
        if (k_idx % 25 === 0) {
            setTimeout(runKLoop, 0);
        } else {
            runKLoop();
        }
    }

    runKLoop();
}

function getNeighbors(r, c) {
    var neighbors = [];
    if (r > 0) neighbors.push((r - 1) + "-" + c);
    if (r < 14) neighbors.push((r + 1) + "-" + c);
    if (c > 0) neighbors.push(r + "-" + (c - 1));
    if (c < 49) neighbors.push(r + "-" + (c + 1));
    return neighbors;
}

function reconstructPath(u, v) {
    goBack = [];
    var currId = u;
    while (currId !== v && currId !== null) {
        // Push node objects to match Dijkstra's pattern
        goBack.push({ nodeId: currId });
        currId = next[currId][v];
        if (goBack.length > 1000) break;
    }
    if (currId === v) {
        goBack.push({ nodeId: v });
    }
}

function wayBackAnimation() {
    var c = 0;
    for (var i = 0; i < goBack.length; i++) {
        c++;
        var nodeId = goBack[i].nodeId;
        var element = document.getElementById(nodeId);
        if (element) {
            var delay = c / 20;
            element.style.animation = "pathBack 0.5s " + delay + "s forwards";
        }
    }
}
