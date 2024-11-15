# Knights Travails
In this project, I demonstrate my knowledge on Depth First Search (DFS) algorithm solving a real world problem. The project entails a graph traversal problem where I get the knights possible shortest route to a target vertex. I have implemented two solutions for this problem.

## knightMoves Function
The `knightMoves` function calculates the shortest path for a knight on a standard 8x8 chessboard, using **Breadth-First Search (BFS)**. This function works by exploring all possible knight moves until it finds the shortest path to the target.

### Parameters
- **[baseXCoordinate, baseYCoordinate]**: The starting position of the knight on the chessboard, represented as an array of two numbers (x, y).
- **[targetXCoordinate, targetYCoordinate]**: The target position the knight should reach, represented as an array of two numbers (x, y).

### Returns
- **Array of coordinates**: An array representing the shortest path from the start to the target. The path is a series of [x, y] coordinates that represent each move the knight will take.
  
### Example Usage
```js
const start = [0, 0];  // Starting position
const target = [7, 7];  // Target position
const path = knightMoves(start, target);
console.log(path);  // [[0, 0], [1, 2], [2, 4], [3, 6], [4, 4], [5, 6], [7, 7]]
```

### Function Workflow
1. **Input Validation**: The function checks if the input coordinates are valid (numbers). If not, it defaults the starting point to `[0, 0]` and throws an error if the target coordinates are invalid.
2. **Breadth-First Search (BFS)**: The function explores all possible knight moves using BFS to ensure the shortest path is found. It keeps track of visited positions to avoid revisiting them.
3. **Path Construction**: If the target is found, the function reconstructs the path from the starting position to the target using the parent nodes stored in the `parentsMap`.

## knightMovesShortestPath Function
The `knightMovesShortestPath` function also calculates the shortest path for a knight, but with a slightly different approach. This version uses BFS with a queue that stores the path alongside each position, eliminating the need for a parent map.

### Parameters
- **[baseXCoordinate, baseYCoordinate]**: The starting position of the knight on the chessboard, represented as an array of two numbers (x, y).
- **[targetXCoordinate, targetYCoordinate]**: The target position the knight should reach, represented as an array of two numbers (x, y).

### Returns
- **Array of coordinates**: An array representing the shortest path from the start to the target. The path is a series of [x, y] coordinates that represent each move the knight will take.
  
### Example Usage
```js
const start = [0, 0];  // Starting position
const target = [7, 7];  // Target position
const path = knightMovesShortestPath(start, target);
console.log(path);  // [[0, 0], [1, 2], [2, 4], [3, 6], [4, 4], [5, 6], [7, 7]]
```

### Function Workflow
1. **Input Validation**: The function checks if the input coordinates are valid (numbers). If the target coordinates are invalid, it throws an error. If the start and target are the same, the function returns the starting position as the path.
2. **Breadth-First Search (BFS)**: Similar to the first function, BFS is used to explore all possible moves. The difference here is that the queue stores the path along with each position.
3. **Path Construction**: When the target is found, the function immediately returns the path, which has been built incrementally during BFS.

## Key Differences Between the Two Functions

- **Path Construction**:  
  - `knightMoves` uses a parent map to track the route and reconstruct the path once the target is found.
  - `knightMovesShortestPath` builds the path in real-time by storing the full path with each position in the queue.
  
- **Complexity**:  
  - `knightMoves` uses a more complex method (parent map) but is more flexible when you need to track additional information.
  - `knightMovesShortestPath` is slightly simpler and may be more intuitive for basic shortest-path problems.

### Additional Notes:
- **Coordinate System**: The knight's movement follows a typical chessboard layout, with coordinates starting from `[0, 0]` at the top-left corner and going up to `[7, 7]` at the bottom-right corner.
- **Edge Cases**: If the start and target positions are the same, both functions immediately return the starting position as the shortest path.