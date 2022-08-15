function nums(num, k) {
  let arr = [];
  k = String(k);
  for (let i = 1; i <= num; i++) {
    arr.push(String(i))
  }

  arr = arr.join("").split("");

  let newArr = arr.filter(function(data) {
    return data === k ? true : false;
  })

  return newArr.length;
}

console.log(nums(65535, 6))