// 다른 풀이 참고
const n = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .filter((e, i) => i > 0)
  .map(e => e.split(' ').map(v => Number(v)));

const result = n.map(e => n.filter(v => v[0] > e[0] && v[1] > e[1]).length + 1);

console.log(result.join(' '));
