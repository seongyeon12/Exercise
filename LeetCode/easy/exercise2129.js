function capitalizeTitle (title) {
  title = title.toLowerCase();
  title = title.split(" ");
  let first,
  rest,
  result = "";
  
  for (let i = 0; i < title.length; i++) {
    if(title[i].length > 2) {
    first = title[i].charAt(0).toUpperCase();
    rest = title[i].slice(1);
    result += first.concat(rest);
  } else {
    result += title[i];
  }
  if (i != title.length - 1) {
    result += " ";
  }
  
  }

  return result;
};

console.log(capitalizeTitle("i lOve leetcode"));