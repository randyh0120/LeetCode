/**
 * @param {number[]} stones
 * @return {number}
 */

// time O(n log n) | space O(1);
var lastStoneWeight = function(stones) {
    if (stones.length === 1) return stones;
    stones.sort((a, b) => a - b);
    
    let a = stones.pop();
    let b = stones.pop();
    stones.push(Math.abs(a - b));
    
    return lastStoneWeight(stones);
};