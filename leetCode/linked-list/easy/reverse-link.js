// https://leetcode.com/problems/reverse-linked-list

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let reversed = null;
    while (head != null){
        const nextNode = head.next;
        head.next = reversed;
        reversed = head;
        head = nextNode;
    }
    return reversed
};
