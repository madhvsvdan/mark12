const quizForm = document.querySelector('.quiz-form');
const submit = document.querySelector('#submit');
const output = document.querySelector('.output');

const correctAnswers = ['Scalene', 'Yes', 'Yes', '180', 'Hypotenuse'];

function checkAnswers() {
  let score = 0;
  let index = 0;
  const formResults = new FormData(quizForm);
  for (let value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score++;
    }
    index++;
  }
  output.innerHTML = `<p>You scored ${score} points.</p>`;
}

submit.addEventListener('click', checkAnswers);
