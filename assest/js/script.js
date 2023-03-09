var quizArray;

var apiURL =
  "https://the-trivia-api.com/api/questions?categories=film_and_tv&limit=10&difficulty=medium";
var apiCall = fetch(apiURL)
  .then((res) => res.json())
  .then((data) => {
    console.log("API Questions");
    console.log(data);
    quizArray = data;
  });

var leaderboardBtn = document.getElementById("leaderboardBtn");
var countdown = document.getElementById("countdown");
var finalScore = document.getElementById("finalScore");
var leaderboardSpoiler = document.getElementById("leaderboardSpoiler");
var leaderboardClear = document.getElementById("leaderboardClear");
var startBtn = document.getElementById("startBtn");
var tryAgainBtn = document.getElementById("tryAgainBtn");
var leaderboard = document.getElementById("leaderboardWrap");
var usersWrap = document.getElementById("usersParent");
var landingText = document.getElementById("landingText");
var quiz = document.getElementById("quizContent");
var questionEl = document.getElementById("currentQuestion");
var answerButtonsEl = document.getElementsByClassName("answer");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var userInputWrap = document.getElementById("userInputWrap");
var userInput = document.getElementById("input");
var userInputBtn = document.getElementById("inputSubmit");
var answerCheck = document.getElementById("footer");
var timer;
var leaderboardIndex = 0;
var leaderboardList = [];
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
var localStorageArray = JSON.parse(localStorage.getItem("usersArray"));
console.log("Local Storage Array");
console.log(localStorageArray);

$(document).ready(function () {
  localStorageArray.forEach(loadLeaderboard);
  leaderboardList = localStorageArray;
});

leaderboardBtn.addEventListener("click", () => {
  leaderboard.classList.remove("hide");
});

leaderboardSpoiler.addEventListener("click", () => {
  leaderboard.classList.add("hide");
});
leaderboardClear.addEventListener("click", () => {
  var clearCheck = confirm("Are you certain about clearing your Leaderboard?");
  console.log(clearCheck);
  if (!clearCheck) {
    return;
  } else {
    location.reload();
    localStorage.clear();
  }
});

function loadQuestion() {
  questionEl.innerText = quizArray[currentIndex].question;
  answer1.innerText = quizArray[currentIndex].incorrectAnswers[0];
  answer2.innerText = quizArray[currentIndex].correctAnswer;
  answer3.innerText = quizArray[currentIndex].incorrectAnswers[1];
  answer4.innerText = quizArray[currentIndex].incorrectAnswers[2];
  if (currentIndex < quizArray.length) {
    currentIndex = currentIndex + 1;
  }
  return;
}

function score() {
  countdown.innerText = currentScore;
  finalScore.innerText = currentScore;
}

function startTimer() {
  currentScore--;
  countdown.innerText = currentScore;

  if (currentScore <= 0) {
    countdown.innerHTML = "Time is up!";
    endOfQuiz();
    clearInterval(timer);
  }
}

startBtn.addEventListener("click", () => {
  timer = setInterval(startTimer, 1000);
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
  leaderboard.classList.remove("hide");
  quiz.classList.add("hide");
  answerCheck.style.backgroundColor = "var(--hue-footer-neutral)";
  answerCheck.innerText = "Quiz";
  score();
  return;
}

answer1.addEventListener("click", () => {
  if (currentIndex >= quizArray.length) {
    clearInterval(timer);
    endOfQuiz();
    return;
  }
  if (!answer1.classList.contains("correct")) {
    currentScore = currentScore - 10;
    countdown.innerText = currentScore;
    answerCheck.style.backgroundColor = "var(--hue-wrong)";
    answerCheck.innerText = "Wrong Answer";
  } else {
    answerCheck.style.backgroundColor = "var(--hue-correct)";
  }
  loadQuestion();
});
answer2.addEventListener("click", () => {
  if (currentIndex >= quizArray.length) {
    clearInterval(timer);
    endOfQuiz();
    return;
  }
  if (!answer2.classList.contains("correct")) {
    currentScore = currentScore - 10;
    countdown.innerText = currentScore;
    answerCheck.style.backgroundColor = "var(--hue-wrong)";
    answerCheck.innerText = "Wrong Answer";
  } else {
    answerCheck.style.backgroundColor = "var(--hue-correct)";
    answerCheck.innerText = "Correct Answer";
  }
  loadQuestion();
});
answer3.addEventListener("click", () => {
  if (currentIndex >= quizArray.length) {
    clearInterval(timer);
    endOfQuiz();
    return;
  }
  if (!answer3.classList.contains("correct")) {
    currentScore = currentScore - 10;
    countdown.innerText = currentScore;
    answerCheck.style.backgroundColor = "var(--hue-wrong)";
    answerCheck.innerText = "Wrong Answer";
  } else {
    answerCheck.style.backgroundColor = "var(--hue-correct)";
    answerCheck.innerText = "Correct Answer";
  }
  loadQuestion();
});
answer4.addEventListener("click", () => {
  if (currentIndex >= quizArray.length) {
    clearInterval(timer);
    endOfQuiz();
    return;
  }
  if (!answer4.classList.contains("correct")) {
    currentScore = currentScore - 10;
    countdown.innerText = currentScore;
    answerCheck.style.backgroundColor = "var(--hue-wrong)";
    answerCheck.innerText = "Wrong Answer";
  } else {
    answerCheck.style.backgroundColor = "var(--hue-correct)";
    answerCheck.innerText = "Correct Answer";
  }
  loadQuestion();
});

function loadLeaderboard(currentItem) {
  var nameDiv = document.createElement("div");
  var scoreDiv = document.createElement("div");
  var hr = document.createElement("hr");
  nameDiv.classList.add("user");
  scoreDiv.classList.add("user");
  usersWrap.append(nameDiv);
  usersWrap.append(scoreDiv);
  usersWrap.append(hr);
  nameDiv.innerText = `Name: ${currentItem.name}`;
  scoreDiv.innerText = `Score: ${currentItem.score}`;
}

function user(name, score) {
  this.name = `${userInput.value}`;
  this.score = `${currentScore}`;
}

userInputBtn.addEventListener("click", () => {
  var newUser = new user();
  leaderboardList.unshift(newUser);
  console.log(leaderboardList);
  // console.log(localStorageArray);
  localStorage.setItem("usersArray", JSON.stringify(leaderboardList));
  alert(`Your Name and Score have been added to the Leaderboard.
  Name: ${userInput.value} 
  Score: ${currentScore}`);
  alert("You will now be redirected back to the very Beginning of the Quiz");
  location.reload();
});
