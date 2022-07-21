function solution(arr) {
  var answer = 0;
  arr.sort(function (a, b) {
  return a - b;
  });
  return arr[0];
}