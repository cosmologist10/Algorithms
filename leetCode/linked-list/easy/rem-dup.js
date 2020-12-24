// https://leetcode.com/problems/remove-duplicates-from-sorted-list/

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

const deleteDuplicates = (head) => {
    try{
        if (!head) return null;

        let curr = head; let next = head.next;

        while(next != null){
            if (curr.val == next.val){
                curr.next = next.next;
            } else{
                curr = next
            }
            next = next.next
        }
        return head
    } catch(ex){
        console.log('ex', ex);
        throw ex;
    }
};
