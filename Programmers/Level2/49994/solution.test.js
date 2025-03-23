function solution(dirs) {
  const visited = new Set();

  let current = [0, 0];
  let answer = 0;

  const directions = {
    U: coord => [coord[0], coord[1] + 1],
    D: coord => [coord[0], coord[1] - 1],
    R: coord => [coord[0] + 1, coord[1]],
    L: coord => [coord[0] - 1, coord[1]],
  };

  dirs.split('').forEach(dir => {
    const next = directions[dir](current);

    if (next[0] < -5 || next[0] > 5 || next[1] < -5 || next[1] > 5) {
      return;
    }

    const path1 = `${current.join()}-${next.join()}`;
    const path2 = `${next.join()}-${current.join()}`;

    if (!visited.has(path1) && !visited.has(path2)) {
      visited.add(path1);
      visited.add(path2);
      answer += 1;
    }

    current = next;
  });

  return answer;
}

describe('방문 길이', () => {
  it('test1', () => {
    expect(solution('ULURRDLLU')).toBe(7);
  });

  it('test2', () => {
    expect(solution('LULLLLLLU')).toBe(7);
  });

  it('test3', () => {
    expect(solution('URULDD')).toBe(5);
  });
});
