var climbStairs = function(n) {
  if (n < 2) {
    return n
  }
  
  let a = 0,
  b = 1;
  
  for (let i = 0; i < n; i++) {
    let sum = a + b;
    a = b;
    b = sum;
  }
  
  return b;
};

console.log(climbStairs(5))