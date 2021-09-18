function isRightTriangle(...legs) {
  let maxIndex = 0;

  for (let i = 1; i < legs.length; i += 1) {
    if (legs[i] > legs[maxIndex]) {
      maxIndex = i;
    }
  }

  const [maxLeg] = legs.splice(maxIndex, 1);

  const isRight = maxLeg ** 2 === legs[0] ** 2 + legs[1] ** 2;

  return isRight ? 'right' : 'wrong';
}

isRightTriangle(5, 12, 13);
