// https://leetcode.com/problems/add-two-numbers-ii/

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

const getStack = head => {
    let array = [];
    while(head){
        array.push(head.val)
        head = head.next;
    }
    return array;
}


const addTwoNumbers = function(l1, l2) {
    try{
        let l1Stack = getStack(l1);
        let l2Stack = getStack(l2);

        let sumNode = new ListNode(0);


        while(l1Stack.length || l2Stack.length) {
            let sum = 0;

            if(l1Stack.length) sum += l1Stack.pop();
            if(l2Stack.length) sum += l2Stack.pop();

            sum += sumNode.val;
            sumNode.val = sum % 10;

            let head = new ListNode(Math.floor(sum/10));
            head.next = sumNode;
            sumNode = head;
        }
        return (sumNode.val === 0) ? sumNode.next : sumNode;
    } catch(ex){
        console.log('ex:', ex);

    }
};


