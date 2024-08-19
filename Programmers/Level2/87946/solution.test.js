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
 * - 던전을 방문할 수 있는 모든 경우의 수를 구한다(순열)
 * - 순열의 첫 번째 요소를 선택한다 (첫 번째 요소는 원본 배열과 동일하다)
 * - 다음 던전이 있는지 확인한다
 * 	-	index < 던전.length
 * 	- 다음 던전이 있을 경우
 * 		- 던전을 탐험할 수 있는지 확인한다
 * 			- 현재 남은 피로도 >= 현재 던전의 최소 필요 피로도(dungeon[0])
 * 			- 탐험할 수 있을 경우
 * 				- 남은 피로도를 갱신
 * 				- 다음 던전으로 이동 (index += 1)
 * 			- 탐험할 수 없을 경우
 * 				- 현재 index(탐험한 던전의 수)와 max를 비교
 *	- 다음 던전이 없을 경우
 * 		- 현재 index(탐험한 던전의 수)와 max를 비교
 * - 순열의 두 번째 요소를 선택한다. (반복)
 * - max를 반환한다
 * 반성
 */

/**
 *
 * @param {any[]} array
 * @returns {any[][]}
 */
function permute(array = []) {
  // 2차원 배열
  const result = [];

  if (array.length === 0) {
    return [];
  }

  if (array.length === 1) {
    return [array];
  }

  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    const remains = [...array.slice(0, i), ...array.slice(i + 1)];
    const permutedRemains = permute(remains);

    for (let j = 0; j < permutedRemains.length; j++) {
      result.push([current, ...permutedRemains[j]]);
    }
  }

  return result;
}

function solution(k, dungeons) {
  /**
   * [
   * 	[ [ 80, 20 ], [ 50, 40 ], [ 30, 10 ] ],
   * 	[ [ 80, 20 ], [ 30, 10 ], [ 50, 40 ] ]
   * ]
   */
  // 던전을 탐험할 수 있는 모든 경우의 수를 구하기 위해서
  // 모든 케이스가 담긴 순열을 얻음
  // 던전의 최대 길이가 8이므로 최대 경우의 수 = 8!
  const cases = permute(dungeons);
  let max = 0;

  for (let i = 0; i < cases.length; i++) {
    // [ [ 80, 20 ], [ 50, 40 ], [ 30, 10 ] ]
    const dungeonList = cases[i];
    let left = k;
    let j = 0;

    // 남은 피로도 >= 던전의 최소 필요 피로도
    while (j < dungeonList.length && left >= dungeonList[j][0]) {
      left -= dungeonList[j][1];
      j += 1;
    }

    if (j > max) {
      max = j;
    }
  }

  return max;
}

describe('피로도', () => {
  it('permute', () => {
    expect(permute([1, 2])).toEqual([
      [1, 2],
      [2, 1],
    ]);
  });

  it('solution', () => {
    expect(
      solution(80, [
        [80, 20],
        [50, 40],
        [30, 10],
      ]),
    ).toBe(3);
  });
});
