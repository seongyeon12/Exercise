/* 
  중위순회 구현
*/
var inorderTraversal = function(root) {
  let arr = [];
  
  function re(node) {
      if (node.left) {
          re(node.left);
      }
      arr.push(node.val)
      if (node.right) {
          re(node.right)
      }
  }
  
  if (root) {re(root)}
  
  return arr
};