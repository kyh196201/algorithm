/**
 * 이해
 * - 원형 수열에서 연속하는 부분 수열을 구해야한다.
 * - 연속하는 부분 수열의 합을 구한다.
 * - 만들 수 있는 부분 수열의 길이 = 1 ~ elements의 길이
 *
 * 구해야할 것
 * - 부분 수열의 합으로 만들 수 있는 수의 개수
 *
 * 조건
 *
 * 계획
 * - 길이가 1인 부분 수열 부터, 길이가 elements.length인 부분 수열을 모두 구한다.
 * - 길이가 n인 부분 수열 = startIndex, endIndex = startIndex + (n - 1)
 * - 부분 수열의 합을 구한다. startIndex ~ endIndex까지 원소의 합
 *  - index >= elements.length일 경우 index % elements.length인 원소를 가져온다.
 * - 구한 부분 수열의 합을 Set에 저장한다.
 */

function solution(elements = []) {
  const sums = new Set();

  // 길이가 1 ~ elements.length인 모든 부분 수열을 구한다.
  for (let n = 1; n <= elements.length; n += 1) {
    // 길이가 n인 부분 수열을 모두 구한다.
    for (let i = 0; i < elements.length; i += 1) {
      const startIndex = i;
      const endIndex = i + (n - 1);
      let sum = 0;

      // 부분 수열의 합을 구한다.
      for (let j = startIndex; j <= endIndex; j += 1) {
        // j(index)가 elements.length보다 클 경우 나눈 나머지를 인덱스로 한다.
        // ex) j가 6일 경우 => 6%5 = 1
        sum += elements[j >= elements.length ? j % elements.length : j];
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
