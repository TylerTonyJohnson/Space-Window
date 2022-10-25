// Get reference to our ui element

let elem = document.getElementById("control-panel");

window.onmousemove = (event) => {

  percentX = (event.clientX - window.innerWidth / 2) / window.innerWidth;
  percentY = (event.clientY - window.innerHeight / 2) / window.innerHeight;
  
  elem.style.setProperty('--x', (percentX * -10) + 'px');
  elem.style.setProperty('--y', (percentY * -10) + 'px');
  elem.style.setProperty('--j', (percentX * -3) + 'deg');
  elem.style.setProperty('--i', (percentY * 3) + 'deg');
}

window.onmouseout = (event) => {
  elem.style.setProperty('--x', 0 + 'px');
  elem.style.setProperty('--y', 0 + 'px');
  elem.style.setProperty('--i', 0 + 'deg');
  elem.style.setProperty('--j', 0 + 'deg');
}

elem.onblur = (event) => {
  elem.style.setProperty('--x', 0 + 'px');
  elem.style.setProperty('--y', 0 + 'px');
}