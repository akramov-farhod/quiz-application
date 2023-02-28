var leaderboardBtn = document.getElementById("leaderboardBtn");
var leaderboardSpoiler = document.getElementById("leaderboardSpoiler");
var leaderboard = document.getElementById("leaderboardWrap");

leaderboardBtn.addEventListener("click", () => {
  leaderboard.classList.remove("hide");
});

leaderboardSpoiler.addEventListener("click", () => {
  leaderboard.classList.add("hide");
});
