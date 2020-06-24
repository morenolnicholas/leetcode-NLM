/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    const list = [];

    const rec = (root) =>{
       if(!root) return;
        list.push(root.val);
        for(var index = 0; index < root.children.length; index++){
            rec(root.children[index]);
        }
    }
    rec(root);
    return list;
};
