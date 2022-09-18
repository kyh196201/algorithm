/**
 * 이해
 * 주어지는 것
 * - 놀이기구의 이용료
 * - 현재 가지고 있는 금액
 * - 이용 횟수
 *
 * 구해야하는 것
 * - 모자라는 금액
 *
 * 조건
 * - N번째 타게되면 요금 = price * N이다.
 *
 * 계획
 * - N번째를 타기위해 필요한 총 금액은 (1 + 2 + ... + N) * price이다.
 * - 현재 가지고있는 금액에서 총 금액을 뺀 값이 구하고자하는 값이다.
 *
 * 반성
 */
function getTotalPrice(price = 1, count = 1) {
  return price * ((count * (count + 1)) / 2);
}

describe('getTotalPrice', () => {
  it('returns total price', () => {
    expect(getTotalPrice(3, 4)).toBe(30);

    expect(getTotalPrice(3, 5)).toBe(45);
  });
});

function solution(price = 1, money = 1, count = 1) {
  const totalPrice = getTotalPrice(price, count);

  return totalPrice - money;
}

describe('부족한 금액 계산하기', () => {
  it('test', () => {
    expect(solution(3, 20, 4)).toBe(10);
  });
});
