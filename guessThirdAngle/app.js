const angleOne = document.querySelector("#angleOne");
const angleTwo = document.querySelector("#angleTwo");
const angleThreeGuess = document.querySelector("#angleThreeGuess");
const generate = document.querySelector(".btn-generate");
const check = document.querySelector(".check");
const output = document.querySelector(".output");

let aOne = Math.floor(Math.random() * 180) + 1;
let aTwo = Math.floor(Math.random() * 180) + 1;

while (aOne + aTwo >= 180) {
  if (aOne > aTwo) {
    aOne = Math.floor(Math.random() * 180) + 1;
  } else {
    aTwo = Math.floor(Math.random() * 180) + 1;
  }
}

let aThreeCorrect = 180 - (aOne + aTwo);

generate.addEventListener("click", (e) => {
  e.preventDefault();
  angleOne.setAttribute("value", aOne);
  angleTwo.setAttribute("value", aTwo);
});

check.addEventListener("click", (e) => {
  e.preventDefault();
  let aThree = angleThreeGuess.value;
  if (aThree == aThreeCorrect) {
    output.innerHTML = `<h3>Correct Guess</h3>`;
  } else {
    output.innerHTML = `<h3>Incorrect Guess.</h3>
    <p>The correct answer is ${aThreeCorrect}.</p>`;
  }
});
