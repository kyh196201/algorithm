/**
 *
 * @param {string} string
 * @param {string} suffix
 */
function solution(string, suffix) {
  const stringArray = string.split('').reverse();
  const suffixArray = suffix.split('').reverse();

  for (let i = 0; i < suffixArray.length; i++) {
    if (suffixArray[i] !== stringArray[i]) {
      return 0;
    }
  }

  return 1;
}

function solution2(string, suffix) {
  for (let i = suffix.length - 1; i >= 0; i--) {
    if (suffix[i] !== string[i + (string.length - suffix.length)]) {
      return 0;
    }
  }

  return 1;
}

function solution3(string, suffix) {
  const suffixes = new Set();
  for (let i = 0; i < string.length; i++) {
    suffixes.add(string.substring(i));
  }

  return suffixes.has(suffix) ? 1 : 0;
}

function solution4(string, suffix) {
  return string.slice(-1 * suffix.length) === suffix ? 1 : 0;
}

function solution5(string, suffix) {
  return string.endsWith(suffix) ? 1 : 0;
}

describe('', () => {
  it('test', () => {
    expect(solution('banana', 'ana')).toBe(1);
    expect(solution('banana', 'nan')).toBe(0);
    expect(solution('banana', 'anana')).toBe(1);
    expect(solution('banana', 'banana')).toBe(1);
  });

  it('test2', () => {
    expect(solution2('banana', 'ana')).toBe(1);
    expect(solution2('banana', 'nan')).toBe(0);
    expect(solution2('banana', 'anana')).toBe(1);
    expect(solution2('banana', 'banana')).toBe(1);
  });

  it('test3', () => {
    expect(solution3('banana', 'ana')).toBe(1);
    expect(solution3('banana', 'nan')).toBe(0);
    expect(solution3('banana', 'anana')).toBe(1);
    expect(solution3('banana', 'banana')).toBe(1);
  });

  it('test4', () => {
    expect(solution4('banana', 'ana')).toBe(1);
    expect(solution4('banana', 'nan')).toBe(0);
    expect(solution4('banana', 'anana')).toBe(1);
    expect(solution4('banana', 'banana')).toBe(1);
  });

  it('test5', () => {
    expect(solution5('banana', 'ana')).toBe(1);
    expect(solution5('banana', 'nan')).toBe(0);
    expect(solution5('banana', 'anana')).toBe(1);
    expect(solution5('banana', 'banana')).toBe(1);
  });
});
