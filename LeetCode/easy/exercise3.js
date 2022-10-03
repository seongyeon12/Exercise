var lengthOfLongestSubstring = function(s) {
  if (s.length === 0) {
    return 0;
  } else if (s.length === 1) {
    return 1;
  }
  let max = 0;
  let arr = [s[0]];
    for (let i = 1; i < s.length; i++) {
      if (arr.includes(s[i])) {
        if (s[i - 1] == s[i]) {
        max = Math.max(max, arr.length)
        arr = [s[i]];
        } else {
          for (let j = 0; j < arr.length; j++) {
            if (arr[j] === s[i]) {
              arr.splice(0, j + 1);
            }
          }
          arr.push(s[i]);
          max = Math.max(max, arr.length)
        }
      } else {
        arr.push(s[i]);
        max = Math.max(max, arr.length)
      }
    }
    return max;
};

console.log(lengthOfLongestSubstring(" "))