var sumOddLengthSubarrays = function(arr) {
  let nums = 1,
  tmp = [];

  if (arr == 1) {
    return arr[0];
  }

  while (nums <= arr.length) {
  for(let i = 0; i < arr.length + 1 - nums; i++) {
    tmp.push.apply(tmp, arr.slice(i, i + nums))
  }
  nums += 2;
}
  return tmp.reduce((acc, cur) => acc + cur, 0);
};

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]))
