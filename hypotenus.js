const side1 = document.querySelector('#side-1');
const side2 = document.querySelector('#side-2');
const button = document.querySelector('.btn');
const hdisplay = document.querySelector('.container-display-side');

button.addEventListener('click', () => {
  hdisplay.style.display = 'block';
  if (side1.value > 0 && side2.value > 0) {
    let hyp = side1.value * side1.value + side2.value * side2.value;
    hdisplay.innerText = 'hypotenus is ' + hyp;
  } else {
    hdisplay.innerText = 'lenght is not negative';
  }
});
