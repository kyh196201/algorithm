/**
 * 이해
 *
 * 주어지는 것
 *
 * 구해야하는 것
 *
 * 조건
 *
 * 계획
 *
 * 반성
 */

function solution(wants, numbers, discounts) {
  let answer = 0;

  for (let i = 0; i <= discounts.length - 10; i++) {
    const slice = discounts.slice(i, i + 10).join(',');

    const canBuy = wants.every((want, index) => {
      const regex = new RegExp(want, 'g');

      // slice 배열 안에 want가 몇개 들어 있는지
      const count = (slice.match(regex) || []).length;

      return count === numbers[index];
    });

    if (canBuy) {
      answer += 1;
    }
  }

  return answer;
}

describe('올바른 괄호', () => {
  it.only('test1', () => {
    const want = ['banana', 'apple', 'rice', 'pork', 'pot'];
    const number = [3, 2, 2, 2, 1];
    const discount = [
      'chicken',
      'apple',
      'apple',
      'banana',
      'rice',
      'apple',
      'pork',
      'banana',
      'pork',
      'rice',
      'pot',
      'banana',
      'apple',
      'banana',
    ];

    expect(solution(want, number, discount)).toBe(3);
  });

  it('test2', () => {
    const want = ['apple'];
    const number = [10];
    const discount = [
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
    ];

    expect(solution(want, number, discount)).toBe(0);
  });
});
