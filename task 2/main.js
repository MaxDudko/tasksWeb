const points = {
  A1: [100, 100, 60],
  A2: [250, 320, 70],
  A3: [440, 300, 80],
  A4: [450, 90, 70],
  A5: [510, 380, 90],
  A6: [650, 210, 110],
  A7: [570, 610, 120],
  A8: [310, 460, 80],
  A9: [130, 420, 60],
  A10: [90, 150, 50]
}

let pointsArr = [];
for(point in points) {
  pointsArr.push(points[point]);
}

let distance = [];
let distanceAll = 0;
let distancePoint = (pointStart, pointEnd) => {
  if (pointEnd == undefined) return 0;

  distance.push(Math.sqrt(Math.pow(pointEnd[0] - pointStart[0], 2) + Math.pow(pointEnd[1] - pointStart[1], 2)));
}

for(let i = 0; i <= pointsArr.length-1; i++) {
  distancePoint(pointsArr[i], pointsArr[i+1]);
}

for(let i = 0; i <= distance.length-1; i++) {
  distanceAll += distance[i];
}
let pointTime = [];
let calcPointTime = (distance, speed) => {
  pointTime.push((distance/speed)*1);
}

for(let i = 0; i <= distance.length; i++) {
  calcPointTime(distance[i], pointsArr[i][2]);
}
let position = [];
let findPosition = (t) => {
  let timeHasPassed = 0;
  let lastPointStart;
  let lastPointEnd;
  let lastPointTime;
  let lastPointDistance;
  let lastPointDistanceAll;
  for(let i = 0; i < pointTime.length-1; i++) {
    timeHasPassed += pointTime[i];
    if(timeHasPassed >= t) { 
      lastPointStart = pointsArr[i];
      lastPointEnd = pointsArr[i+1];
      lastPointDistanceAll= distance[i];
      break
    } 
  }
  lastPointTime = timeHasPassed - t;
  lastPointDistance = lastPointStart[2] * lastPointTime;
  let pointX = (lastPointStart[0] + lastPointEnd[0])/ (lastPointDistance / lastPointDistanceAll);
  let pointY = (lastPointStart[1] + lastPointEnd[1])/ (lastPointDistance / lastPointDistanceAll);
  console.log('X: ' + pointX, 'Y: ' + pointY);
  position.push(pointX);
  position.push(pointY);
}


