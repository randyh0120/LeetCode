/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let total = 0
    let start = 0;
    let tank = 0;
    
    for (let i = 0; i < gas.length; i++) {
        const consume = gas[i] - cost[i];
        tank += consume;
        
        if (tank < 0) {
            start = i + 1;
            tank = 0;
        }
            
        total += consume;
    }
    
    return total < 0 ? -1 : start;
};

// [1,2,3,4,5] 
// [3,4,5,1,2]
// -2
// -2
//   -2
//   -4
//     -2
//     -6
//        3
//       -3
//          3
//          0