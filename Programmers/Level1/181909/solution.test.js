/**
 *
 * @param {string} string
 */
function solution(string) {
  const suffixes = [];

  for (let i = 0; i < string.length; i++) {
    const suffix = string.slice(i);
    suffixes.push(suffix);
  }

  return suffixes.sort();
}

describe('', () => {
  it('test', () => {
    expect(solution('Big')).toEqual(['Big', 'g', 'ig']);

    expect(solution('banana')).toEqual([
      'a',
      'ana',
      'anana',
      'banana',
      'na',
      'nana',
    ]);
  });
});
