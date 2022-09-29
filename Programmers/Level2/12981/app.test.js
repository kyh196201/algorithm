/**
 * 이해
 *
 * 구해야하는 것
 * - 탈락하는 사람의 번호
 * - 몇 번째 차례에 탈락했는지
 *
 * 주어지는 것
 * - 참여하는 사람의 수
 * - 끝말잇기에 사용한 단어들이 담긴 배열
 *
 * 조건
 * - 탈락자가 생기지 않으면 [0,0]을 리턴
 *
 * 계획
 * - words를 탐색한다.
 * - 이전 단어가 없을 경우 바로 사용한 단어 목록 Set에 push 한다.
 * - 이전 단어가 있고, 이전 단어의 끝 글자와 현재 단어의 시작 글자가 다를 경우 그때의 index를 구한다.
 * - 올바른 단어일 경우 사용한 단어 목록 Set에 추가한다.
 * - 만약 사용한 단어(중복된 단어)가 발견되면 그때의 index를 구한다.
 * - index를 사람의 수 n으로 나눈 몫 + 1이 현재 차례이다(몇 바퀴째인지)
 * - 그리고 index를 사람의 수 n으로 나눈 나머지 + 1이 그 사람의 번호이다.
 * - 탐색하면서 중복된 단어를 발견하지 못하면 [0, 0]를 리턴한다.
 *
 * 반성
 */
function solution(numberOfPlayers = 2, words = []) {
  const usedWords = new Set();

  const failIndex = words.findIndex((word, index) => {
    // 첫 단어일 경우
    if (index === 0) {
      usedWords.add(word);
      return false;
    }

    const prevWord = words[index - 1];
    const isWrongWord = prevWord.charAt(prevWord.length - 1) !== word.charAt(0);

    // 잘못된 단어일 경우
    if (isWrongWord) {
      return true;
    }

    // 중복된 단어일 경우
    if (usedWords.has(word)) {
      return true;
    }

    usedWords.add(word);
    return false;
  });

  if (failIndex < 0) return [0, 0];

  const player = {
    number: (failIndex % numberOfPlayers) + 1,
    turn: Math.floor(failIndex / numberOfPlayers) + 1,
  };

  return [player.number, player.turn];
}

describe('영어 끝말잇기', () => {
  it('test1', () => {
    const words = [
      'tank',
      'kick',
      'know',
      'wheel',
      'land',
      'dream',
      'mother',
      'robot',
      'tank',
    ];
    const numberOfPlayers = 3;

    expect(solution(numberOfPlayers, words)).toEqual([3, 3]);
  });

  it('test2', () => {
    const words = [
      'hello',
      'observe',
      'effect',
      'take',
      'either',
      'recognize',
      'encourage',
      'ensure',
      'establish',
      'hang',
      'gather',
      'refer',
      'reference',
      'estimate',
      'executive',
    ];
    const numberOfPlayers = 5;

    expect(solution(numberOfPlayers, words)).toEqual([0, 0]);
  });

  it('test3', () => {
    const words = ['hello', 'one', 'even', 'never', 'now', 'world', 'draw'];
    const numberOfPlayers = 2;

    expect(solution(numberOfPlayers, words)).toEqual([1, 3]);
  });

  it('test4', () => {
    const words = ['aba', 'aba'];
    const numberOfPlayers = 2;

    expect(solution(numberOfPlayers, words)).toEqual([2, 1]);
  });

  it('test19-1', () => {
    const result = solution(2, ['land', 'dream', 'mom', 'mom', 'ror']);
    const expected = [2, 2];

    expect(result).toEqual(expected);
  });

  it('test19-2', () => {
    const result = solution(2, ['land', 'dream', 'mom', 'mom']);
    const expected = [2, 2];

    expect(result).toEqual(expected);
  });
});
