var leaderboardBtn = document.getElementById("leaderboardBtn");
var leaderboardSpoiler = document.getElementById("leaderboardSpoiler");
var startBtn = document.getElementById("startBtn");
var tryAgainBtn = document.getElementById("tryAgainBtn");
var leaderboard = document.getElementById("leaderboardWrap");
var landingText = document.getElementById("landingText");
var quiz = document.getElementById("quizContent");
var questions = [
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

console.log(questions);

leaderboardBtn.addEventListener("click", () => {
  leaderboard.classList.remove("hide");
});

leaderboardSpoiler.addEventListener("click", () => {
  leaderboard.classList.add("hide");
});

startBtn.addEventListener("click", () => {
  landingText.classList.add("hide");
  startBtn.classList.add("hide");
  tryAgainBtn.classList.remove("hide");
  quiz.classList.remove("hide");
});

tryAgainBtn.addEventListener("click", () => {
  var areYouSure = confirm(
    "Are you sure you want to restart your Quiz?\nYour current progress will NOT be saved."
  );
  if (areYouSure === true) {
    document.location.reload();
  }
});
