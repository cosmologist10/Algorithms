// https://leetcode.com/problems/intersection-of-two-linked-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

const getIntersectionNode = function(headA, headB) {
    if(!headA || !headB) return null;

    let currA = headA;
    let currB = headB;
    while(currA != currB) {
        console.log('before currA, currB:', currA, currB);
        currA = !currA ? headB : currA.next;
        currB = !currB ? headA : currB.next;
        console.log('after currA, currB:', currA, currB);

    }
    console.log('final:', currA);
    return currA
};


