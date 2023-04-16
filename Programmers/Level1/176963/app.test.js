/**
 * 이해
 * - 사람마다 정해진 그리움 점수가 있다.
 * - 사람, 그리움 점수는 배열로 주어진다.
 *
 * 구해야할 것
 * - 사진 별 그리움 점수의 합
 *
 * 조건
 *
 * 계획
 * - name, yearning 배열을 순회하면서 각 사람별로 그리움 점수를 쉽게 찾을 수 있는 객체를 구성한다.
 * - photo 한 라인에 대해서 그리움 점수를 구할 수 있는 함수를 만든다.
 * - photo 각 라인에 만든 함수를 반복 실행한다.
 */

const testCases = [
  {
    names: ['may', 'kein', 'kain', 'radi'],
    yearnings: [5, 10, 1, 3],
    photos: [
      ['may', 'kein', 'kain', 'radi'],
      ['may', 'kein', 'brin', 'deny'],
      ['kon', 'kain', 'may', 'coni'],
    ],
    result: [19, 15, 6],
  },
  {
    names: ['kali', 'mari', 'don'],
    yearnings: [11, 1, 55],
    photos: [
      ['kali', 'mari', 'don'],
      ['pony', 'tom', 'teddy'],
      ['con', 'mona', 'don'],
    ],
    result: [67, 0, 55],
  },
  {
    names: ['may', 'kein', 'kain', 'radi'],
    yearnings: [5, 10, 1, 3],
    photos: [['may'], ['kein', 'deny', 'may'], ['kon', 'coni']],
    result: [5, 15, 0],
  },
];

function solution(names = [], yearnings = [], photos = []) {
  const yearningsMap = new Map();

  names.forEach((name, index) => {
    yearningsMap.set(name, yearnings[index]);
  });

  return photos.map(photo =>
    photo.reduce((sum, current) => sum + (yearningsMap.get(current) ?? 0), 0),
  );
}

describe('', () => {
  it('test', () => {
    testCases.forEach(testCase => {
      expect(
        solution(testCase.names, testCase.yearnings, testCase.photos),
      ).toEqual(testCase.result);
    });
  });
});
