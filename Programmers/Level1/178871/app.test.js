/**
 * 이해
 * players = 현재 등수 순으로 정렬된 배열
 * callings = 이름을 부른 순서 순으로 정렬된 배열
 *
 * 구해야할 것
 * 경기가 끝난 후의 선수들의 순서
 *
 * 조건
 * 5 <= players의 길이 <= 50000
 * 2 <= callings의 길이 <= 1000000
 *
 * 계획
 */

function solution(players = [], callings = []) {
  const playerPositions = players.reduce(
    (positions, player, index) => ({
      ...positions,
      [player]: index,
    }),
    {},
  );

  callings.forEach(called => {
    const currentPos = playerPositions[called];
    const nextPos = currentPos - 1;

    const entries = Object.entries(playerPositions);

    for (let i = 0; i < entries.length; i += 1) {
      const [player, position] = entries[i];

      if (position === nextPos) {
        playerPositions[player] = currentPos;

        break;
      }
    }

    playerPositions[called] = nextPos;
  });

  const result = Object.entries(playerPositions)
    .sort((a, b) => a[1] - b[1])
    .map(entry => entry[0]);

  return result;
}

describe('달리기 경주', () => {
  it('test', () => {
    expect(
      solution(
        ['mumu', 'soe', 'poe', 'kai', 'mine'],
        ['kai', 'kai', 'mine', 'mine'],
      ),
    ).toEqual(['mumu', 'kai', 'mine', 'soe', 'poe']);
  });
});
