class LCA(object):
    def lowestCommonAncestor(self, root, p, q):
        """ Return lowest common ancestor of the tree."""

        self.count = 0
        node = self.find(root, p, q)
        return node if self.count == 2 else None

    def find(self, node, p, q):
        if not node:
            return None
        if node in (p, q):
            self.count += 1
        left = self.find(node.left, p, q)
        right = self.find(node.right, p, q)
        return node if node in (p, q) or left and right else left or right
