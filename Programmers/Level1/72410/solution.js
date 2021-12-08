// 특수 문자 제거
function replaceSpecialChars(id = '') {
  const regExp = new RegExp(/[`~!@#$%^&*()|+=?;:'",<>\{\}\[\]\/]/, 'gi');

  return id.replace(regExp, '');
}

function replaceMultipleDot(id = '') {
  if (!id) return id;

  const DOT = '.';
  let newId = '';

  for (let i = 0; i < id.length - 1; i += 1) {
    const currentChar = id[i];
    const nextChar = id[i + 1];

    if (currentChar !== nextChar) newId += currentChar;
    else if (currentChar !== DOT) newId += currentChar;
  }

  if (id[id.length - 1] !== newId[newId.length - 1]) {
    newId += id[id.length - 1];
  }

  return newId.replace(/\^\.|\.$/, '');
}

function solution(newId = '') {
  // 대문자 제거
  let id = newId.toLowerCase();

  // 특수문자 제거
  id = replaceSpecialChars(id);

  // 반복되는 '.' 제거
  id = replaceMultipleDot(id);

  if (!id) id = 'a';

  if (id.length >= 16) {
    id = id.slice(0, 15).replace(/\.$/, '');
  }

  const len = id.length;

  if (len <= 2) {
    const lastChar = id[len - 1];

    while (id.length <= 2) {
      id += lastChar;
    }
  }

  return id;
}

const ids = [
  '...!@BaT#*..y.abcdefghijklm',
  'z-+.^.',
  '=.=',
  '123_.def',
  'abcdefghijklmn.p',
];

const answers = ids.map(id => solution(id));

console.log(answers.join('\n'));

// 다른사람의 풀이
function solution2(newId) {
  const answer = newId
    .toLowerCase() // 1
    .replace(/[^\w-_.]/g, '') // 2
    .replace(/\.+/g, '.') // 3
    .replace(/^\.|\.$/g, '') // 4
    .replace(/^$/, 'a') // 5
    .slice(0, 15)
    .replace(/\.$/, ''); // 6
  const len = answer.length;
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}

const solution3 = newId => {
  const id = newId
    .toLowerCase()
    .replace(/[^\w\d-_.]/g, '')
    .replace(/\.{2,}/g, '.')
    .replace(/^\.|\.$/g, '')
    .padEnd(1, 'a')
    .slice(0, 15)
    .replace(/^\.|\.$/g, '');
  return id.padEnd(3, id[id.length - 1]);
};
