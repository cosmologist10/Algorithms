// https://leetcode.com/problems/reorder-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


const mergeLists = (head1, head2) => {
    // assume list1 has equal or more node than list2
    try{
        while(head2 !== null){
            let head1Next = head1.next;
            head1.next = head2;
            let head2Next = head2.next;
            head2.next = head1Next;
            head1 = head1Next;
            head2 = head2Next;
        }
    } catch(ex){
        throw ex;
    }
};

const reverseList  = (head) => {
    try{
        let reversedList = null;
        while(head !== null){
            const nextNode = head.next;
            head.next = reversedList;
            reversedList = head;
            head = nextNode
        }
        return reversedList
    } catch(ex){
        throw ex;
    }
};

const splitList = (head) => {
    // return head of second list
    // point previous node -> next to NULL
    // assume head is not NULL
    try{
        let slow = head; let fast = head.next;
        while(fast != null && fast.next != null){
            slow = slow.next;
            fast = fast.next.next
        }
        const head2 = slow.next;
        slow.next = null;
        return head2;
    } catch(ex){
        throw ex;
    }
};

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
// split -> reverse -> merge
const reorderList = (head) => {
    try{
        if (head == null) return;
        let head2 = splitList(head);
        mergeLists(head, reverseList(head2))
    } catch(ex){
        throw ex;
    }
};


