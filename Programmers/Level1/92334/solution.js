function solution(idList, report, k) {
  // 신고자 Id: 신고한 유저목록[] 저장
  const reporters = new Map();

  // 피신고자 Id: 신고당한 횟수 저장
  const reportCounts = new Map();

  report = [...new Set(report)];

  report.forEach(re => {
    const [reporter, reported] = re.split(' ');

    // 신고자 맵 설정
    if (!reporters.has(reporter)) reporters.set(reporter, [reported]);
    else {
      const reportList = reporters.get(reporter);

      reporters.set(reporter, [...reportList, reported]);
    }

    // 피신고자 맵 설정
    if (!reportCounts.has(reported)) reportCounts.set(reported, 1);
    else {
      const count = Number(reportCounts.get(reported));

      reportCounts.set(reported, count + 1);
    }
  });

  return idList.map(id => {
    // 신고한 유저 목록
    const reportList = reporters.get(id);

    return reportList
      ? reportList.filter(re => {
          const count = reportCounts.get(re);

          // k번 이상 신고했는지 여부
          return count >= k;
        }).length
      : 0;
  });
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
