function solution(s) {
  let answer = '';

  const numbers = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  const regex = new RegExp(Object.keys(numbers).join('|'), 'gi');

  answer = s.replace(regex, match => numbers[match]);

  return Number(answer);
}

console.log(solution('one4seveneight')); // 1478
