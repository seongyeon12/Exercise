/*  
고려할 것 
*/

var minSetSize = function(arr) {
  let set = new Set(arr);
  let newArr = [...set];
  
  const subsets = (nums) => {
    const res = [];
  
    const dfs = (start = 0, arr = []) => {
      res.push(arr);
      
      if (arr.length === nums) return;
  
      for (let i = start; i < nums.length; i++) {
        dfs(i + 1, [...arr, nums[i]]);
      }
    };
    dfs();
  
    return res;
  };

  console.log(subsets(newArr))
};

console.log(minSetSize([3,3,3,3,5,5,5,2,2,7]))