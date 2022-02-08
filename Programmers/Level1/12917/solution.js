function solution(s) {
  let answer = [];
  const smalls = s.match(/[a-z]/g) || [];
  const capitals = s.match(/[A-Z]/g) || [];

  answer = [...smalls.sort().reverse(), ...capitals.sort().reverse()];

  return answer.join('');
}

console.log(solution('Zbcdefg')); // 'gfedcbZ
