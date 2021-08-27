function solution(progresses, speeds) {
  const answer = [];
  const daysLefts = [];

  for (let i = speeds.length - 1; i >= 0; i--) {
    const days = Math.ceil((100 - progresses[i]) / speeds[i]);

    daysLefts.push(days);
  }

  while (daysLefts.length) {
    const current = daysLefts.pop();
    let count = 1;

    if (!daysLefts.length) {
      answer.push(count);
      break;
    }

    while (daysLefts.length && daysLefts[daysLefts.length - 1] <= current) {
      daysLefts.pop();
      count++;
    }

    answer.push(count);
  }

  return answer;
}
