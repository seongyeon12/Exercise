/**
 * @param {string} s
 * @return {string}
 */
/* .reverse().join(" ") */
 var reverseWords = function(s) {
    let arr = s.split(' ')

    let result = arr.filter(w => w === "" ? false : true)
    return result.reverse().join(" ")
};

console.log(reverseWords("  hello world  "))