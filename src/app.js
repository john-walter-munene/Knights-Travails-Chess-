function knightMoves([baseXCoordinate, baseYCoordinate], [targetXCoordinate, targetYCoordinate]) {
    // Handle base case and error checkpoints.
    if (typeof baseXCoordinate !== 'number' || typeof baseYCoordinate !== 'number') {
        [baseXCoordinate, baseYCoordinate] = [0, 0];  // Default start point
    }

    if (typeof targetXCoordinate !== 'number' || typeof targetYCoordinate !== 'number') {
        throw new Error("I need a valid target vertex to move to");
    }

    // Handle the case where start and target are the same.
    if ([baseXCoordinate, baseYCoordinate].toString() === [targetXCoordinate, targetYCoordinate].toString()) {
        return [[baseXCoordinate, baseYCoordinate]]; // Return the start position as the path
    }

    // Initialize queue for BFS and tracking structures
    let pathQueue = [[baseXCoordinate, baseYCoordinate]];  // Queue to process positions
    let parentsMap = new Map();  // To track the parent node for each visited node
    let visitedNodes = new Set();  // A Set for quick lookup of visited nodes

    // BFS to find shortest path
    while (pathQueue.length) {
        let [currentX, currentY] = pathQueue.shift();  // Dequeue the current position

        // Get valid knight moves from the current node
        let validMoves = getValidMoves(currentX, currentY);
        for (let [xCoordinate, yCoordinate] of validMoves) {
            // If the position hasn't been visited, process it
            const nodeKey = `${xCoordinate},${yCoordinate}`;  // Stringify for Set lookup
            if (!visitedNodes.has(nodeKey)) {
                visitedNodes.add(nodeKey);  // Mark this node as visited
                pathQueue.push([xCoordinate, yCoordinate]);  // Enqueue for further exploration
                parentsMap.set(nodeKey, [currentX, currentY]);  // Set parent node

                // Stop when the target is found
                if (xCoordinate === targetXCoordinate && yCoordinate === targetYCoordinate) {
                    return pathConstructor(parentsMap, [baseXCoordinate, baseYCoordinate], [targetXCoordinate, targetYCoordinate]);
                }
            }
        }
    }
}

// Function to get valid knight moves from a given position
function getValidMoves(baseXCoordinate, baseYCoordinate) {
    // Board limits.
    const minimumXCoordinate = 0;
    const minimumYCoordinate = 0;
    const maximumXCoordinate = 7;
    const maximumYCoordinate = 7;

    // Possible knight moves (L-shaped).
    const possibleMoves = [
        [baseXCoordinate + 1, baseYCoordinate + 2],
        [baseXCoordinate - 1, baseYCoordinate + 2],
        [baseXCoordinate - 2, baseYCoordinate + 1],
        [baseXCoordinate - 2, baseYCoordinate - 1],
        [baseXCoordinate - 1, baseYCoordinate - 2],
        [baseXCoordinate + 1, baseYCoordinate - 2],
        [baseXCoordinate + 2, baseYCoordinate - 1],
        [baseXCoordinate + 2, baseYCoordinate + 1]
    ];

    // Filter valid moves (within the board limits)
    return possibleMoves.filter(([x, y]) => 
        x >= minimumXCoordinate && x <= maximumXCoordinate &&
        y >= minimumYCoordinate && y <= maximumYCoordinate
    );
}

// Helper to reconstruct the path from the parent map
function pathConstructor(parentsMap, start, end) {
    let path = [];
    let current = end;
    while (current.toString() !== start.toString()) {
        path.push(current);  // Add current node to path
        current = parentsMap.get(current.toString());  // Move to parent node
    }
    path.push(start);  // Add the start node
    return path.reverse();  // Reverse the path to get it from start to end
}

export { knightMoves };