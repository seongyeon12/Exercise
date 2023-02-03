/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    let tmp = [a, b]

    let a1 = Math.max.apply(null, tmp)
    let a2 = Math.min.apply(null, tmp)
    let arr = []

    let s = Math.floor(a1 / 2)

    console.log(s)
    while (s >= 3) {
      console.log()
      if (a1 / s === 0) {
        console.log(s, 1)
        arr.push(s)
        s = Math.floor(s / 2)
      } else {
        console.log(s, 2)
        s -= 1
      }
    }

    console.log(arr)
  };

  console.log(commonFactors(25, 30))