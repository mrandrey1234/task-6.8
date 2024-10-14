const trafficLightEl = document.querySelector('#trafficLight1');
const trafficLightE2 = document.querySelector('#trafficLight2');
const trafficLightE3 = document.querySelector('#trafficLight3');
const colors = ['green', 'yellow', 'red'];

let currentColorIndex = 0;

function changeColor() {

    trafficLightEl.style.background = 'black';
    trafficLightE2.style.background = 'black';
    trafficLightE3.style.background = 'black';

    if (currentColorIndex === 0) {
        trafficLightEl.style.background = 'green';
    } else if (currentColorIndex === 1) {
        trafficLightE2.style.background = 'yellow';
    } else if (currentColorIndex === 2) {
        trafficLightE3.style.background = 'red';
    }

    currentColorIndex++;
    if (currentColorIndex === colors.length) {
        currentColorIndex = 0;
    }
}

trafficLightEl.addEventListener('click', changeColor);
trafficLightE2.addEventListener('click', changeColor);
trafficLightE3.addEventListener('click', changeColor);
