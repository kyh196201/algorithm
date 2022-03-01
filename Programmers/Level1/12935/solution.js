function solution(arr = []) {
  const min = Math.min(...arr);

  arr.splice(arr.indexOf(min), 1);
  return arr.length ? arr : [-1];
}

console.log(solution([4, 3, 2, 1]));
console.log(solution([10]));
