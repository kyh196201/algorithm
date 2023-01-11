/**
 * 이해
 *
 * 조건
 * 1 ≤ b < a ≤ n ≤ 1,000,000
 *
 * 현재 빈 병의 개수 = n
 * a 개의 빈 병을 주면 b 개의 콜라를 주는 마트
 *
 * 계획
 * - 현재 빈 병의 개수를 통해 받을 수 있는 콜라의 개수 = n / a의 몫
 *  - 예) 3개의 빈 병을 1개의 콜라로 바꿔줄 경우, 4개의 빈 병이 있다면 4/3의 몫인 1개의 콜라를 얻을 수 있다.
 *
 * - 한 번 교환을 하고난 후 빈 병의 개수 = n / a의 몫 + n / a의 나머지
 *  - 예) 위의 예제에서 교환하고 난 후의 빈 병의 개수는 4/3의 몫 1 + 4/3의 나머지 1 = 총 2개
 *
 * - 이 과정을 더 이상 교환할 수 없을 때까지 반복한다.
 *
 * - 빈 병을 콜라로 교환한다.
 *
 * - 현재 남은 빈 병의 개수와 얻은 콜라의 개수를 업데이트한다.
 *
 * - 교환할 수 있는지 확인한다.
 *
 * - 교환할 수 있을 경우
 *
 * - 현재 남은 빈 병의 개수와 얻은 콜라의 개수를 업데이트한다.
 *
 * - 교환할 수 없을 경우
 *
 * - 프로그램을 종료한다.
 */

/**
 *
 * @param {number} a 개의 빈 병을
 * @param {number} b 개의 콜라로 교환
 * @param {number} emptyBottles 현재 빈 병의 개수
 * @returns 얻을 수 있는 콜라의 개수
 */
function getCola(a, b, emptyBottles) {
  return Math.floor(emptyBottles / a) * b;
}

function solution(a, b, bottles) {
  let total = 0;
  let emptyBottles = bottles;

  while (emptyBottles >= a) {
    // 3개의 빈 병을 1개로 교환해줄 경우, 4/3의 몫인 1 * 1
    // 3개의 빈 병을 2개로 교환해줄 경우, 4/3의 몫인 1 * 2
    const colas = getCola(a, b, emptyBottles);

    total += colas;

    emptyBottles = colas + (emptyBottles % a);
  }

  return total;
}

describe('getCola', () => {
  it('얻을 수 있는 콜라의 개수를 반환한다.', () => {
    expect(getCola(3, 2, 4)).toBe(2);
    expect(getCola(4, 3, 7)).toBe(3);
    expect(getCola(4, 3, 8)).toBe(6);
  });
});

describe('콜라 문제', () => {
  it('test', () => {
    expect(solution(2, 1, 20)).toBe(19);
    expect(solution(3, 1, 20)).toBe(9);
  });
});
