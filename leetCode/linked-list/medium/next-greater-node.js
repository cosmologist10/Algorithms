// https://leetcode.com/problems/next-greater-node-in-linked-list/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */

const reverseList = head => {
    try{
        let reversedHead = null;
        while(head != null){
            const nextNode = head.next;
            head.next= reversedHead;
            reversedHead = head;
            head = nextNode
        }
        return reversedHead;
    } catch(ex){
        console.log('ex:', ex);
        throw ex;
    }
}

const nextLargerNodes = (head) => {
    try{
        let reversedHead = reverseList(head);

        let finalArr = []; const stack = [];

        while(reversedHead != null){

            while(stack.length > 0 && stack[stack.length - 1] <= reversedHead.val){
                stack.pop()
            }
            finalArr.push(stack.length === 0 ? 0 : stack[stack.length - 1]);
            stack.push(reversedHead.val);
            reversedHead = reversedHead.next
        }
        finalArr = finalArr.reverse();
        return finalArr

    } catch(ex){
        console.log('ex:', ex);
        throw ex;
    }
};



