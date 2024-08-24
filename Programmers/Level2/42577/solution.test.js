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

/**
 *
 * @param {string[]} phoneBook
 * @returns {boolean} 접두어가 존재할 경우 false, 존재하지 않을 경우 true
 */
function solution(phoneBook) {
  const map = new Map();

  // 전화번호를 길이 기준 오름차순으로 정렬
  const sortedPhoneBook = phoneBook.sort((a, b) => a.length - b.length);

  for (let i = 0; i < sortedPhoneBook.length; i++) {
    const phone = sortedPhoneBook[i];

    for (let j = 0; j < phone.length; j++) {
      // prefix가 될 수 있는 문자열
      // 원본 문자열은 포함하면 안되지만 길이가 1인 경우를 위해서 포함
      const sub = phone.substring(0, j + 1);

      if (map.has(sub)) {
        return false;
      }
    }

    map.set(phone, true);
  }

  return true;
}
/**
 *
 * @param {string[]} phoneBook
 * @returns {boolean} 접두어가 존재할 경우 false, 존재하지 않을 경우 true
 */
function solution2(phoneBook) {
  const candidatePhones = [];

  for (let i = 0; i < phoneBook.length; i++) {
    const phone = phoneBook[i];

    for (let j = 0; j < candidatePhones.length; j++) {
      if (phone.length > candidatePhones[j].length) {
        if (phone.startsWith(candidatePhones[j])) {
          return false;
        }
      } else if (phone.length < candidatePhones[j].length) {
        if (candidatePhones[j].startsWith(phone)) {
          return false;
        }
      }
    }

    candidatePhones.push(phone);
  }

  return true;
}

describe('전화번호 목록', () => {
  it('hash map', () => {
    expect(solution(['119', '97674223', '1195524421'])).toBe(false);
    expect(solution(['123', '456', '789'])).toBe(true);
  });

  it('brute force', () => {
    expect(solution2(['119', '97674223', '1195524421'])).toBe(false);
    expect(solution2(['123', '456', '789'])).toBe(true);
  });
});
