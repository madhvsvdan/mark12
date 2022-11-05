const sideA = document.querySelector('#sideA');
const sideB = document.querySelector('#sideB');
const check = document.querySelector('.check');
const output = document.querySelector('.output');

check.addEventListener('click', (e) => {
  e.preventDefault();
  const base = sideA.value;
  const perpendicular = sideB.value;
  const hypotenuse = Math.sqrt(base ** 2 + perpendicular ** 2);
  if (base > 0 && perpendicular > 0) {
    output.innerHTML = `<h3>The length of hypotenuse is ${hypotenuse.toFixed(
      2
    )}</h3>`;
  } else {
    output.innerHTML = `<p>The values entered must be positive.`;
  }
});
