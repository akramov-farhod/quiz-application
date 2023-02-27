var startButton = document.getElementById("start-btn");
var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons");
var shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  console.log("The quiz has begun!");
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  nextQuestion();
}

function nextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}
function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    var button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.append(button);
  });
}
function resetState() {
  nextButton.classList.add("hide");
}

function selectAnswer() {}

var questions = [
  {
    question: "What is 2 + 2 ?",
    answers: [
      { text: 4, correct: true },
      { text: 77, correct: false },
    ],
  },
];
