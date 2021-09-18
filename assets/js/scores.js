var liEl = document.querySelector("li")

function showScores() {
    var scoreLocal = localStorage.getItem("initials");
    liEl.textContent = scoreLocal;
}
showScores();