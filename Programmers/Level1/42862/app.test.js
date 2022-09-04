/**
 * ## 이해
 *
 * 주어지는 것
 *
 * 총 학생의 숫자
 *
 * 체육복을 잃어버린 학생의 번호가 담긴 배열
 *
 * 여벌 체육복을 가져온 학생의 번호가 담긴 배열
 *
 * 구해야하는 것
 *
 * 체육수업을 들을 수 있는 학생의 최댓값
 *
 * ## 계획
 *
 * ## 실행
 *
 * ## 반성
 *
 * 체육복을 빌려줄 수 있는 학생인지 판단하기 위해서 reserves Map을 만들고, true/false 값을 저장했는데,
 * 학생 별로 가지고 있는 체육복의 갯수를 세는 것이 더 좋은 방법인 것 같다.
 *
 * 문제의 예시만 보고 당연히 오름차순되어있을 것이라고 생각했는데 13, 14번 테스트 케이스에서 실패한 것이 정렬을
 * 하지 않아서라고 한다.
 */
function sortAscending(array = []) {
  return array.sort((a, b) => a - b);
}

function solution(n = 1, lost = [], reserve = []) {
  const reserves = new Map();

  sortAscending(reserve).forEach(value => {
    reserves.set(value, true);
  });

  const realLosts = sortAscending(lost).filter(value => {
    if (reserves.get(value)) {
      reserves.delete(value);

      return false;
    }

    return true;
  });

  let totalNumber = n - realLosts.length;

  for (let i = 0; i < realLosts.length; i += 1) {
    const current = realLosts[i];

    const prev = current - 1;
    const next = current + 1;

    if (reserves.get(prev)) {
      totalNumber += 1;
      reserves.delete(prev);
    } else if (reserves.get(next)) {
      totalNumber += 1;
      reserves.delete(next);
    }
  }

  return totalNumber;
}

describe('sortAscending', () => {
  it('sort array', () => {
    expect(sortAscending([3, 2, 1])).toEqual([1, 2, 3]);
  });
});

describe('체육복', () => {
  it('test', () => {
    expect(solution(5, [2, 4], [1, 3, 5])).toBe(5);

    expect(solution(5, [2, 4], [3])).toBe(4);

    expect(solution(3, [3], [1])).toBe(2);
  });
});
