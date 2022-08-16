/* eslint-disable camelcase */
/* eslint-disable no-restricted-syntax */
function solution(id_list, report, k) {
  let answer = [];

  const reports = [...new Set(report)].map(v => v.split(' '));

  const counts = new Map();

  for (const re of reports) {
    const count = counts.get(re[1]) || 0;

    counts.set(re[1], count + 1);
  }

  const mailCounts = new Map();

  for (const re of reports) {
    const [id, reportedId] = re;

    if (counts.get(reportedId) >= k) {
      mailCounts.set(id, (mailCounts.get(id) || 0) + 1);
    }
  }

  answer = id_list.map(id => mailCounts.get(id) || 0);

  return answer;
}

const idList = ['muzi', 'frodo', 'apeach', 'neo'];

const report = [
  'muzi frodo',
  'apeach frodo',
  'frodo neo',
  'muzi neo',
  'apeach muzi',
];

const k = 2;

console.log(solution(idList, report, k)); // [2, 1, 1, 0]
