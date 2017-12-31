from collections import deque


class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None


def top_view(root):
    """ Print Nodes in Top View of Binary Tree """

    if root is None:
        return

    # make an empty queue for BFS
    q = deque()

    # empty set
    sets = set({})

    # list to store top view keys
    topview = []

    # append root in the queue with horizontal distance as 0
    q.append((root, 0))

    while q:
        # get the element and horizontal distance
        elem, d = q.popleft()

        # if the hd is seen first time it will be top view
        if d not in sets:
            topview.append((elem.data, d))
            sets.add(d)

        # add left and right child in the queue with hd - 1 and hd + 1
        if elem.left is not None:
            q.append((elem.left, d - 1))
        if elem.right is not None:
            q.append((elem.right, d + 1))

        # return the sorted topview on the basis of hd
        return sorted(topview, key=lambda x: x[1])
