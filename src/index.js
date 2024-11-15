import { knightMoves } from "./app";
import { knightMovesShortestPath } from "./appTwo";

const start = [0, 0];  // Starting position
const target = [7, 7];  // Target position

const testPathOne = knightMoves(start, target);
console.log(testPathOne); // [[0, 0], [1, 2], [2, 4], [3, 6], [4, 4], [5, 6], [7, 7]]

const testPathTwo = knightMovesShortestPath(start, target);
console.log(testPathTwo); // [[0, 0], [1, 2], [2, 4], [3, 6], [4, 4], [5, 6], [7, 7]]