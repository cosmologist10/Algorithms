// https://leetcode.com/problems/merge-in-between-linked-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */

const mergeInBetween = (list1, a, b, list2) => {
    try{
        let start = list1;

        for(let i=0; i < a - 1; i+=1){
            start = start.next;
        }

        let end = start;
        for (let i=a; i <= b; i+=1){
            end = end.next;
        }

        start.next = list2;

        while(list2.next != null){
            list2 = list2.next
        }
        list2.next = end.next;
        return list1;
    } catch(ex){
        throw ex;
    }
};
