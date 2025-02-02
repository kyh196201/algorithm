function solution(maps) {
  const n = maps.length - 1;
  const m = maps[0].length - 1;
  const visited = new Set();
  const queue = [
    {
      pos: [0, 0],
      count: 1,
    },
  ];

  const canMove = nextPos => {
    const [x, y] = nextPos;
    return (
      x >= 0 &&
      x <= n &&
      y >= 0 &&
      y <= m &&
      maps[x][y] && // 벽이 없는 칸
      !visited.has(nextPos.toString()) // 방문하지 않은 칸
    );
  };

  while (queue.length) {
    const {pos, count} = queue.shift();
    const [x, y] = pos;
    if (x === n && y === m) {
      return count;
    }

    // 기존에 방문한 칸이 아닐 경우
    // 같은 pos가 queue안에 존재할 수 있기 때문에 while문 안에서도 방문 여부를 체크해야 함
    if (!visited.has(pos.toString())) {
      visited.add(pos.toString());

      [
        [x, y + 1], // 동
        [x, y - 1], // 서
        [x + 1, y], // 남
        [x - 1, y], // 북
      ].forEach(nextPos => {
        if (canMove(nextPos)) {
          queue.push({
            pos: nextPos,
            count: count + 1,
          });
        }
      });
    }
  }

  return -1;
}

describe('게임 맵 최단거리', () => {
  it('test', () => {
    expect(
      solution([
        [1, 0, 1, 1, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 1, 1, 1],
        [1, 1, 1, 0, 1],
        [0, 0, 0, 0, 1],
      ]),
    ).toBe(11);

    expect(
      solution([
        [1, 0, 1, 1, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 1, 1, 1],
        [1, 1, 1, 0, 0],
        [0, 0, 0, 0, 1],
      ]),
    ).toBe(-1);
  });
});
