var firstUniqChar = function(s) {
  let tmp = [],
  away = [],
  searchT,
  searchA;

  for (let i = 0; i < s.length; i++) {
    searchT = tmp.find(s[i]);
    searchA = away.find(s[i]);

    if (searchT == undefined && searchA == undefined) {
      tmp.push(s[i])
    } else if (searchT == s[i] && searchA == undefined) {
      tmp.splice(searchT, 1);
      away.push(s[i])
    }
  }

  return tmp
};

console.log(firstUniqChar("leetcode"))