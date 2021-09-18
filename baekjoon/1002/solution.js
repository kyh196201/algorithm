function solution(x1, y1, r1, x2, y2, r2) {
  const getDistance = (p1, p2) =>
    Math.sqrt((p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2);

  const point1 = [x1, y1];
  const point2 = [x2, y2];

  //   두 원의 중심 좌표 사이의 거리
  const d = getDistance(point1, point2);
  let result = 0;

  if (d === 0 && r1 === r2) {
    result = -1;
  } else if (d > r1 + r2 || d < Math.abs(r1 - r2)) {
    //   두 원이 서로 외접하거나 내접하지 않는 경우
    result = 0;
  } else if (d === r1 + r2 || d === Math.abs(r1 - r2)) {
    //   원이 외접하거나 내접할 경우
    result = 1;
  } else if (d < r1 + r2) {
    //   접점이 2개일 경우
    result = 2;
  }

  console.log(result);
}

solution(0, 0, 13, 40, 0, 37);
