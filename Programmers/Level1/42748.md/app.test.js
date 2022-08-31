/**
 * - 주어지는 것
 * 숫자가 담긴 배열(numbers)
 * 커맨드가 담긴 배열(commands)
 *
 *
 * - 구해야하는 것
 * numbers의 각 원소에 커맨드를 적용해서 얻은 숫자로 이루어진 배열
 *
 *
 * - 풀이
 *
 * 1. numbers의 각 원소마다 커맨드를 실행할 함수를 만든다.
 *
 * 2. 커맨드를 실행할 함수는 원본 배열을 복사해서, i에서 j까지 자른다. 그리고 자른 배열을 정렬하고 k번째 숫자를 리턴한다.
 *
 * 3. numbers의 각 원소마다 커맨드를 실행해서 원하는 배열을 얻는다.
 */

function sortArray(array) {
  return array.sort((a, b) => a - b);
}

function runCommand(numbers, command) {
  const [i, j, k] = command;
  const slice = sortArray(numbers.slice(i - 1, j));

  return slice[k - 1];
}

function solution(numbers, commands) {
  return commands.map(command => runCommand(numbers, command));
}

const numbers = [1, 5, 2, 6, 3, 7, 4];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

describe('sortArray', () => {
  it('배열을 오름차순으로 정렬한다.', () => {
    expect(sortArray([2, 5, 3])).toEqual([2, 3, 5]);
  });
});

describe('runCommand', () => {
  it('배열을 i에서 j부터 자르고, k 번째에 있는 수를 반환한다.', () => {
    expect(runCommand(numbers, [2, 5, 3])).toBe(5);

    expect(runCommand(numbers, [4, 4, 1])).toBe(6);

    expect(runCommand(numbers, [1, 7, 3])).toBe(3);
  });
});

describe('k번째수', () => {
  it('k번째 수를 반환한다.', () => {
    expect(solution(numbers, commands)).toEqual([5, 6, 3]);
  });
});
