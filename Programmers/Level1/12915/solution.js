// 내 풀이
function solution(strings = [], n = 0) {
  function compareString(a, b) {
    const char1 = a.charAt(n);
    const char2 = b.charAt(n);

    return char1 !== char2 ? char1.localeCompare(char2) : a.localeCompare(b);
  }

  return strings.sort(compareString);
}

// 다른 사람 풀이 참고
function solution2(strings = [], n = 0) {
  return strings
    .map(a => [...a][n] + a)
    .sort()
    .map(b => b.substring(1));
}

const strings = ['sun', 'bed', 'car'];
const n = 1;

console.log(solution(strings, n)); // car, bed, sun
console.log(solution2(strings, n)); // car, bed, sun
