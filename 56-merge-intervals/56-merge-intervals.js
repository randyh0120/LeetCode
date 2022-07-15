/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

// time O(n) | space O(n)
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let res = [intervals[0]];
    
    for (let i = 1; i < intervals.length; i++) {
        const [start, end] = intervals[i];
        
        if (end <= res[res.length - 1][1]) {
            continue;
        } else if (start <= res[res.length - 1][1]) {
            res[res.length - 1][1] = end;
        } else {
            res.push([start, end]);
        }
    }
    
    return res;
};