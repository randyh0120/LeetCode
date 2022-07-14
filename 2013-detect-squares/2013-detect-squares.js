
class DetectSquares {
    constructor() {
        this.map = {};
        this.points = [];
    }
    
    /** 
     * @param {number[]} point
     * @return {void}
     */
    add(point) {
        const [x, y] = point;
        const str = x + ',' + y
        
        this.map[str] = (this.map[str] || 0) + 1;
        this.points.push([x, y]);
    }
    
    /** 
     * @param {number[]} point
     * @return {number}
     */
    count(point) {
        let res = 0;
        const [x1, y1] = point;
        
        for (const [x3, y3] of this.points) {
            // Check if perfect square
            if (x1 === x3 || Math.abs(x1 - x3) !== Math.abs(y1 - y3)) {
                continue;
            }
            
            const [x2, y2] = [x1, y3];
            const [x4, y4] = [x3, y1];
            const p2 = x2 + ',' + y2;
            const p4 = x4 + ',' + y4;
            
            res += (this.map[p2] || 0) * (this.map[p4] || 0);
        }
        
        return res;
    }
}


/** 
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */