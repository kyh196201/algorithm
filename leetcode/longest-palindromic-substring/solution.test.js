/**
 * 이해
 *
 * 주어지는 것
 *
 * 구해야하는 것
 * - substring 중에서 Palindrome을 만족하는 것을 찾고, 그 중에서 가장 긴 substring을 반환한다.
 *
 * 조건
 *
 * 계획
 *
 * 반성
 */

/**
 * @param {string} input
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
function isPalindrome(input, start, end) {
  while (end > start) {
    if (input.charAt(end) !== input.charAt(start)) {
      return false;
    }

    start++;
    end--;
  }

  return true;
}

/**
 * @param {string} s
 * @return {string}
 */
function solution1(s) {
  /**
   * - 모든 부분 문자열을 검사한다.
   * - 회문일 경우
   *  - 현재 가장 긴 회문의 길이와 비교, 더 길 경우 교체
   */

  let maxStart = 0;
  let maxEnd = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (isPalindrome(s, i, j) && j - i > maxEnd - maxStart) {
        maxStart = i;
        maxEnd = j;
      }
    }
  }

  return s.substring(maxStart, maxEnd + 1);
}

/**
 * @param {string} s
 * @return {string}
 */
function solution2(s) {
  /**
   * - 각 인덱스를 기준으로 가장 긴 회문을 찾는다
   * - 가장 긴 회문을 찾는 방법
   *  - 양 쪽에 한 글자씩 더한다
   *  - 회문일 경우 (양 쪽에 추가되는 글자가 같다)
   *    - 현재 가장 긴 회문과 길이를 비교하고, 더 길 경우 갱신
   *  - 회문이 아닐 경우
   *    - 종료
   */

  let maxLeft = 0;
  let maxRight = 0;

  for (let i = 0; i < s.length; i++) {
    let left = i;
    let right = i;

    while (
      left >= 0 &&
      right < s.length &&
      s.charAt(left) === s.charAt(right)
    ) {
      if (right - left > maxRight - maxLeft) {
        maxRight = right;
        maxLeft = left;
      }

      left -= 1;
      right += 1;
    }

    // 시작하는 회문의 길이가 짝수인 케이스
    // 중앙에 2개의 문자를 하나로 묶어 놓고 회문을 확장
    left = i;
    right = i + 1;

    while (
      left >= 0 &&
      right < s.length &&
      s.charAt(left) === s.charAt(right)
    ) {
      if (right - left > maxRight - maxLeft) {
        maxRight = right;
        maxLeft = left;
      }

      left -= 1;
      right += 1;
    }
  }

  return s.substring(maxLeft, maxRight + 1);
}

/**
 * @param {string} s
 * @return {string}
 */
function solution3(s) {
  // 문자열의 길이가 1이면 문자열을 그대로 반환
  if (s.length === 1) {
    return s;
  }

  // 문자열의 길이가 2일 경우
  if (s.length === 2) {
    // 두 글자가 같으면 회문이므로 문자열을 그대로 반환
    if (s[0] === s[1]) {
      return s;
    }

    // 두 글자가 서로 다를 경우 앞 글자를 반환
    return s[0];
  }

  // 가장 긴 substring의 시작과 끝 index를 추적하기 위한 변수를 선언
  let maxStart = 0;
  let maxEnd = 0;

  // 문자열의 각 글자를 기준으로해서 만들 수 있는 가장 긴 palindrome을 찾는다
  // 현재 기준이 되는 index
  let currentIndex = 0;

  // 기준 index가 마지막 인덱스에 도달할 때까지 반복
  while (currentIndex < s.length) {
    // 기준 index의 양 옆에 글자를 하나씩 더해나가기 위해서 start, end index를 선언
    let start = currentIndex;
    let end = currentIndex;

    // end index 구하기
    // 문자열이 cbbd일 경우 c, b, b, d와 같이 각 글자를 기준으로 palindrome을 구하면
    // bb를 얻지 못한다. 따라서, bb를 기준점으로 잡아야한다.
    // bb를 기준점으로 얻기 위해서 현재 end와 다음 글자가 같을 경우 end를 1씩 계속 증가한다
    while (s[end] === s[end + 1]) {
      end += 1;
    }

    // cbbbd에서 bbb를 기준으로 검사를 했다면 d 부터 검사하기 위해서
    // 기준 index를 end + 1로 갱신한다
    currentIndex = end + 1;

    // palindrome 찾기
    while (start >= 0 && end < s.length && s[start] === s[end]) {
      if (end - start > maxEnd - maxStart) {
        maxStart = start;
        maxEnd = end;
      }

      start -= 1;
      end += 1;
    }
  }

  return s.substring(maxStart, maxEnd + 1);
}

/**
 * @param {string} s
 * @return {string}
 */
function solution4(s) {
  let maxStart = 0;
  let maxEnd = 0;

  const dic = {};

  for (let start = s.length - 1; start >= 0; start--) {
    for (let end = start; end < s.length; end++) {
      if (!dic[start]) dic[start] = {};

      // 1글자일 경우
      if (start === end) {
        dic[start][end] = true;
      } else if (start + 1 === end) {
        // 2글자일 경우
        dic[start][end] = s[start] === s[end];
      } else {
        // 3글자 이상일 경우
        // 기존에 연산 결과를 재사용한다
        dic[start][end] = s[start] === s[end] && dic[start + 1][end - 1];
      }

      if (dic[start][end] && end - start > maxEnd - maxStart) {
        maxStart = start;
        maxEnd = end;
      }
    }
  }

  return s.substring(maxStart, maxEnd + 1);
}

describe('longest-palindromic-substring', () => {
  it('test', () => {
    expect(solution1('babad')).toBe('bab');
  });

  it('test2', () => {
    expect(solution2('babad')).toBe('bab');
    expect(solution2('cbbd')).toBe('bb');
    expect(solution2('abb')).toBe('bb');
  });

  it('test3', () => {
    expect(solution3('babad')).toBe('bab');
    expect(solution3('cbbd')).toBe('bb');
    expect(solution3('abb')).toBe('bb');
  });

  it('test4', () => {
    expect(['bab', 'aba']).toContain(solution4('babad'));
    expect(solution4('cbbd')).toBe('bb');
    expect(solution4('abb')).toBe('bb');
  });
});
