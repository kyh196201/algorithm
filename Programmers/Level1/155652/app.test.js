/**
 * 이해
 *
 * 구해야할 것
 *
 * 조건
 *
 * 계획
 */
function convert(word = 'a', alphabets = [], index = 1) {
  const nextIndex = alphabets.indexOf(word) + index;

  const mod = nextIndex % alphabets.length;

  return alphabets[mod];
}

function solution(s = '', skip = '', index = 1) {
  const a = 97;
  const z = 122;
  const alphabets = [];

  for (let i = a; i <= z; i += 1) {
    const letter = String.fromCharCode(i);

    if (!skip.includes(letter)) {
      alphabets.push(letter);
    }
  }

  const converted = s.split('').map(v => convert(v, alphabets, index));

  return converted.join('');
}

describe('convert', () => {
  it('converts a origin letter to password', () => {
    expect(
      convert(
        'a',
        [
          'a',
          'c',
          'e',
          'f',
          'g',
          'h',
          'i',
          'j',
          'k',
          'l',
          'm',
          'n',
          'o',
          'p',
          'r',
          's',
          't',
          'u',
          'v',
          'x',
          'y',
          'z',
        ],
        5,
      ),
    ).toBe('h');

    expect(convert('z', ['z'], 6)).toBe('z');
  });
});

describe('둘만의 암호', () => {
  it('test', () => {
    expect(solution('aukks', 'wbqd', 5)).toBe('happy');
    // expect(solution('zzzzzz', 'abcdefghijklmnopqrstuvwxy', 6)).toBe('zzzzzz');
  });
});
