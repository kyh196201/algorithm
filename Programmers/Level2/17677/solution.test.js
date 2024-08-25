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

// 1. 두 글자 씩 끊는 방법
// 2. 영어가 제외한 문자가 들어있는 원소를 필터링하기
// 3. 자카드 유사도 = 교집합 / 합집합
// 4. 교집합 구하기
// 5. 합집합 구하기
// 6. 소수점 아래를 버리는 방법
/**
 *
 * @param {string} str1
 * @param {string} str2
 * @returns
 */
function solution(str1, str2) {
  // 두 글자 씩 끊어서 만든 단어 집합 구하기
  function getWords(str = '') {
    const result = [];

    for (let i = 0; i < str.length - 1; i++) {
      const word = `${str.charAt(i)}${str.charAt(i + 1)}`;
      if (/^[a-zA-Z]+$/.test(word)) {
        result.push(word.toLowerCase());
      }
    }

    return result;
  }

  const words1 = getWords(str1);
  const words2 = getWords(str2);

  // 단어가 등장하는 횟수를 기록
  const countMap1 = new Map();
  const countMap2 = new Map();

  words1.forEach(w => {
    countMap1.set(w, (countMap1.get(w) || 0) + 1);
  });

  words2.forEach(w => {
    countMap2.set(w, (countMap2.get(w) || 0) + 1);
  });

  // 교집합의 개수
  let intersectionCount = 0;

  countMap1.forEach((count1, key) => {
    if (!countMap2.has(key)) return;

    const count2 = countMap2.get(key);

    intersectionCount += Math.min(count1, count2);
  });

  // 합집합의 개수
  const unionCount = words1.length + words2.length - intersectionCount;

  if (unionCount === 0) {
    return 1 * 65536;
  }

  return Math.floor((intersectionCount / unionCount) * 65536);
}

describe('뉴스 클러스터링', () => {
  it('test', () => {
    expect(solution('FRANCE', 'french')).toBe(16384);
    expect(solution('aa1+aa2', 'AAAA12')).toBe(43690);
    expect(solution('E=M*C^2', 'e=m*c^2')).toBe(65536);
  });
});
