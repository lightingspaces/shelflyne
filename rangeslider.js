const rangeSlider = document.querySelector('.range-slider');
const rangeValueBar = document.querySelector('#range-value-bar');
const rangeValue = document.querySelector('#range-value');

let isDown = false;

function dragHandler() {
  isDown = !isDown;
  if (!isDown) {
    rangeValue.style.setProperty('opacity', '0');
  } else {
    rangeValue.style.setProperty('opacity', '1');
  }
}

function dragOn(e) {
  if (!isDown) return;
  rangeValueHandler();
}

function rangeValueHandler() {
  rangeValueBar.style.setProperty('width', `${rangeSlider.value}%`);
  rangeValue.style.setProperty('transform', `translateX(-${this.value}%)`);
  rangeValue.innerHTML = rangeSlider.value;
  console.log(rangeSlider.value)
  document.querySelector('#cribg_2').style.setProperty('opacity', rangeSlider.value/100)
  console.log(rangeSlider.value/100)

  rangeValue.style.setProperty('left', `${rangeSlider.value}%`);
  
}

rangeValueHandler();
rangeSlider.addEventListener('mousedown', dragHandler);
rangeSlider.addEventListener('mousemove', dragOn);
rangeSlider.addEventListener('mouseup', dragHandler);
rangeSlider.addEventListener('click', rangeValueHandler);
