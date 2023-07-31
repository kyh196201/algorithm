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

function swap(players, rank1, rank2) {
  const temp = players[rank1];
  players[rank1] = players[rank2];
  players[rank2] = temp;
}

function solution(players = [], callings = []) {
  // 처음 등수
  const ranks = {};

  players.forEach((player, rank) => {
    ranks[player] = rank;
  });

  // 시간 초과
  // const ranks = players.reduce(
  //   (positions, player, index) => ({
  //     ...positions,
  //     [player]: index,
  //   }),
  //   {},
  // );

  callings.forEach(called => {
    const rank = ranks[called];
    const nextRank = rank - 1;

    ranks[called] = nextRank;
    ranks[players[nextRank]] = rank;

    swap(players, nextRank, rank);
  });

  return players;
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
