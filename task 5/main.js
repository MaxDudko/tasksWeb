let element = document.getElementById('element');
let RGB = [255, 0, 0];
let point = 0;
let counter = 0;

let timer = setInterval(() => {
  if(counter == 60) clearInterval(timer);
  counter++;
}, 1000)

let changeColor = window.setInterval(() => {
  if(point == 0) {
    RGB[0] -= 1;
    RGB[1] += 1;
    if(RGB[0] == 0) point = 1;
  }
  if(point == 1) {
    RGB[0] += 1;
    RGB[1] -= 1;
    RGB[2] += 1;
    if(RGB[0] == 255) point = 2;
  }
  element.style.backgroundColor = `rgb(${RGB.join(", ")})`;
  element.innerHTML = `RGB(${RGB.join(", ")})
                       <br />
                       Timer: ${counter}sec`;   
  if(point == 2) clearInterval(changeColor);     
}, 60000/510);



