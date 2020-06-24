/**
Given an n-ary tree, return the postorder traversal of its nodes' values.
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
     const list = [];

    const rec = (root) =>{
       if(!root) return;
        for(var index = 0; index < root.children.length; index++){
            console.log(root.children[index])
            rec(root.children[index]);
        }
        list.push(root.val)
    }
    rec(root);
    return list;
};
