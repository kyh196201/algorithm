/**
 * 학생 3명의 합 = 0이면 3총사
 *
 * 1. 학생 3명을 뽑는다
 *
 * 2. 합이 0이면, count + 1
 */

function solution(numbers = []) {
  let count = 0;

  if (numbers.length === 3) {
    const sum = numbers[0] + numbers[1] + numbers[2];

    return sum === 0 ? 1 : 0;
  }

  for (let i = 0; i < numbers.length - 2; i += 1) {
    for (let j = i + 1; j < numbers.length - 1; j += 1) {
      for (let k = j + 1; k < numbers.length; k += 1) {
        const sum = numbers[i] + numbers[j] + numbers[k];

        if (sum === 0) {
          count += 1;
        }
      }
    }
  }

  return count;
}

describe('삼총사', () => {
  it('test', () => {
    expect(solution([-2, 3, 0, 2, -5])).toBe(2);
    expect(solution([-3, -2, -1, 0, 1, 2, 3])).toBe(5);
    expect(solution([-1, 1, -1, 1])).toBe(0);
    expect(solution([-1, 0, 1])).toBe(1);
  });
});
