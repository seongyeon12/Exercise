/* 
  둘다 배열 형태로 만들 것
  랜섬노트의 배열 수만큼 반복문, 끝까지 찾지 못할 경우 false, 중간에 찾을 경우 다음 배열로 넘어갈 것
  끝까지 올 경우에만 true 반환
*/
var canConstruct = function(ransomNote, magazine) {
  let ransom = Array.from(ransomNote);
  let maga = Array.from(magazine);
  let tf;

  for(let i = 0; i < ransom.length; i++) {
    tf = false;
    repeat(ransom[i]);
    
    if(!tf) {
      return false;
    }
  }

  return true;

  function repeat(ransom1) {
    for (let j = 0; j < magazine.length; j++) {
      if (ransom1 == maga[j]) {
        tf = true;
        maga.splice(j, 1)
        break;
      }
    }
  }
};