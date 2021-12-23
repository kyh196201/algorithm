function solution(answers = []) {
  const result = [];
  const corrects = [];

  const pattern1 = [1, 2, 3, 4, 5];
  const pattern2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  corrects[0] = answers.filter(
    (answer, index) => answer === pattern1[index % 5],
  ).length;

  corrects[1] = answers.filter(
    (answer, index) => answer === pattern2[index % 8],
  ).length;

  corrects[2] = answers.filter(
    (answer, index) => answer === pattern3[index % 10],
  ).length;

  const max = Math.max(...corrects);

  corrects.forEach((correct, index) => {
    if (correct === max) {
      result.push(index + 1);
    }
  });

  return result.length > 1 ? result.sort((a, b) => a - b) : result;
}
