function solutionBfs(x, y, n) {
  const queue = [[y, 0]];

  const visited = new Set();

  while (queue.length) {
    const [current, count] = queue.shift();

    if (current === x) {
      return count;
    }

    if (!visited.has(current) && current > x) {
      visited.add(current);

      queue.push([current - n, count + 1]);

      if (current % 3 === 0) {
        queue.push([current / 3, count + 1]);
      }

      if (current % 2 === 0) {
        queue.push([current / 2, count + 1]);
      }
    }
  }

  return -1;
}

function solutionRecursive(x, y, n) {
  // cached[number] = number
  // 현재 숫자를 x로 변환할 수 있는 최소 연산 횟수를 저장
  const cached = {};

  function fn(currentY) {
    if (cached[currentY] !== undefined) {
      return cached[currentY];
    }

    if (currentY === x) {
      // x와 같을 경우 x가 되기 위해 필요한 연산 횟수는 0
      return 0;
    }

    if (currentY < x) {
      return Infinity;
    }

    const values = [];

    if (currentY % 3 === 0) {
      values.push(fn(currentY / 3) + 1);
    }

    if (currentY % 2 === 0) {
      values.push(fn(currentY / 2) + 1);
    }

    // 최소 연산 횟수를 cached에 저장
    cached[currentY] = Math.min(...values, fn(currentY - n) + 1);
    return cached[currentY];
  }

  const answer = fn(y);
  return Number.isFinite(answer) ? answer : -1;
}

describe('숫자 변환하기', () => {
  const tests = [
    {
      params: [10, 40, 5],
      expected: 2,
    },
    {
      params: [10, 40, 30],
      expected: 1,
    },
    {
      params: [2, 5, 4],
      expected: -1,
    },
    {
      params: [40, 40, 10],
      expected: 0,
    },
    {
      params: [100, 1000000, 1],
      expected: 22,
    },
  ];

  describe('BFS를 이용한 풀이', () => {
    test.each(tests)('test %#', ({params, expected}) => {
      expect(solutionBfs(...params)).toBe(expected);
    });
  });

  describe('재귀를 이용한 풀이', () => {
    test.each(tests)('test %#', ({params, expected}) => {
      expect(solutionRecursive(...params)).toBe(expected);
    });
  });
});
