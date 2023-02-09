const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector('button[type="submit"]');
const output = document.querySelector("#output");

const correctAnswers = ["90°", "right angled"];

function calculateScore() {
  let score = 0;
  let index = 0;
  const formResults = new FormData(quizForm);
  for (let value of formResults.values()) {
    if(value == correctAnswers[index]){
        score++;
    }
    index++;
  }
  console.log(score);
}

submitAnswerBtn.addEventListener("click", (event) => {
  event.preventDefault();
  calculateScore();
});
