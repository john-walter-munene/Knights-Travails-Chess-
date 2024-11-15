function knightMovesShortestPath([baseXCoordinate, baseYCoordinate], [targetXCoordinate, targetYCoordinate]) {
    if (typeof baseXCoordinate !== 'number' || typeof baseYCoordinate !== 'number') {
        [baseXCoordinate, baseYCoordinate] = [0, 0];  // Default start point
    }

    if (typeof targetXCoordinate !== 'number' || typeof targetYCoordinate !== 'number') {
        throw new Error("I need a valid target vertex to move to");
    }

    if ([baseXCoordinate, baseYCoordinate].toString() === [targetXCoordinate, targetYCoordinate].toString()) {
        return [[baseXCoordinate, baseYCoordinate]]; // Return the start position as the path
    }

    return findShortestPath([baseXCoordinate, baseYCoordinate], [targetXCoordinate, targetYCoordinate]);
}

function findShortestPath([startX, startY], [targetX, targetY]) {
    // Directions for knight's movement
    const knightMoves = [
        [1, 2], [1, -2], [-1, 2], [-1, -2],
        [2, 1], [2, -1], [-2, 1], [-2, -1]
    ];

    // Queue for BFS: stores [x, y, path]
    const queue = [[startX, startY, [[startX, startY]]]];
    const visited = new Set();
    visited.add(`${startX},${startY}`); // Mark start as visited

    while (queue.length > 0) {
        const [currentX, currentY, path] = queue.shift(); // Get the next node and its path

        // If we reach the target, return the path
        if (currentX === targetX && currentY === targetY) {
            return path;
        }

        // Explore all valid knight moves
        for (const [dx, dy] of knightMoves) {
            const newX = currentX + dx;
            const newY = currentY + dy;

            // Check if the new position is within the bounds and not visited
            if (newX >= 0 && newY >= 0 && newX <= 7 && newY <= 7 && !visited.has(`${newX},${newY}`)) {
                visited.add(`${newX},${newY}`); // Mark new position as visited
                queue.push([newX, newY, [...path, [newX, newY]]]); // Add new position to the queue with updated path
            }
        }
    }

    return []; // Return an empty array if no path is found
}

export { knightMovesShortestPath };