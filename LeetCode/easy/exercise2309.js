let s = "AbCdEfGhIjK";
s = [...s];

const set = new Set(s);
s = [...set];

s = s.join('');

let upper = s.toUpperCase();
let lower = s.toLowerCase();
let upperArr = "";
let lowerArr = "";
let tmp = [];

for (let i = 0; i < s.length; i++) {
  if (s[i] == upper[i]) {
    upperArr += s[i];
  } else {
    lowerArr += s[i];
  }
}
lowerArr = lowerArr.toUpperCase();

for (let i = 0; i < upperArr.length; i++) {
  for (let j = 0; j < lowerArr.length; j++) {
    if (upperArr[i] == lowerArr[j]) {
      tmp.push(upperArr[i]);
      break;
    }
  }
}
if (tmp.length < 1) {
  console.log("hello");
}
tmp = tmp.sort();

return tmp[tmp.length - 1];