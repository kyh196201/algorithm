function solution(participant, completion) {
  let answer = '';

  const table = {};

  completion.forEach(name => {
    if (!table[name]) {
      table[name] = 0;
    }

    table[name] += 1;
  });

  answer = participant.find(name => {
    if (table[name]) {
      table[name] -= 1;
      return false;
    }
    return true;
  });

  return answer;
}

const participant = ['leo', 'kiki', 'eden'];
const completion = ['eden', 'kiki'];

console.log(solution(participant, completion));
