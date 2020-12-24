// https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(head1, head2) {
    try{
        if (head2 == null) return head2;
        const final = head1;
        while (head1 != null && head2 != null){
            let head1Next = head1.next;
            head1.next = head2;
            let head2Next = head2.next;
            head2.next = head1Next;
            head1 = head1Next;
            head2 = head2Next;
        }
        console.log('head2', final);
        return final;
    } catch(ex){
        console.log(ex);
        throw ex;
    }

};



