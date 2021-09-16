function solution(x, y, w, h) {
  return Math.min(x, w - x, y, h - y);
}

console.log(solution(6, 2, 10, 3));
