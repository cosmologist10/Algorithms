// https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
// const getDecimalValue = head => {
//   let val = 0;
//   while (head) {
//       console.log('head:', head)
//      console.log('val:', val);
//     val = (val << 1) | head.val;
//     console.log('after val:', val);
//     head = head.next;
//   }
//   return val;
// };

const lenLinkedList = head => {
    try{
        let count = 0;
        while(head !== null){
            head = head.next;
            count += 1;
        }
        return count
    } catch(ex){
        throw ex;
    }
}


const getDecimalValue = head => {
    try{
        let count = 0;
        let exponent = lenLinkedList(head) - 1;
        while(head !== null){
            count += head.val * 2 **exponent;
            head = head.next;
            exponent --
        }
        return count
    } catch(ex){
        throw ex;
    }
}
