function isOnlyZeroAndFive(num) {
  let temp = num;

  while (temp > 0) {
    const digit = temp % 10;

    if (digit !== 0 && digit !== 5) {
      return false;
    }

    temp = Math.floor(temp / 10);
  }

  return true;
}

function solution(l, r) {
  const answer = [];

  for (let num = l; num <= r; num++) {
    if (isOnlyZeroAndFive(num)) {
      answer.push(num);
    }
  }

  return answer.length > 0 ? answer : [-1];
}

describe('배열 만들기2', () => {
  it('test', () => {
    expect(solution(5, 555)).toEqual([5, 50, 55, 500, 505, 550, 555]);
    expect(solution(10, 20)).toEqual([-1]);
  });
});
