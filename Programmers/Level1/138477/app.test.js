/**
 * 이해
 *
 * - 주어진 자료
 * 	-	명예의 전당에 오를 수 있는 순위(k)
 *  - 참가한 가수들의 점수가 담긴 배열(score)
 *
 * 계획
 *
 * - score를 forEach를 이용해 순회한다.
 *
 * - 만약 legends의 길이가 k보다 작을 경우 계속 현재 score를 push한다.
 *
 * - 만약 legends의 길이가 k보다 클 경우 현재 score보다 작은 값을 필터링 한 후
 *
 * - legends 중에서 최솟값을 구해서 answer에 push한다.
 *
 */

function deleteMin(arr = [], value = 0) {
  const min = Math.min(...arr);

  if (min >= value) return arr;

  const index = arr.findIndex(item => item <= min);

  const newArr = [...arr.slice(0, index), ...arr.slice(index + 1)];

  return [...newArr, value];
}

describe('deleteMin', () => {
  it('test', () => {
    expect(deleteMin([10, 100, 20], 150)).toEqual([100, 20, 150]);
  });
});

function solution(k = 3, scores = []) {
  let legends = [];
  const answer = [];

  scores.forEach(score => {
    if (legends.length < k) {
      legends.push(score);
    } else {
      // 가장 작은 점수 하나 삭제
      legends = deleteMin(legends, score);
    }

    answer.push(Math.min(...legends));
  });

  return answer;
}

describe('명예의 전당', () => {
  it('test', () => {
    expect(solution(3, [10, 100, 20, 150, 1, 100, 200])).toEqual([
      10, 10, 10, 20, 20, 100, 100,
    ]);

    expect(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000])).toEqual([
      0, 0, 0, 0, 20, 40, 70, 70, 150, 300,
    ]);
  });
});
