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

function solution(priorities, location) {
  const executed = [];

  priorities = priorities.map((property, index) => [property, index]);

  while (priorities.length) {
    let maxIndex = 0;
    let max = priorities[0][0];

    for (let i = 1; i < priorities.length; i++) {
      if (max < priorities[i][0]) {
        maxIndex = i;
        // eslint-disable-next-line prefer-destructuring
        max = priorities[i][0];
      }
    }

    executed.push(priorities[maxIndex]);

    priorities = [
      ...priorities.slice(maxIndex + 1),
      ...priorities.slice(0, maxIndex),
    ];
  }

  return executed.findIndex(it => it[1] === location) + 1;
}

describe('프로세스', () => {
  it('test', () => {
    expect(solution([2, 1, 3, 2], 2)).toBe(1);
    expect(solution([1, 1, 9, 1, 1, 1], 0)).toBe(5);
  });
});
