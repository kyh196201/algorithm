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
function solution(park = [], routes = []) {
  const directionFns = {
    E: (pos, distance) => ({x: pos.x + distance, y: pos.y}),
    W: (pos, distance) => ({x: pos.x - distance, y: pos.y}),
    S: (pos, distance) => ({x: pos.x, y: pos.y + distance}),
    N: (pos, distance) => ({x: pos.x, y: pos.y - distance}),
  };

  const pos = {
    x: 0,
    y: 0,
  };

  const height = park.length;
  const width = park[0].length;

  // find start position
  for (let y = 0; y < park.length; y += 1) {
    const x = park[y].indexOf('S');

    if (x >= 0) {
      pos.x = x;
      pos.y = y;

      break;
    }
  }

  // move
  routes.forEach(route => {
    const [direction, distance] = route.split(' ');

    const nextPos = directionFns[direction](pos, Number(distance));

    const {x, y} = nextPos;

    if (x < 0 || x > width - 1 || y < 0 || y > height - 1) {
      return;
    }

    if (direction === 'E') {
      const road = park[pos.y];

      for (let index = pos.x; index <= x; index += 1) {
        // 장애물
        if (road[index] === 'X') {
          return;
        }
      }
    }

    if (direction === 'W') {
      const road = park[pos.y];

      for (let index = pos.x; index >= x; index -= 1) {
        // 장애물
        if (road[index] === 'X') {
          return;
        }
      }
    }

    if (direction === 'N') {
      for (let index = pos.y; index >= y; index -= 1) {
        const road = park[index];

        // 장애물
        if (road[x] === 'X') {
          return;
        }
      }
    }

    if (direction === 'S') {
      for (let index = pos.y; index <= y; index += 1) {
        const road = park[index];

        // 장애물
        if (road[x] === 'X') {
          return;
        }
      }
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
