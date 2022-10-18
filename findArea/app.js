const height = document.querySelector('#height');
const base = document.querySelector('#base');

const findArea = document.querySelector('.btn-find-area');
const output = document.querySelector('.output');

findArea.addEventListener('click', (e) => {
  e.preventDefault();
  const area = 0.5 * base.value * height.value;
  output.innerHTML = `The area of the triangle is ${area.toFixed(2)}`;
});
