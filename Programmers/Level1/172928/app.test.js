/**
 * 이해
 * - park: 2차원 배열
 * - routes: '방향 거리'로 이루어진 배열
 * - 움직일 수 있는 방향 = N, E, S, W
 * 	- N = y - 1
 * 	- E = x + 1
 * 	- S = y + 1
 * 	- W = x - 1
 * - 이동 불가능
 * 	- 다음 위치 (x, y)
 * 		- 맵을 벗어나는 경우
 *  	- x < 0 || x > w - 1
 *  	- y < 0 || y > h - 1
 *
 * 		- 이동 과정에서 장애물 만나는 케이스
 * 		- for 문으로 해결
 *
 * 구해야할 것
 * - 로봇 강아지의 마지막 위치
 *
 * 조건
 *
 * 계획
 * - routes를 반복
 * - routes[i]를 split(' ') => [direction, distance]
 * - 현재 위치 기준, 다음 위치 구하기
 * - 이동 불가능 여부 확인
 * - 이동 불가능할 경우 이동하지 않음
 */
function getStartPos(park) {
  for (let y = 0; y < park.length; y += 1) {
    const x = park[y].indexOf('S');

    if (x >= 0) {
      return {x, y};
    }
  }

  return {x: 0, y: 0};
}

function isInBound(pos, width, height) {
  const {x, y} = pos;

  return !(x < 0 || x > width - 1 || y < 0 || y > height - 1);
}

function checkObstacle(park, pos, nextPos) {
  const direction = pos.x === nextPos.x ? 'V' : 'H';
  const [start, end] =
    direction === 'V'
      ? [Math.min(pos.y, nextPos.y), Math.max(pos.y, nextPos.y)]
      : [Math.min(pos.x, nextPos.x), Math.max(pos.x, nextPos.x)];

  for (let i = start; i <= end; i += 1) {
    if (
      (direction === 'V' && park[i][pos.x] === 'X') ||
      (direction === 'H' && park[pos.y][i] === 'X')
    ) {
      return true;
    }
  }
  return false;
}

function solution(park = [], routes = []) {
  const directionFns = {
    E: (pos, distance) => ({x: pos.x + distance, y: pos.y}),
    W: (pos, distance) => ({x: pos.x - distance, y: pos.y}),
    S: (pos, distance) => ({x: pos.x, y: pos.y + distance}),
    N: (pos, distance) => ({x: pos.x, y: pos.y - distance}),
  };

  // find start position
  const pos = getStartPos(park);
  const height = park.length;
  const width = park[0].length;

  // move
  routes.forEach(route => {
    const [direction, distance] = route.split(' ');

    const nextPos = directionFns[direction](pos, Number(distance));

    const {x, y} = nextPos;

    if (!isInBound(nextPos, width, height)) {
      return;
    }

    if (checkObstacle(park, pos, nextPos)) {
      return;
    }

    pos.x = x;
    pos.y = y;
  });

  return [pos.y, pos.x];
}

describe('공원 산책', () => {
  it('test', () => {
    const inputs = [
      {
        park: ['OSO', 'OOO', 'OXO', 'OOO'], // 1, 0
        routes: ['E 2', 'S 3', 'W 1'],
        result: [0, 0],
      },
      {
        park: ['SOO', 'OOO', 'OOO'],
        routes: ['E 2', 'S 2', 'W 1'],
        result: [2, 1],
      },
      {
        park: ['SOO', 'OXX', 'OOO'],
        routes: ['E 2', 'S 2', 'W 1'],
        result: [0, 1],
      },
    ];

    inputs.forEach(input => {
      expect(solution(input.park, input.routes)).toEqual(input.result);
    });
  });
});
