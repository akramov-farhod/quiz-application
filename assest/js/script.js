var quizArray;

var apiURL =
  "https://the-trivia-api.com/api/questions?categories=film_and_tv&limit=10&difficulty=medium";
var apiCall = fetch(apiURL)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    quizArray = data;
  });

var leaderboardBtn = document.getElementById("leaderboardBtn");
var countdown = document.getElementById("countdown");
var finalScore = document.getElementById("finalScore");
var leaderboardSpoiler = document.getElementById("leaderboardSpoiler");
var startBtn = document.getElementById("startBtn");
var tryAgainBtn = document.getElementById("tryAgainBtn");
var leaderboard = document.getElementById("leaderboardWrap");
var landingText = document.getElementById("landingText");
var quiz = document.getElementById("quizContent");
var questionEl = document.getElementById("currentQuestion");
var answerButtonsEl = document.getElementsByClassName("answer");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var userInputWrap = document.getElementById("userInputWrap");
var currentIndex = 0;
var currentScore = 100;
var testQuestions = [
  // question 1
  {
    question: "First question of the array",
    answers: [
      { text: "Incorrect Answer", correct: false },
      { text: "Correct Answer", correct: true },
      { text: "Incorrect Answer", correct: false },
      { text: "Incorrect Answer", correct: false },
    ],
  },
  // question 1
  // question 2
  {
    question: "Second question of the array",
    answers: [
      { text: "Incorrect Answer", correct: false },
      { text: "Correct Answer", correct: true },
      { text: "Incorrect Answer", correct: false },
      { text: "Incorrect Answer", correct: false },
    ],
  },
  // question 2
  // question 3
  {
    question: "Third question of the array",
    answers: [
      { text: "Incorrect Answer", correct: false },
      { text: "Correct Answer", correct: true },
      { text: "Incorrect Answer", correct: false },
      { text: "Incorrect Answer", correct: false },
    ],
  },
  // question 3
  // question 4
  {
    question: "Fourth question of the array",
    answers: [
      { text: "Incorrect Answer", correct: false },
      { text: "Correct Answer", correct: true },
      { text: "Incorrect Answer", correct: false },
      { text: "Incorrect Answer", correct: false },
    ],
  },
  // question 4
  // question 5
  {
    question: "Fifth question of the array",
    answers: [
      { text: "Incorrect Answer", correct: false },
      { text: "Correct Answer", correct: true },
      { text: "Incorrect Answer", correct: false },
      { text: "Incorrect Answer", correct: false },
    ],
  },
  //   question 5
];

leaderboardBtn.addEventListener("click", () => {
  leaderboard.classList.remove("hide");
});

leaderboardSpoiler.addEventListener("click", () => {
  leaderboard.classList.add("hide");
});

function loadQuestion() {
  questionEl.innerText = quizArray[currentIndex].question;
  answer1.innerText = quizArray[currentIndex].incorrectAnswers[0];
  answer2.innerText = quizArray[currentIndex].correctAnswer;
  answer3.innerText = quizArray[currentIndex].incorrectAnswers[1];
  answer4.innerText = quizArray[currentIndex].incorrectAnswers[2];
  console.log(quizArray[0].question);
  if (currentIndex < quizArray.length) {
    currentIndex = currentIndex + 1;
    console.log(currentIndex);
  }
  return;
}

function score() {
  countdown.innerText = currentScore;
  finalScore.innerText = currentScore;
}

startBtn.addEventListener("click", () => {
  landingText.classList.add("hide");
  startBtn.classList.add("hide");
  tryAgainBtn.classList.remove("hide");
  quiz.classList.remove("hide");
  loadQuestion();
});

tryAgainBtn.addEventListener("click", () => {
  var areYouSure = confirm(
    "Are you sure you want to restart your Quiz?\nYour current progress will NOT be saved."
  );
  if (areYouSure === true) {
    document.location.reload();
  }
});

function endOfQuiz() {
  userInputWrap.classList.remove("hide");
  quiz.classList.add("hide");
  score();
}

answer1.addEventListener("click", () => {
  if (currentIndex >= quizArray.length) {
    endOfQuiz();
    return;
  }
  if (!answer1.classList.contains("correct")) {
    currentScore = currentScore - 10;
    countdown.innerText = currentScore;
  }
  loadQuestion();
});
answer2.addEventListener("click", () => {
  if (currentIndex >= quizArray.length) {
    endOfQuiz();
    return;
  }
  if (!answer2.classList.contains("correct")) {
    currentScore = currentScore - 10;
    countdown.innerText = currentScore;
  }
  loadQuestion();
});
answer3.addEventListener("click", () => {
  if (currentIndex >= quizArray.length) {
    endOfQuiz();
    return;
  }
  if (!answer3.classList.contains("correct")) {
    currentScore = currentScore - 10;
    countdown.innerText = currentScore;
  }
  loadQuestion();
});
answer4.addEventListener("click", () => {
  if (currentIndex >= quizArray.length) {
    endOfQuiz();
    return;
  }
  if (!answer4.classList.contains("correct")) {
    currentScore = currentScore - 10;
    countdown.innerText = currentScore;
  }
  loadQuestion();
});
