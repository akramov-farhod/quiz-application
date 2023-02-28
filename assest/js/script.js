var leaderboardBtn = document.getElementById("leaderboardBtn");
var leaderboardSpoiler = document.getElementById("leaderboardSpoiler");
var startBtn = document.getElementById("startBtn");
var tryAgainBtn = document.getElementById("tryAgainBtn");
var leaderboard = document.getElementById("leaderboardWrap");
var landingText = document.getElementById("landingText");
var quiz = document.getElementById("quizContent");

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
  document.location.reload();
});
