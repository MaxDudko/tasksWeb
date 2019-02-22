let container = document.getElementById('container');
let element = document.getElementById('element');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function changePosition(e, element) {
  if(Math.abs(e.clientX - (element.offsetLeft + element.offsetWidth / 2)) < 100 || Math.abs(e.clientY - (element.offsetTop + element.offsetHeght / 2)) < 100) {
  element.style.left = getRandomInt(100, container.clientWidth - element.offsetLeft)+"px";
  element.style.top = getRandomInt(100, container.clientHeight - element.offsetTop)+"px";
  element.style.transition = '0.1s';
 }
}

container.onmousemove = (e) => { 
  
    changePosition(e, element); 
  
};
  
