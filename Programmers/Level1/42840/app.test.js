/**
 * 이해
 *
 * 주어지는 것
 * - 정답이 들어있는 answers 배열
 *
 * 구해야하는 것
 * - 가장 많은 문제를 맞춘 사람이 들어있는 배열
 * - 여러사람일 경우 오름차순으로 정렬해서 return
 *
 * 계획
 * - 각 사람별로 답을 입력하는 패턴을 배열로 저장 패턴과 문제를 비교
 * - 각 사람별로 맞춘 답을 저장
 * - 가장 많은 문제를 맞춘 사람 찾기
 *  - 첫 사람을 저장. 더 큰사람이 있을 경우에 배열을 비우고 새로운 값을 저장. 같은 값일 경우에 push해서 사람을 추가
 * - 오름차순으로 정렬해서 return
 *
 * 반성
 * - 패턴을 2차원 배열로 선언한 것이 좋았다.
 * - 사람 별로 맞춘 갯수를 map을 이용해서 구한 것이 좋았다.
 */

function solve(answers = [], pattern = []) {
  let count = 0;

  const patternLength = pattern.length;

  for (let i = 0; i < answers.length; i += 1) {
    if (answers[i] === pattern[i % patternLength]) {
      count += 1;
    }
  }

  return count;
}

describe('solve', () => {
  it('패턴에 따라 문제를 맞추는 함수를 반환한다.', () => {
    expect(solve([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])).toBe(5);

    expect(solve([1, 3, 2, 4, 2], [1, 2, 3, 4, 5])).toBe(2);
  });
});

function solveClosure(answers = []) {
  return (pattern = []) => {
    let count = 0;

    const patternLength = pattern.length;

    for (let i = 0; i < answers.length; i += 1) {
      if (answers[i] === pattern[i % patternLength]) {
        count += 1;
      }
    }

    return count;
  };
}

describe('solveClosure', () => {
  it('패턴에 따라 문제를 맞추는 함수를 반환한다.', () => {
    const answers = [1, 2, 3, 4, 5];

    const fn = solveClosure(answers);

    expect(fn([1, 2, 3, 4, 5])).toBe(5);

    expect(fn([2, 1, 2, 3, 2, 4, 2, 5])).toBe(0);
  });
});

function solution(answers = []) {
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  // const counts = patterns.map(pattern => solve(answers, pattern));
  const counts = patterns.map(solveClosure(answers));

  const max = Math.max(...counts);

  const result = [];

  counts.forEach((count, index) => {
    if (count === max) {
      result.push(index + 1);
    }
  });

  return result.length === 1 ? result : result.sort((a, b) => a - b);
}

describe('모의고사', () => {
  it('test', () => {
    expect(solution([1, 2, 3, 4, 5])).toEqual([1]);

    expect(solution([1, 3, 2, 4, 2])).toEqual([1, 2, 3]);
  });
});
