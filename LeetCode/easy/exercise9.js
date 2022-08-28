var isPalindrome = function(x) {
  const arr = (x + '').split('');
  const reverseArr = [...arr];

  reverseArr.reverse();

  const arr1 = arr.join("");
  const reverseArr1 = reverseArr.join("");

  return arr1 == reverseArr1;
};

var isPalindrome = function(x) {
  if(x < 0) return false;
  var lastDigit;
  var reverseNumber = 0;
  var y=x;
  while(x > 0) {
      lastDigit = x % 10;
      x = parseInt(x/10);
      reverseNumber = reverseNumber*10 + lastDigit;  
  }
  
  if(y === reverseNumber) {
    return true;   
  }
  return false;
};

console.log(isPalindrome(555))