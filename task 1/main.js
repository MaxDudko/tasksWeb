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


/*
function newPosition (oldTop, oldLeft, width, height) {
    var range = 20; // Тут выставьте свой минимальный диапазон дальности
    var newTop = getRandomInt(0, height);
    var newLeft = getRandomInt(0, width);
    if ( ((oldTop-range)<newTop && (oldTop+range)>newTop) ||
         ((oldLeft-range)<newLeft && (oldLeft+range)>newLeft)) 
       return newPosition (oldTop, oldLeft, width, height);
    else return [newTop, newLeft];
}

  var buttonPosition = newPosition (element.style.top, element.style.left); 
  */
  
