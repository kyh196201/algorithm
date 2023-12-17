/**
 * 이해
 * - 발표한 논문 n편 중에서
 * - h번 이상 인용된 논문이 h편 이상
 * - 나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index
 *
 * 주어지는 것
 *
 * 구해야하는 것
 *
 * 조건
 * - 1 <= citations.length <= 1000
 * - 0 <= citations[i] <= 10,000
 *
 * 계획
 * - 1. citations 배열을 내림차순으로 정렬한다.(최댓값을 찾기 때문에)
 * - 2. 논문의 인용 횟수 = 원소의 값
 * - 3. h번 이상 인용된 논문의 갯수 = 현재 인덱스 + 1(자기 자신 포함)
 * - 4. 나머지 논문이 h번 이하 인용되어야한다
 * - 5. 찾는 값 = 논문의 인용 횟수 <= h번 이상 인용된 논문의 갯수인 논문 중에서 최댓 값
 *
 * 반성
 */

function solution(citations = []) {
  citations = citations.sort((a, b) => b - a);

  for (let i = 0; i < citations.length; i++) {
    // 논문의 인용 횟수
    const h = citations[i];
    // h번 이상 인용된 논문의 갯수가 h이상일 경우
    if (h <= i + 1) {
      return h;
    }
  }

  // 찾지 못했을 경우 논문의 전체 개수를 리턴
  return citations.length;
}

describe('H-Index', () => {
  it('test', () => {
    expect(solution([3, 0, 6, 1, 5])).toBe(3);
    expect(solution([1])).toBe(1);
  });
});
