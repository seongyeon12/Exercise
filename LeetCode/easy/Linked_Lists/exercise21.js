var mergeTwoLists = function(l1, l2) {
  if (!l1) {
    return l2
  } else if(!l2) {
    return l1
  }
  let list = new ListNode()

  if (l1.val <= l2.val) {
    list.val = l1.val 
    l1 = l1.next
  } else {
    list.val = l2.val 
    l2 = l2.next
  }

  let cur = list;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      let node = new ListNode(l1.val, null)
      cur.next = node
      cur = cur.next
      l1 = l1.next
    } else {
      let node = new ListNode(l2.val, null)
      cur.next = node
      cur = cur.next
      l2 = l2.next
    }
  }

  if (!l1) {
    cur.next = l2
  } else {
    cur.next = l1
  }

  return list
}