function solution(nums) {
  // 중복을 제거한 배열
  const kinds = [...new Set(nums)];

  const numsToDraw = nums.length / 2;
  const numsOfKind = kinds.length;

  return numsOfKind > numsToDraw ? numsToDraw : numsOfKind;
}

const nums = [3, 3, 3, 2, 2, 4];
console.log(solution(nums));
