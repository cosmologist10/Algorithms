// https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/

/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {

    if(head===null){
        return null;
    }

    let current = head;

    if(current.child){
        let tail = findTail(current.child);
        console.log('tail :', tail);
        let nextNode = current.next;
        current.next = current.child;
        current.child.prev = current;
        if(nextNode) nextNode.prev = tail;
        tail.next = nextNode;
        current.child = null;
    }

    flatten(current.next)

    return head;
};


function findTail(node){

    while(node.next){
        node = node.next;
    }
    return node;

}

