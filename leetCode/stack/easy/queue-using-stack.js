// https://leetcode.com/problems/implement-queue-using-stacks/

/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.queue = [];

};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.queue = [...this.queue, x];
    return true
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(this.queue.empty){
        return false
    }
    const res = this.queue[0]
    this.queue = this.queue.splice(1);
    return res;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(this.queue.empty){
        return false
    }
    return this.queue[0]
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if(this.queue.length === 0){
        return true
    } else{
        return false;
    }
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
