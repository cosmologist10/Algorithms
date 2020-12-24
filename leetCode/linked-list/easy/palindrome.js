// https://leetcode.com/problems/palindrome-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

const getMidNode = head => {
    try{
        let slow = head; let fast = head.next;
        while(fast != null && fast.next != null){
            slow = slow.next;
            fast = fast.next.next
        }
        const head2 = slow.next;
        slow.next = null;
        console.log('head2:', head2);
        return head2;
    } catch(ex){
        console.log('ex:', ex)
        throw ex;
    }
};

const reverseHead = head => {
    try{
        let reversedNode = null;
        while (head != null){
            const nextNode = head.next;
            head.next = reversedNode;
            reversedNode = head;
            head = nextNode;
        }
        console.log('reversedNode :', reversedNode);
        return reversedNode;
    }catch(ex){
        console.log('ex:', ex)
        throw ex;
    }
};


const isPalindrome = function(head) {
    try{
        if (!head) return null;
        if (!head.next) return true;
        const head1 = getMidNode(head);
        const head2= reverseHead(head);
        console.log('head1', head1, head2);
        return head1 === head2
    } catch(ex){
        console.log('ex:', ex)
        throw ex;
    }
};
