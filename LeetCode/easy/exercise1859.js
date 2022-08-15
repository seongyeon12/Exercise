var sortSentence = function(s) {
    let arr = s.split(" "),
    result = [],
    position;

    for(let i = 0; i < arr.length; i++) {
      position = arr[i].substr(-1);
      result[position - 1] = arr[i].slice(0, -1);
    }

    return result.join(" ");
};

console.log(sortSentence("is2 sentence4 This1 a3"))