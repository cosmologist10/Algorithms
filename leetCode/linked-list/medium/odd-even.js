// https://leetcode.com/problems/odd-even-linked-list/

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


var oddEvenList = function(head) {
    try{
        if (head == null || head.next == null) {
            return head;
        }

        let odd = head; let evenHead = head.next; let even = evenHead;

        while (even != null && even.next != null) {
            odd.next = even.next;
            odd = odd.next;
            even.next = odd.next;
            even = even.next;
        }

        odd.next = evenHead;

        return head;
    } catch(ex){
        console.log('ex:', ex);
        throw ex;
    }
};
