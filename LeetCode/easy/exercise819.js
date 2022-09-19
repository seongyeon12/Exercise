/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
 var mostCommonWord = function(paragraph, banned) {
  let arr = paragraph.toLowerCase().split(/[^A-Za-z]/g);

  for (let i = 0; i < arr.length; i++) {
  arr = arr.filter((word) => word != banned[i]);
} 
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] ? obj[arr[i]] += 1 : obj[arr[i]] = 1;
  }

  const sortable = Object.entries(obj).sort(([, a], [, b]) => b - a).reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

  let result = Object.keys(sortable);

  if (result[0] == "") {
    return result[1];
  } else {
    return result[0]
  }
};

var mostCommonWord = function(paragraph, banned) {
  paragraph = paragraph.toLowerCase()
  paragraph = paragraph.match(/\w+/g)
  
  let hash = paragraph.reduce((obj, item) => {
      if (!banned.includes(item)) {
          obj[item] = obj[item] + 1 || 1
      }
      return obj
  }, {})
  
  let max = 0
  let word = ''
  for (const key in hash) {
      if (hash[key] > max) {
        console.log(key)
          max = hash[key]
          word = key
      }
  }
  
  return word
};
  

console.log(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"]))