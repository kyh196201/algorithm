/**
 * 이해
 * - 문자열 분해 규칙
 *
 * 구해야할 것
 * - 분해한 문자열의 개수
 *
 * 조건
 * - 1 <= s.length <= 10000
 * - s는 영어 소문자로만 이루어짐
 *
 * 계획
 * - 첫 글자를 가져온다.
 * - 두 번째 글자부터 문자열의 마지막까지 탐색한다.
 *  - 첫 글자와 같을 경우
 *    -
 *  - 첫 글자와 다를 경우
 *    -
 *
 *  - 첫 글자의 count === 다른 글자의 count
 *    - 분해된 문자열 = [원본.substring(0, index + 1), 원본.substring(index + 1)]
 *  - 반복문이 그대로 종료했을 경우
 *    - 분해된 문자열 = ['원본 문자열', '']
 */
function solution(string = '') {
  if (!string) return 0;

  if (string.length <= 2) return 1;

  const first = string.charAt(0);
  const same = [];
  const notSame = [];

  for (let i = 0; i < string.length; i += 1) {
    const char = string.charAt(i);

    if (char === first) {
      same.push(char);
    } else {
      notSame.push(char);
    }

    if (same.length === notSame.length) {
      break;
    }
  }

  // banana => x = ['b'], notX = ['a']
  // slicePoint = 2
  // substrings = ['ba', 'nana']
  const slicePoint = same.length + notSame.length;

  return 1 + solution(string.substring(slicePoint));
}

describe('문자열 나누기', () => {
  it('test', () => {
    expect(solution('banana')).toBe(3);
    expect(solution('abracadabra')).toBe(6);
    expect(solution('aaabbaccccabba')).toBe(3);
    expect(solution('aaa')).toBe(1);
  });
});
