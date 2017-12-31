# Reference https://www.hackerrank.com/challenges/insert-a-node-at-the-tail-of-a-linked-list/problem

"""
 Insert Node at a specific position in a linked list
 head input could be None as well for empty list
 Node is defined as

 class Node(object):

   def __init__(self, data=None, next_node=None):
       self.data = data
       self.next = next_node

 return back the head of the linked list in the below method.
"""
# This is a "method-only" submission.
# You only need to complete this method.


def InsertNth(head, data, position):
    if position == 0:
        return Node(data=data, next_node=head)
    else:
        curr_node = head
        for _ in range(position):
            prev_node = curr_node
            curr_node = curr_node.next
        prev_node.next = Node(data=data, next_node=curr_node)
    return head
