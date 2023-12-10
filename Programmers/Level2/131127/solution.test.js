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
// https://school.programmers.co.kr/learn/courses/30/lessons/131127
function solution(wants, numbers, discounts) {
  let answer = 0;
  const wantMap = new Map();

  for (let i = 0; i <= discounts.length - 10; i++) {
    wants.forEach((want, index) => {
      // 원하는 제품 : 구매할 개수
      wantMap.set(want, numbers[index]);
    });

    for (let j = i; j < i + 10; j++) {
      const discount = discounts[j];

      if (wantMap.has(discount)) {
        wantMap.set(discount, wantMap.get(discount) - 1);
      } else {
        break;
      }
    }

    // 원하는 제품을 모두 구매했을 경우
    const canBuy = Array.from(wantMap.values()).every(count => count === 0);

    if (canBuy) {
      answer += 1;
    }

    wantMap.clear();
  }

  return answer;
}

describe('할인 행사', () => {
  it('test1', () => {
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
