var reverse = function(x) {
  let t = false;

    if (x < 0) {
      t = true;
      x = Math.abs(x);
    }

    let arr = Array.from(String(x))
    
    if(arr[arr.length - 1] === "0") {
      arr.pop()
    }

    let num = Number(arr.reverse().join(""))

    if (num < -2147483648 || num > 2147483647) {
      return 0
    }

    if (t) {
      return num * -1
    } else {
      return num
    }
};

console.log(reverse(1534236469))