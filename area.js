const height = document.querySelector('#height');
const base = document.querySelector('#base');
const button = document.querySelector('.btn');
const Adisplay = document.querySelector('.container-display-area');

button.addEventListener('click', () => {
  Adisplay.style.display = 'block';
  if (height.value > 0 && base.value > 0) {
    let area = (1 / 2) * height.value * base.value;
    Adisplay.innerText = 'Area is ' + area;
  } else {
    Adisplay.innerText = 'lenght is not negative';
  }
});
