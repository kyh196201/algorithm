/**
 * 이해
 *
 * 주어지는 것
 * - [의상의 이름, 의상의 종류][]
 *
 * 구해야하는 것
 * - 서로 다른 옷의 조합의 수
 * - 옷의 조합(?)
 *
 * 조건
 * - 최소 1개 이상의 의상을 입는다.
 *
 * 계획
 * 1. [의상의 이름, 의상의 종류][]의 배열 -> { 의상의 종류: 의상의 개수 + 1 }을 가진 객체로 변환한다.
 * 2. 1에서 얻은 객체를 [의상의 종류, 의상의 개수]의 배열로 변환한다.
 * 3. total = 의상의 개수 + 1을 전부 곱한 값 - 1
 * 	{
 * 		headgear: [안입음, 모자, 터번]
 * 		eyewear: [안입음, 선글라스]
 * 	}
 *
 *  조합의 총 개수 = 3 * 2 - 1(안입음/안입음) = 5
 *
 * 반성
 * - 옷의 종류별 개수를 갖는 객체를 만드는 것까지는 맞았음
 * - 옷의 종류별 개수 + 1(안입음)으로 생각해서 쉽게 풀이하는 방법이 있었다..
 */
function solution(clothes = []) {
  const dictionary = {};
  let total = 1;

  // eslint-disable-next-line no-unused-vars
  clothes.forEach(([_, kind]) => {
    if (!dictionary[kind]) {
      dictionary[kind] = 0;
    }

    dictionary[kind] += 1;
  });

  Object.entries(dictionary).forEach(arr => {
    // 옷의 개수 + 1(안입는 경우)
    total *= arr[1] + 1;
  });

  // 모든 경우의 수 - 전부 안입음일 경우
  return total - 1;
}

describe('의상', () => {
  it('test1', () => {
    const clothes = [
      ['yellow_hat', 'headgear'],
      ['blue_sunglasses', 'eyewear'],
      ['green_turban', 'headgear'],
    ];
    expect(solution(clothes)).toBe(5);
  });
  it('test2', () => {
    const clothes = [
      ['crow_mask', 'face'],
      ['blue_sunglasses', 'face'],
      ['smoky_makeup', 'face'],
    ];
    expect(solution(clothes)).toBe(3);
  });
});
