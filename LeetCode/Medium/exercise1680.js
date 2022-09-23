/**
 * @param {number} n
 * @return {number}
 */
 var concatenatedBinary = function(n) {
  let num = ""
  let result = 0
    for (let i = 1; i <= n; i++) {
      num = result.toString(2)
      num += i.toString(2)
      result = parseInt(num, 2) % 1000000007
    }

    return result
  }

console.log(concatenatedBinary(4))