/**
 * @param {string} s
 * @return {number}
 */
  var firstUniqChar = function(s) {
    let obj = {};
    let r;

    // obj[s[0]] = 1;
    for(let i = 0; i < s.length; i++) {
      obj[s[i]] == undefined ? obj[s[i]] = 1 : obj[s[i]] += 1;
    }
    
    for(let [key, value] of Object.entries(obj)) {
      if (value == 1) {
        r = key;
        break;
      }
  }
  
  return s.indexOf(r);
};

console.log(firstUniqChar("lleetcode"))