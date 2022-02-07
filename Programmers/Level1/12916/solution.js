function solution(s) {
  let pCount = 0;
  let yCount = 0;

  [...s.toLowerCase()].forEach(c => {
    if (c === 'p') pCount += 1;
    else if (c === 'y') yCount += 1;
  });

  return pCount === yCount;
}

// match를 이용한 풀이
function solution2(s = '') {
  return s.match(/p/gi).length === s.match(/y/gi).length;
}

console.log(solution('pPoooyY')); // true
console.log(solution('Pyy')); // false

console.log(solution2('pPoooyY')); // true
console.log(solution2('Pyy')); // false
