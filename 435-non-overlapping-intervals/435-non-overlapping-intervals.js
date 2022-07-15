/**
 * @param {number[][]} intervals
 * @return {number}
 */

// time O(n log n) | space O(1)
var eraseOverlapIntervals = function(intervals) {
    let ans = 0;
    
    intervals.sort((a, b) => a[1] - b[1]);
    
    let prev = intervals[0];
    
    for (let i = 1; i < intervals.length; i++) {
        const [start, end] = intervals[i];
        
         if (prev[1] > start) {
            ans += 1;
        } else {
            prev = intervals[i];
        }
    }
    
    return ans;
};