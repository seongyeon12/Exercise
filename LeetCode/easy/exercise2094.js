  var findEvenNumbers = function(digits) {
    let tmp = [];
    /* 3자리 임시 */
    let tmp2 = [];

    /* 중복제거 */
    let set = new Set();

    console.log(set);
    /* 아이와 제이를 저장할 변수 */
    let usei,
    usej;

    /* 첫번째는 배열의 크기로 (0제외)*/
  for (let i = 0; i < digits.length; i++) {
    usei = i;
    if (digits[i] == 0) {
      continue;
    }
    for2(usei);
  }

  /* 두번째 */
  function for2(usei2) {
    for (let j = 0; j < digits.length; j++) {
      usej = j;
      if (usei2 == j) {
        continue;
      }
        for3(usei2, usej);
    }
  }

  /* 세번째 */
  function for3(usei3, usej2) {
    for (let v = 0; v < digits.length; v++) {
      if (usei3 == v || usej2 == v) {
        continue;
      }
        tmp2 = [digits[usei3], digits[usej2], digits[v]];
        tmp2 = (parseInt(tmp2.join("")));
        if (tmp2 % 2 == 0) {
          set.add(tmp2);
        }
    }
  }
  let arr = Array.from(set);

  return arr.sort((a, b) => a - b);
};

console.log(findEvenNumbers([2,2,8,8,2]));