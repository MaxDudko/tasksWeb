let canvas = document.getElementById('grid');
ctx = canvas.getContext('2d');

for(let x = 0; x <= 700; x += 100) {
  ctx.moveTo(x, 0);
  ctx.lineTo(x, 700);
}
for(let y = 0; y <= 700; y += 100) {
  ctx.moveTo(0, y);
  ctx.lineTo(700, y);
}
ctx.strokeStyle = '#00FF00';
ctx.stroke();

for(let x = 0; x <= 700; x += 100) {
  ctx.fillText('x-'+x, x, 10);
}
for(let y = 0; y <= 700; y += 100) {
  ctx.fillText('y-'+y, 5, y);
}

let route = (pointStart, pointEnd, i) => {
  ctx.beginPath();
  ctx.moveTo(pointStart[0], pointStart[1]);
  ctx.font = "15px Merienda";
  ctx.strokeStyle = '#FF0000';
  ctx.fillText(`A-${i+1}`, pointStart[0], pointStart[1])
  ctx.lineTo(pointEnd[0], pointEnd[1]);
  ctx.strokeStyle = 'rgb(255, 0, 0, 0.5)';
  //ctx.fillText(`(A${i+1}-A${i+2}: ${distance}km)`, pointEnd[0]-30, pointEnd[1]+15)
  ctx.lineWidth = 2;
  ctx.strokeStyle = 'rgb(255, 0, 0, 0.5)';
  ctx.stroke();
}

for(let i = 0; i <= pointsArr.length - 1; i++) {
  route(pointsArr[i], pointsArr[i + 1], i);
}
