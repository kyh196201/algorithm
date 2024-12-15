function solution(videoLen, pos, opStart, opEnd, commands) {
  function getSeconds(time) {
    const [min, sec] = time.split(':').map(Number);
    return min * 60 + sec;
  }

  // 181초 3분 1초
  function getTime(seconds = 0) {
    const min = String(Math.floor(seconds / 60)).padStart(2, '0');
    const sec = String(seconds % 60).padStart(2, '0');

    return `${min}:${sec}`;
  }

  let answer = 0;

  // 모든 입력을 초 단위로 변환한다.
  videoLen = getSeconds(videoLen);
  pos = getSeconds(pos);
  opStart = getSeconds(opStart);
  opEnd = getSeconds(opEnd);

  // 현재 재생위치가 오프닝 구간이면
  if (pos >= opStart && pos <= opEnd) {
    // 끝나는 구간으로 이동
    answer = opEnd;
  } else {
    // 아니면 현재 재생위치에서 시작
    answer = pos;
  }

  for (let i = 0; i < commands.length; i++) {
    const command = commands[i];

    // 앞으로 가기일 경우
    if (command === 'next') {
      answer = Math.min(answer + 10, videoLen);
    } else {
      // 뒤로 가기일 경우
      answer = Math.max(answer - 10, 0);
    }

    // 오프닝 구간에 포함될 경우
    if (answer >= opStart && answer <= opEnd) {
      // 끝나는 구간으로 이동
      answer = opEnd;
    }
  }

  return getTime(answer);
}

describe('동영상 재생기', () => {
  it('test', () => {
    expect(solution('34:33', '13:00', '00:55', '02:55', ['next', 'prev'])).toBe(
      '13:00',
    );
  });
});
