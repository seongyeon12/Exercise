var reverseWords = function(s) {
    let result = [];
    s = s.split(' ');
  
    for (let i = 0; i < s.length; i++) {
      result.push(s[i].split("").reverse().join(""))
    }

    return result.join(" ");
};

console.log(reverseWords("Let's take LeetCode contest"))