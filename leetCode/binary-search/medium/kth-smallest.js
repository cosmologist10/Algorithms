// https://leetcode.com/problems/kth-smallest-element-in-a-bst/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

const getNodes = (root) => {
    try{
        if (!root){
            return 0
        }
        return 1 + getNodes(root.left) + getNodes(root.right)
    } catch(ex){
        throw ex;
    }
}

var kthSmallest = function(root, k) {
    const count = getNodes(root.left);
    if ((count + 1) < k){
        return kthSmallest(root.right, k - count - 1)
    } else if (count+1 === k){
        return root.val
    } else{
        return kthSmallest(root.left, k)
    }

};


