/**
 * 이해
 *
 * 구해야하는 것
 * 카펫의 가로, 세로 크기가 담긴 배열
 *
 * 주어지는 것
 * - 갈색 격자의수, 노란색 격자의 수
 *
 * 조건
 * - 카펫의 가로길이 >= 세로길이
 *
 * 계획
 *
 * - 주어진 yellow의 약수를 이용해서 세로 * 가로 형태로 표현할 수 있는 경우의 수를 체크한다.
 * - 가로 * 세로는 yellow의 약수끼리의 곱과 같다.
 * - 조건에서 가로 >= 세로이므로, 세로의 길이가 yellow의 제곱근의 길이보다 작거나 같을때까지 반복한다.
 * - 각 경우 마다 yellow를 감쌀 수 있는 brown의 수는 (가로 + 세로) * 2 + 4(모서리 4개)이다.
 * - 각 경우마다 구한 brown의 수가 주어진 brown과 같은지 확인한다.
 * - 정답은 [yellow의 가로길이 + 2, yellow의 세로길이 + 2]
 *
 * 반성
 */
function getCarpet(brown = 8, yellow = 1) {
  const result = [];

  for (let height = 1; height <= Math.sqrt(yellow); height += 1) {
    const width = yellow / height;

    const brownsNeed = (width + height) * 2 + 4;

    if (brownsNeed === brown) {
      result[0] = width + 2;
      result[1] = height + 2;
      break;
    }
  }

  return result;
}

describe('카펫', () => {
  it('test', () => {
    expect(getCarpet(10, 2)).toEqual([4, 3]);

    expect(getCarpet(8, 1)).toEqual([3, 3]);

    expect(getCarpet(24, 24)).toEqual([8, 6]);
  });
});
