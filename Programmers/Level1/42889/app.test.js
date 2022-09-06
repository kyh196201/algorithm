/**
 * 이해
 *
 * 주어지는 것
 * - 스테이지의 개수 N
 * - 현재 사용자들이 위치하고 있는 스테이지의 번호가 담긴 배열
 *
 * 구해야하는 것
 * - 실패율이 높은 스테이지 순으로 정렬된 배열
 *
 * 조건
 * - 실패율이 같을 경우에 스테이지 번호 오름차순으로 정렬
 * - 도달한 사용자가 없을 경우에 실패율은 0
 *
 * 계획
 * - 각 스테이지별로 실패율 구하기 길이 N의 배열에 저장
 * - 배열에 저장된 실패율을 이용해서 1 ~ N까지 스테이지가 담긴 배열을 정렬한다.
 *
 * 객체? 배열?
 *
 * 반성
 *
 * - 1 ~ N까지 증가하는 배열을 만들기 위해서 [...Array(N).keys()].map(v => v + 1) 로직을 사용했다.
 * - sort()의 콜백함수를 잘 이해하지 않고, 그냥 사용했다.
 *
 * 고민했던 부분
 * - 스테이지 별로 실패율을 어떻게 보관할지
 * - 어떻게 실패율에 따라서 스테이지를 정렬할지 => 1 ~ N의 스테이지가 담긴 배열을 미리 오름차순으로 정렬하고, 실패율에 따라서 내림차순으로 정렬하는 사용함
 * 이미 오름차순으로 정렬되어있기 때문에 실패율이 같을 경우 정렬이 일어나지 않아서 같은 실패율을 가진 스테이지끼리는 오름차순이 유지됨.
 */
function getFailure(stageNumber = 1, stages = []) {
  let reaches = 0;
  let fails = 0;

  stages.forEach(stage => {
    if (stageNumber <= stage) {
      reaches += 1;

      if (stageNumber === stage) {
        fails += 1;
      }
    }
  });

  if (reaches < 1) {
    return 0;
  }

  return fails / reaches;
}

describe('getFailure', () => {
  const stages = [2, 1, 2, 6, 2, 4, 3, 3];

  it('returns failure percent of each stages', () => {
    expect(getFailure(1, stages)).toBe(1 / 8);

    expect(getFailure(2, stages)).toBe(3 / 7);

    expect(getFailure(3, stages)).toBe(2 / 4);
  });
});

function solution(N = 1, stages = []) {
  const allStages = [...Array(N).keys()].map(v => v + 1);

  const failures = allStages.map(stage => getFailure(stage, stages));

  return allStages.sort(
    (prev, next) => failures[next - 1] - failures[prev - 1],
  );
}

describe('실패율', () => {
  it('test', () => {
    expect(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])).toEqual([3, 4, 2, 1, 5]);

    expect(solution(4, [4, 4, 4, 4, 4])).toEqual([4, 1, 2, 3]);
  });
});
