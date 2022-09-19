/**
 * 이해
 *
 * 주어지는 것
 * - 문자열 S: 숫자들이 공백으로 구분되어 있음
 *
 * 구해야하는 것
 * - 최대값과 최소값
 *
 * 조건
 *
 * 실행
 * - 문자열 S를 공백을 기준으로 분리해서 배열로 만듬
 * - 숫자로 모두 변환
 * - 최댓값과 최솟값을 구함
 *
 * 반성
 */
function solution(str = '') {
  const numbers = str.split(' ').map(v => +v);

  const max = Math.max(...numbers);
  const min = Math.min(...numbers);

  return `${min} ${max}`;
}

describe('최댓값과 최솟값', () => {
  it('test', () => {
    expect(solution('1 2 3 4')).toBe('1 4');

    expect(solution('-1 -2 -3 -4')).toBe('-4 -1');

    expect(solution('-1 -1')).toBe('-1 -1');
  });
});
