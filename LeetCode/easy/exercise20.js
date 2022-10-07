/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let q = [];
    let v;

  for (let i = 0; i < s.length; i++) {
    v = s[i];

    switch (v) {
      case "(":
      case "[":
      case "{":
        q.push(v);
        break;
      case ")":
        if (q[q.length -1] == "(") {
          q.pop()
        } else {
          return false;
        }
        break;
      case "]":
        if (q[q.length -1] == "[") {
          q.pop()
        } else {
          return false;
        }
        break;
      case "}":
        if (q[q.length -1] == "{") {
          q.pop()
        } else {
          return false;
        }
        break;
      }  
    }

    if (q.length == 0) {
      return true;
    } 

    return false;
};

console.log(isValid("()"))