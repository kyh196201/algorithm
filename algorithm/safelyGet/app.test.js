/* repository가 undefined인 경우 */
const object1 = {
  repository: undefined,
};

/* repository의 readme가 undefined인 경우 */
const object2 = {
  repository: {
    readme: undefined,
  },
};

/** repository.readme 모두가 존재하는 경우 */
const object3 = {
  repository: {
    readme: {
      extension: 'md',
      content: '금융을 쉽고 간편하게',
    },
  },
};

function safelyGet(obj = {}, path = '') {
  /**
   * 1. path를 .을 기준으로  split =  keys
   * 2. cur = obj
   * 3. keys를 탐색
   * 4. cur[keys[i]]가 undefined가 아닐경우 cur = cur[keys[i]]
   * 5. undefined일 경우 return undefined
   */
  const properties = path.split('.');

  let current = obj;

  for (let i = 0; i < properties.length; i += 1) {
    const property = properties[i];

    if (current[property] === undefined) {
      return undefined;
    }

    current = current[property];
  }

  return current;
}

describe('문자열 나누기', () => {
  it('test', () => {
    expect(safelyGet(object1, 'repository.readme.extension')).toBe(undefined);

    expect(safelyGet(object1, 'repository.readme')).toBe(undefined);

    expect(safelyGet(object1, 'repository')).toBe(undefined);

    expect(safelyGet(object2, 'repository.readme.extension')).toBe(undefined);

    expect(safelyGet(object2, 'repository.readme')).toBe(undefined);

    expect(safelyGet(object2, 'repository')).toEqual({readme: undefined});

    expect(safelyGet(object3, 'repository.readme.extension')).toBe('md');

    expect(safelyGet(object3, 'repository.readme')).toEqual({
      extension: 'md',
      content: '금융을 쉽고 간편하게',
    });
  });
});
