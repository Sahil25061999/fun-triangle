const angle1 = document.querySelector('#angle-1');
const angle2 = document.querySelector('#angle-2');
const angle3 = document.querySelector('#angle-3');

const button = document.querySelector('.btn-calculate-angle');
const displayResult = document.querySelector('.container-display-angle');

button.addEventListener('click', () => {
  displayResult.style.display = 'block';
  if (angle1.value > 0 && angle2.value > 0 && angle3.value > 0) {
    calculateAngle(
      parseInt(angle1.value),
      parseInt(angle2.value),
      parseInt(angle3.value)
    );
  } else {
    displayMessage('Enter number greater than zero');
  }
});

function calculateAngle(a, b, c) {
  if (a + b + c == 180) {
    displayMessage('It is a triangle.');
  } else {
    displayMessage('Ooops it is not a triangle.');
  }
}

function displayMessage(message) {
  displayResult.style.display = 'block';
  displayResult.innerText = message;
}
