/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */

// time O(n) | space O(n)
var cloneGraph = function(node) {
    if (!node) return null;
    
    let map = new Map();
    
    function dfs(node) {
        if (map.has(node)) return map.get(node);
        
        const newNode = new Node(node.val);
        
        // Becuase we have an undirected graph, we can have a cycle. 
        // We keep track of what we have seen, so we can use our previous "seen"
        // node and children without recursing it and being trapped in an infinite loop
        map.set(node, newNode);
        
        for (const nei of node.neighbors) {
            newNode.neighbors.push(dfs(nei));
        }
        
        return newNode;
    }
    
    return dfs(node);
};