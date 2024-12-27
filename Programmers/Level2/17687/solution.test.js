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

function solution(n, t, m, p) {
  let answer = '';
  let num = 0;
  let radix = num.toString(n);
  let counter = 1;

  while (answer.length < t) {
    for (let i = 0; i < radix.length; i++) {
      if (counter % m === p || (p === m && counter % m === 0)) {
        answer += radix[i];
      }

      if (answer.length >= t) break;

      counter += 1;
    }

    num += 1;
    radix = num.toString(n);
  }

  return answer.toUpperCase();
}

/**
 *
 * @param {number} n 진법
 * @param {number} t 미리 구해야할 숫자의 개수
 * @param {number} m 게임에 참가하는 인원
 * @param {number} p 튜브의 순서
 */
function solution2(n, t, m, p) {
  // t개의 숫자를 구하기 위해 n진법으로 변환한 수를 나열했을 때 문자열의 최소 길이
  const minLength = t * m;

  // n진법으로 변환한 수를 나열한 문자열
  let line = '';

  for (let i = 0; line.length <= minLength; i++) {
    line += i.toString(n);
  }

  let answer = '';
  let index = p - 1;

  // t개의 숫자를 구할 때까지 튜브의 순서에 해당하는 숫자를 answer에 추가
  while (answer.length < t && index < line.length) {
    answer += line[index];

    // 다음 인덱스 = 튜브의 순서 + 참가 인원 수
    index += m;
  }

  return answer.toUpperCase();
}

describe('N진수 게임', () => {
  it('test', () => {
    expect(solution(2, 4, 2, 1)).toBe('0111');
    expect(solution2(2, 4, 2, 1)).toBe('0111');
    expect(solution2(16, 16, 2, 1)).toBe('02468ACE11111111');
    expect(solution2(16, 16, 2, 2)).toBe('13579BDF01234567');
  });
});
