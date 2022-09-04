/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
  let a = headA;
  let b = headB;
  
  if (!a || !b) {
      return null
  }
  
 while (headA !== headB) {
     headA = headA ? headA.next : b
     headB = headB ? headB.next : a
 }
  
  return headA;
};