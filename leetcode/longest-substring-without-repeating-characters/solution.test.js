/**
 * 이해
 *
 * 주어지는 것
 *
 * 구해야하는 것
 * - 최대 길이를 가지는 연속되는 문자가 없는 substring를 찾고, 그 길이를 반환
 *
 * 조건
 * - 0 <= s.length <= 5 * 10^4
 *
 * 계획
 * - 현재 substring의 길이, 최대 substring의 길이, 현재까지 substring을 저장할 변수 필요
 * - s의 길이가 0일 경우 0을 반환
 * - 중복되는 문자가 나올 때 까지 한 문자 씩 탐색한다
 * 	- 이때, 현재 substring의 길이를 변수에 저장한다
 * - 중복되는 문자가 나오면, 현재까지 저장한 substring의 길이를 최대 값과 비교하고 저장한다.
 * - 현재 substring의 길이를 0으로 초기화하고, 다시 검사를 시작한다
 *
 * 반성
 * - 중복되는 문자가 나타나면 sub 변수를 중복되는 문자로 초기화했기 때문에 'dvdf' 예제에서 'vdf' 케이스를 발견할 수 없음
 */

/**
 * @param {string} s
 * @return {number}
 */
function solution(s) {
  if (s.length === 0) {
    return 0;
  }

  let sub = s.charAt(0);
  let max = 1; // sub.length

  for (let i = 1; i < s.length; i++) {
    const char = s.charAt(i);

    // 중복
    if (sub.includes(char)) {
      max = Math.max(max, sub.length);
      sub = char;
    } else {
      sub += char;
    }
  }

  // 중복되는 문자가 하나도 없을 경우
  if (sub.length > max) {
    max = sub.length;
  }

  return max;
}

/**
 * 이해
 *
 * 주어지는 것
 *
 * 구해야하는 것
 * - 최대 길이를 가지는 연속되는 문자가 없는 substring를 찾고, 그 길이를 반환
 *
 * 조건
 * - 0 <= s.length <= 5 * 10^4
 *
 * 계획
 * - 한 문자 씩 검사
 * - 중복되는 문자 검사
 * 	- 중복되는 문자가 없을 경우
 * 		- substring에 문자 더하고, 최대 substring의 길이와 비교 더 큰 값을 저장
 * 	- 중복되는 문자가 있을 경우
 * 		- 현재까지 저장된 substring에서 중복되는 문자의 index를 찾음
 * 		- 찾은 index 이후로 문자열을 자르고, 현재 문자를 더한 새로운 substring 생성
 * 		- 최대 substring의 길이와 비교 더 큰 값을 저장
 *
 * 반성
 * - s.length가 0 또는 1이면 그대로 s.length를 반환하면 된다
 */

/**
 * @param {string} s
 * @return {number}
 */
function solution2(s) {
  if (s.length < 2) {
    return s.length;
  }

  // 첫번째 문자를 저장하고 시작
  let max = 1;
  let sub = s.charAt(0);

  for (let i = 1; i < s.length; i++) {
    const char = s.charAt(i);

    const index = sub.indexOf(char);
    // 현재까지 저장된 substring에 중복되는 문자가 없을 경우
    if (index === -1) {
      sub += char;
      if (sub.length > max) max = sub.length;
    } else {
      // 중복되는 문자가 있을 경우, 중복되는 문자 이후의 문자열에 현재 문자를 더해서 새로운 substring 생성
      sub = sub.slice(index + 1) + char;
      if (sub.length > max) max = sub.length;
    }
  }

  return max;
}

describe('longest-substring-without-repeating-characters', () => {
  it('solution', () => {
    // 실패 2가 반환됨
    expect(solution('dvdf')).toBe(3);
    expect(solution('au')).toBe(2);
    expect(solution('')).toBe(0);
    expect(solution('abcabcbb')).toBe(3);
    expect(solution('bbbbb')).toBe(1);
  });

  it.only('solution2', () => {
    expect(solution2('dvdf')).toBe(3);
    expect(solution2('au')).toBe(2);
    expect(solution2('')).toBe(0);
    expect(solution2('abcabcbb')).toBe(3);
    expect(solution2('bbbbb')).toBe(1);
  });
});
