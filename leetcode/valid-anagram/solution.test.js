/**
 * 이해
 *
 * 주어지는 것
 * - 문자열 s, t
 *
 * 구해야하는 것
 * - t가 s의 애나그램인지?
 * - t와 s의 알파벳의 구성이 동일해야 한다.
 *
 * 조건
 *
 * 계획
 * - 문자열 s를 구성하고 있는 모든 알파벳의 개수를 센다
 * - 문자열 t의 문자를 하나씩 탐색한다
 * 	- s에 존재하지 않는 알파벳일 경우
 * 		- 애나그램이 아님
 * 	- s에 존재하는 알파벳일 경우
 * 		- 알파벳의 개수를 감소한다
 * 			-	알파벳의 개수가 -1이 될 경우(해당 알파벳에 대해서 t가 더 많은 개수를 가지고 있음)
 * 				- 애나그램이 아님
 *
 * - t의 탐색을 모두 마치고나서 알파벳의 개수 중에 0보다 큰 값이 있는 경우
 * 	- s가 t에 없는 알파벳을 가지고 있거나 같은 알파벳에 대해서 더 많은 개수를 가지고 있음
 *
 * 반성
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function solution(s, t) {
  if (s.length === 1 && t.length === 1) {
    return s === t;
  }

  if (s.length !== t.length) {
    return false;
  }

  const chars = new Map();

  Array.from(s).forEach(c => {
    chars.set(c, (chars.get(c) ?? 0) + 1);
  });

  for (let i = 0; i < t.length; i++) {
    const c = t.charAt(i);
    if (!chars.has(c)) {
      return false;
    }

    if (chars.get(c) === 0) {
      return false;
    }

    chars.set(c, chars.get(c) - 1);
  }

  return Array.from(chars.values).every(count => count === 0);
}

describe('valid-anagram', () => {
  it('test', () => {
    expect(solution('a', 'b')).toBe(false);
    expect(solution('a', 'bb')).toBe(false);
    expect(solution('anagram', 'nagaram')).toBe(true);
    expect(solution('car', 'cat')).toBe(false);
  });
});
