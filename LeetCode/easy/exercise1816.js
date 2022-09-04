/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var truncateSentence = function(s, k) {
  s = s.split(" ");
  let result = [];
  
  console.log(s)
  for (let i = 0; i < k; i++) {
      result.push(s[i]);
      console.log(s[i])
  }
  
  return result;
};

console.log(truncateSentence("Hello how are you Contestant", 4))