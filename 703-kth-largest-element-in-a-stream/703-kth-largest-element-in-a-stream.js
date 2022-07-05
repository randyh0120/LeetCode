/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.heap = [];
    this.limit = k;
    
    for (let i = 0; i < nums.length; i++) {
        if (this.heap.length >= k && nums[i] < this.heap[0]) {
            continue
        }

        add(this.heap, nums[i]);

        if (this.heap.length > k) remove(this.heap);
    }
};

KthLargest.prototype.add = function(val) {
    let heap = this.heap;
    let k = this.limit
    
    add(heap, val, k);

    return heap.length ? heap[0] : null;
};

function add(heap, val, k) {
    heap.push(val);
    heapifyUp(heap, heap.length - 1);
    if (heap.length > k) remove(heap);
}

function heapifyUp(heap, child) {
    const parent = Math.floor((child - 1) / 2);

    if (heap[child] < heap[parent]) {
        [heap[child], heap[parent]] = [heap[parent], heap[child]];
        heapifyUp(heap, parent);
    }
}

function remove(heap) {
    heap[0] = heap.pop();
    heapifyDown(heap, 0);
}

function heapifyDown(heap, parent) {
    let left = (parent * 2) + 1;
    let right = (parent * 2) + 2;
    let min = left;

    if (left >= heap.length) return;

    if (right < heap.length && heap[right] < heap[left]) {
        min = right;
    }

    if (heap[min] < heap[parent]) {
        [heap[min], heap[parent]] = [heap[parent], heap[min]];
        heapifyDown(heap, min);
    }
}

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */