function solution(newId = '') {
  let id = newId
    .toLowerCase() // 1.
    .replace(/[^\w._-]/g, '') // 2.
    .replace(/\.{2,}/g, '.') // 3.
    .replace(/^\.|\.$/g, ''); // 4.

  if (!id.length) id = 'a'; // 5.

  id = id.slice(0, 15).replace(/\.$/g, ''); // 6.

  const len = id.length;

  return len > 2 ? id : id + id.charAt(len - 1).repeat(3 - len);
}

const newIds = [
  '...!@BaT#*..y.abcdefghijklm',
  'z-+.^.',
  '=.=',
  '123_.def',
  'abcdefghijklmn.p',
];

console.log(newIds.map(id => solution(id)).join('\n'));
