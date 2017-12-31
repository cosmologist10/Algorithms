class BinaryTree:
    class Node:
        def __init__(self, data):
            self.data = data
            self.left = None
            self.right = None

    root = None

    def _add(self, node, data):
        if not node:
            return self.Node(data)
        if data < node.data:
            node.left = self._add(node.left, data)
        elif data > node.data:
            node.right = self._add(node.right, data)
        return node

    def add(self, data):
        self.root = self._add(self.root, data)

    def _getHeight(self, node):
        if not node:
            return -1
        return 1 + max(self._getHeight(node.left), self._getHeight(node.right))

    def getHeight(self):
        return self._getHeight(self.root)


if __name__ == '__main__':
    import sys
    tree = BinaryTree()
    for place, line in enumerate(sys.stdin):
        if place != 0:
            tree.add(int(line.strip()))
    print(tree.getHeight())
