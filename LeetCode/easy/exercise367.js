/* 
  1 예외처리
  숫자를 1씩 계속 올리고 제곱해서 기존 수를 넘어갈경우 false
  아니면 true
*/

var isPerfectSquare = function(num) {
  let num2 = 1,
  result = 0;

  while(result < num) {
    result = num2 ** 2;
    
    if (result == num) {
      return true;
    }

    num2++;
  }

  return false;
};

console.log(isPerfectSquare(1))