/**
 * 이해
 * - 원형 수열에서 연속하는 부분 수열을 구해야한다.
 * - 연속하는 부분 수열의 합을 구한다.
 *
 * 구해야할 것
 * - 부분 수열의 합으로 만들 수 있는 수의 개수
 *
 * 조건
 *
 * 계획
 * - 길이가 1인 부분 수열일 경우 = elements의 각 원소를 저장
 *
 * - 길이가 elements.length인 부분 수열일 경우 = 모든 elements의 합을 저장
 *
 * - 1 < 길이 < elements.length인 부분 수열인 경우
 * 	- 원본 elements에 elements.slice(0, 부분 수열의 길이(n) - 1)를 이어 붙인다.
 * 		- 길이가 n인 모든 부분 수열과 그 합을 구해서 Set에 저장한다.
 * - Set의 size를 리턴한다.
 */

function solution(elements = []) {
  const sums = new Set();

  // 길이가 1 ~ elements.length인 모든 부분 수열을 구한다.
  for (let n = 1; n <= elements.length; n += 1) {
    // 원형 수열을 구현하기 위해서 원본 배열에 부분 수열의 길이 - 1에 해당하는 배열을 뒤에 이어 붙인다.
    // 부분 수열의 길이가 elements.length와 같을 경우 수열을 이어 붙일 필요가 없으므로 빈 배열을 붙인다.
    const circle = elements.concat(
      n < elements.length ? elements.slice(0, n - 1) : [],
    );

    // 만들어진 원형 수열에서 길이가 n인 부분 수열을 모두 구한다.
    for (let i = 0; i <= circle.length - n; i += 1) {
      const sub = circle.slice(i, i + n);
      let sum = 0;

      // 부분 수열의 합을 구한다.
      for (let j = 0; j < sub.length; j += 1) {
        sum += sub[j];
      }

      sums.add(sum);
    }
  }

  return sums.size;
}

describe('연속 부분 수열 합의 개수', () => {
  it('test', () => {
    expect(solution([7, 9, 1, 1, 4])).toBe(18);
  });
});
