class Node(object):

    def __init__(self, info):  # constructor of class
        self.info = info
        self.left = None
        self. right = None
        self.level = None

    def __str__(self):
        return str(self.info)  # return as string


class searchtree:

    def __init__(self):  # constructor of class
        self.root = None

    def create(self, val):  # create binary tree search nodes

        if self.root is None:
            self.root = Node(val)

        else:
            current = self.root

            while True:

                if val < current.info:
                    if current.left:
                        current = current.left
                    else:
                        current.left = Node(val)
                        break

                elif val > current.info:

                    if current.right:
                        current = current.right
                    else:
                        current.right = Node(val)
                        break

                else:
                    break

    def preorder(self, node):
        if node is not None:
            print (node.info)
            self.preorder(node.left)
            self.preorder(node.right)

    def inorder(self, node):
        if node is not None:
            self.inorder(node.left)
            print (node.info)
            self.inorder(node.right)

    def postorder(self, node):
        if node is not None:
            self.postorder(node.left)
            self.postorder(node.right)
            print (node.info)


if __name__ == '__main__':
    import sys
    tree = searchtree()

    arr = [8, 3, 1, 6, 4, 7, 10, 14, 13]
    for i in arr:
        tree.create(i)

    print ('Preorder Traversal')
    tree.preorder(tree.root)

    print ('Inorder Traversal')
    tree.inorder(tree.root)

    print ('postorder Traversal')
    tree.postorder(tree.root)
