const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function checkGroupWord(word) {
  const checkedChars = [];
  const wordLength = word.length;

  for (let i = 0; i < wordLength; i += 1) {
    const char = word[i];

    if (checkedChars.length) {
      const lastChar = checkedChars[checkedChars.length - 1];
      if (lastChar !== char && checkedChars.includes(char)) {
        return false;
      }
    }

    checkedChars.push(char);
  }

  return true;
}

function solution(...word) {
  const result = word.map(w => checkGroupWord(w)).filter(v => !!v).length;

  return result;
}

const input = [];
let result;

rl.on('line', line => {
  input.push(line);
}).on('close', () => {
  result = solution(...input.slice(1));
  console.log(result);
  process.exit();
});
