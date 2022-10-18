const angleInput = document.querySelectorAll('input');
const check = document.querySelector('.check');
const output = document.querySelector('.output');

let allAngles = [];

check.addEventListener('click', (e) => {
  e.preventDefault();
  const angleA = Number(angleInput[0].value);
  const angleB = Number(angleInput[1].value);
  const angleC = Number(angleInput[2].value);

  if (angleA > 0 && angleB > 0 && angleC > 0) {
    let sumOfAngles = angleA + angleB + angleC;
    output.innerHTML = `<p>The sum of angles of this triangle is ${sumOfAngles}`;

    if (sumOfAngles === 180) {
      output.innerHTML += '<h3>It is a VALID triangle.</h3>';
    } else {
      output.innerHTML += '<h3>It is an INVALID triangle.</h3>';
    }
  } else {
    output.innerHTML = `<p>The angles entered must be positive.`;
  }
});
