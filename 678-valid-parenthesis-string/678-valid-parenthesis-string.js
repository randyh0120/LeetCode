/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let open = 0;
    let close = 0;
    
    for (const c of s) {
        if (c === '(') {
            open += 1;
            close += 1;
            continue;
        }
        
        if (c === ')' && open === 0) {
            return false;
        }
        
        if (c === ')') {
            open--;
            close = Math.max(0, close - 1);
            continue;
        }
        
        open += 1;
        close = Math.max(0, close - 1);
    }
    
    return close === 0;
};