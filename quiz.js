const button = document.querySelector('.btn-quiz');

const quizForm = document.querySelector('.form');

const displayContainer = document.querySelector('.container-display-quiz');

const answers = [45, 'Triangle having two sides equal', 'Right angle', 60];

button.addEventListener('click', () => {
  displayContainer.style.display = 'block';
  let score = 0;
  let index = 0;
  let formInput = new FormData(quizForm);
  for (let value of formInput.values()) {
    if (value == answers[index]) {
      score += 1;
    }
    index += 1;
  }
  displayContainer.innerText = 'Your score is ' + score;
});
