function solution(n) {
  function isInteger(num = 0) {
    return num === parseInt(num, 10);
  }

  const root = Math.sqrt(n);

  return isInteger(root) ? (root + 1) ** 2 : -1;
}

console.log(solution(121)); // 144
console.log(solution(3)); // -1
