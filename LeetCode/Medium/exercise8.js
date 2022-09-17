var myAtoi = function(s) {
  s = parseInt(s);

  if (Number.isNaN(s)) {
    return 0;
  }

  if (s > 2147483647) {
    return 2147483647
  } else if (s < -2147483648) {
    return -2147483648
  } else {
  return s
}
};

console.log(myAtoi("   +22365858353-"))

let v = "with words"
v = v.replace(/[^0-9]/gi), "";
console.log(v)