// Date를 이용한 풀이
function solution(a, b) {
  const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const date = new Date(2016, a - 1, b);

  return DAYS[date.getDay()];
}

// Date를 이용하지 않은 풀이
function solution2(a, b) {
  const MONTHS = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];

  let dayCount = b - 1;

  dayCount += MONTHS.slice(0, a - 1).reduce((total, cur) => total + cur, 0);

  return DAYS[dayCount % 7];
}

const a = 5;
const b = 24;

console.log(solution(a, b)); // 'TUE';
console.log(solution2(a, b)); // 'TUE';
