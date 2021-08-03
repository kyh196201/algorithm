function solution(x) {
  let i = 1;
  let sum = 1;
  let diff = 0;

  while (sum < x) {
    i += 1;
    sum = (i * (i + 1)) / 2;
  }

  diff = sum - x;

  return i % 2 === 0 ? `${i - diff}/${1 + diff}` : `${1 + diff}/${i - diff}`;
}

console.log(solution(14));
