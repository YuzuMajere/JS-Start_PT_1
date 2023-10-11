const overView = document.querySelector('.overView');
const trafficLight_1 = document.querySelector('#trafficLight_1');
const trafficLight_2 = document.querySelector('#trafficLight_2');
const trafficLight_3 = document.querySelector('#trafficLight_3');


overView.addEventListener('click', changeColor);

function changeColor() {
    // console.log('1');
    if ((trafficLight_1.style.background == ('black')) && (trafficLight_2.style.background == ('black')) && (trafficLight_3.style.background == ('black'))) {
        trafficLight_1.style.background = ('green');
        console.log('2');
    } else if (trafficLight_1.style.background == 'green') {
        trafficLight_1.style.background = ('black');
        trafficLight_3.style.background = ('black');
        trafficLight_2.style.background = ('yellow');
        console.log('3');
    } else if (trafficLight_2.style.background == 'yellow') {
        trafficLight_2.style.background = ('black');
        trafficLight_3.style.background = ('red');
        console.log('4');
    } else if (trafficLight_3.style.background == 'red') {
        trafficLight_3.style.background = ('black');
        trafficLight_1.style.background = ('green');
        console.log('5');
    } else {
        trafficLight_1.style.background = ('black');
        trafficLight_2.style.background = ('black');
        trafficLight_3.style.background = ('black');
    }
}
// function makeGreen() {
//     trafficLight_1.style.background = ('green');
//     trafficLight_1.removeEventListener('click', makeGreen);
//     trafficLight_2.addEventListener('click', makeYellow);
// }

// overView.addEventListener('click', changeColor);

// function makeYellow() {
//     trafficLight_2.style.background = ('yellow');
//     trafficLight_2.removeEventListener('click', makeYellow);
//     trafficLight_3.addEventListener('click', makeRed);
// }

// overView.addEventListener('click', changeColor);

// function makeRed() {
//     trafficLight_3.style.background = ('red');
//     trafficLight_3.removeEventListener('click', makeRed);
//     trafficLight_1.addEventListener('click', makeGreen);
// }

// overView.addEventListener('click', changeColor);
// }