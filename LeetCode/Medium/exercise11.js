/* 
  기준점은 한칸씩 변경
  현재 기준점 기준으로 앞에 있는 수 계산해서 맥스 계산 
  한칸씩 앞으로 가면서 기준점 = 크기가 될 때까지 반복 

  max 반환
*/

var maxArea = function(height) {
    let max = 0;
    let l = 0;
    let r = height.length - 1;

    while (l < r) {
      max = Math.max(max, Math.min(height[l], height[r]) * (r - l));

      if (height[l] < height[r]) {
        l++
      } else {
        r--;
      }
    }
    
    return max;
  };

console.log(maxArea([1,8,6,2,5,4,8,3,7]));