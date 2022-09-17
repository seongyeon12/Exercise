var isSameTree = function (p, q) {
  function check(p, q) {
      if (!p || !q) return p === q; // p나 q가 널인 상황
      if (p.val !== q.val) return false; // 둘이 다른 값
      return check(p.left, q.left) && check(p.right, q.right);
  }
  return check(p, q);
};

//[참고]https://leetcode.com/problems/same-tree/discuss/1332202/js