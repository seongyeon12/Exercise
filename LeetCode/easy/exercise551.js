var checkRecord = function(s) {
  let num = [0];

  for (let i = 0; i < s.length; i++) {
    if(s[i] == "A") {
      num++;
      if (num == 2) {
        return false;
      }
    } else if (s[i - 2] == "L" && s[i - 1] == "L" && s[i] == "L") {
      return false;
    }
  }

  return true;
};

console.log(checkRecord("PPALLP"))

