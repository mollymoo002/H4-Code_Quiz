var scoreEl = document.getElementById("score_display");
var initialDisEl = document.getElementById("initial_display");

// gets the initials and scores saved locally and displays them in a table format on the scores.html page
function showScores() {
    var initialLocal = localStorage.getItem("initials");
    var scoreLocal = localStorage.getItem("score");
    scoreEl.textContent = scoreLocal;
    initialDisEl.textContent = initialLocal;
}
showScores();