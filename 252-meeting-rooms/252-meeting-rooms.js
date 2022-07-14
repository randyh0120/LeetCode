/**
 * @param {number[][]} intervals
 * @return {boolean}
 */

// time O(n log n) | space O(1)
var canAttendMeetings = function(intervals) {
    if (!intervals || intervals.length <= 1) return true;
    
    intervals.sort((a, b) => a[0] - b[0]);
    
    for (let i = 1; i < intervals.length; i++) {
        // Can't attend if the next meeting starts before the previous ends
        if (intervals[i][0] < intervals[i - 1][1]) return false;
    }
    
    return true;
};