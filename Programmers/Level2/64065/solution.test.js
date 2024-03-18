/**
 * 이해
 *
 * 주어지는 것
 * - 문자열 s "{{2}, {1,2}}"
 *
 * 구해야하는 것
 * - s가 가리키는 튜플이 담긴 배열
 *
 * 조건
 *
 * 계획
 * 1. 문자열 s를 2차원 배열로 만든다.
 * 	1.1 JSON.parse()
 * 	1.2 match()
 * 2. 1번에서 얻은 배열의 원소를 길이의 오름차순으로 정렬한다.
 * 3. 결과를 담을 빈 배열 tuple을 선언
 * 4. 2번에서 얻은 배열의 원소를 하나씩 탐색한다.
 * 	4.1 원소가 배열이므로 원소의 요소중에서 tuple에 없는 요소를 하나씩 추가한다.
 *
 * 반성
 */

function solution(s) {
  const sArray = JSON.parse(s.replaceAll('{', '[').replaceAll('}', ']')).sort(
    (a, b) => a.length - b.length,
  );

  const tuple = new Set();

  sArray.forEach(item => {
    for (let i = 0; i < item.length; i += 1) {
      if (!tuple.has(item[i])) {
        tuple.add(item[i]);
        break;
      }
    }
  });

  return Array.from(tuple);
}

describe('튜플', () => {
  it('test1', () => {
    expect(solution('{{2},{2,1},{2,1,3},{2,1,3,4}}')).toEqual([2, 1, 3, 4]);
  });
});
