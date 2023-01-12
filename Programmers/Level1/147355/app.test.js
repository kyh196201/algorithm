/* eslint-disable radix */
/**
 * 이해
 *
 * - 숫자로 이루어진 문자열 t, p가 주어진다.
 * - p와 길이가 같은 t의 부분 문자열을 구한다.
 * - p의 부분 문자열 중에서 t보다 작거나 같은 수의 개수를 구한다.
 *
 * 조건
 *
 * 계획
 *
 * - t의 길이가 p인 모든 부분 문자열을 구한다.
 *
 * - 구한 부분 문자열을 정수로 변환한다.
 *
 * - 정수화된 부분 문자열이 p보다 작거나 같을 경우
 *
 * - count를 증가한다.
 */

function getSubstrings(string, n) {
  // 부분 문자열의 총 개수 = 문자열의 길이 - (n - 1)
  // 만약 n이 3이라면 마지막 위치에서 남은 문자의 개수가 2개여야 하므로
  const numberOfSubstrings = string.length - (n - 1);
  const substrings = [];

  for (let i = 0; i < numberOfSubstrings; i += 1) {
    substrings.push(string.substring(i, n + i));
  }

  return substrings;
}

function solution(t, p) {
  const substrings = getSubstrings(t, p.length);
  const numbered = substrings.map(s => parseInt(s));

  const count = numbered.filter(n => n <= p).length;

  return count;
}

function solution2(t, p) {
  const size = p.length;
  let count = 0;

  for (let i = 0; i <= t.length - size; i += 1) {
    const slice = t.substring(i, i + size);

    if (parseInt(slice) <= p) {
      count += 1;
    }
  }

  return count;
}

describe('getSubstrings()', () => {
  it('문자열에서 길이가 n인 모든 부분 문자열을 구한다.', () => {
    expect(getSubstrings('3141592', 3)).toEqual([
      '314',
      '141',
      '415',
      '159',
      '592',
    ]);
    expect(getSubstrings('3141592', 2)).toEqual([
      '31',
      '14',
      '41',
      '15',
      '59',
      '92',
    ]);
  });
});

describe('크기가 작은 부분 문자열', () => {
  it('test', () => {
    expect(solution('3141592', '271')).toBe(2);
    expect(solution('500220839878', '7')).toBe(8);
    expect(solution2('3141592', '271')).toBe(2);
    expect(solution2('500220839878', '7')).toBe(8);
  });
});
