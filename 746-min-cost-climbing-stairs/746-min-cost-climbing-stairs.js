/**
 * @param {number[]} cost
 * @return {number}
 */

// time O(n) | space O(1)
var minCostClimbingStairs = function(cost) {
    // Don't need these base cases since we have a contraint of 2 <= cost.length <= 1000
    //if (cost.length === 1) return cost[0];
    //if (cost.length === 2) return Math.min(cost[0], cost[1])
    
    let first = cost[0];
    let sec = cost[1];
    
    for (let i = 2; i < cost.length; i++) {
        const curMin = cost[i] +  Math.min(first, sec);
        first = sec;
        sec = curMin;
    }
    
    return Math.min(first, sec);
};