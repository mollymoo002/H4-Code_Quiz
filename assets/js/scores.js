var liEl = document.getElementById("score_display");
var initialDisEl = document.getElementById("initial_display");

function showScores() {
    var initialLocal = localStorage.getItem("initials");
    var scoreLocal = localStorage.getItem("score");
    liEl.textContent = scoreLocal;
    initialDisEl.textContent = initialLocal;
}
showScores();