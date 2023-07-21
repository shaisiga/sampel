const app = document.querySelector('.app');

const apane = document.querySelector('.a-pane');

const bpane = document.querySelector('.b-pane');

apane.addEventListener('mouseover', (event) => {
  // a. the element is not the right element
  // b. the element is not catched properly
  // c. the injection isn't correct
  // d. wrong event
  // h. syntax bugs (.eventListener wrong syntax, css wrong syntax)
  apane.style.backgroundColor = 'rgb(0, 140, 255)';
  apane.style.borderRadius = '50%';
})