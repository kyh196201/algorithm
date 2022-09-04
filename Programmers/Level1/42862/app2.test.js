/* eslint-disable no-restricted-syntax */
function solution(n = 1, lost = [], reserve = []) {
  const students = {};

  for (let i = 1; i <= n; i += 1) {
    students[i] = 1;
  }

  lost.forEach(number => {
    students[number] -= 1;
  });

  reserve.forEach(number => {
    students[number] += 1;
  });

  lost.forEach(number => {
    const count = students[number];

    // 체육복을 빌려야할 학생인지
    if (count === 0) {
      // 체육복을 빌려줄 수 있는지
      if (students[number - 1] > 1) {
        students[number] += 1;
        students[number - 1] -= 1;
      } else if (students[number + 1] > 1) {
        students[number] += 1;
        students[number + 1] -= 1;
      }
    }
  });

  let result = 0;

  for (const number in students) {
    if (students[number] >= 1) {
      result += 1;
    }
  }

  return result;
}

describe('체육복2', () => {
  it('test', () => {
    expect(solution(5, [2, 4], [1, 3, 5])).toBe(5);

    expect(solution(5, [2, 4], [3])).toBe(4);

    expect(solution(3, [3], [1])).toBe(2);
  });
});
