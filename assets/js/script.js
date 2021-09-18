/*
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
*/

var headerSelect = document.getElementById("question");
var choiceSelect = document.getElementById("choices");
var subHead = document.getElementById("subHeading");
var timeEl = document.getElementById("time");
var startEl = document.getElementById("startBtn");
var feedbackEl = document.getElementById("feedback");

var secondsLeft = 60;

// variables to manipulate state
var questionIndex = 0;
var questions = [
  {
    quote: "Commonly used data types DO NOT include:",
    choices: ["String", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    quote: "the condition in an if/else statement is enclosed within ______.:",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets",],
    answer: "curly brackets"
  },
  {
    quote: "Arrays in JavaScript can be used to store _____.:",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above",],
    answer: "all of the above"
  },
  {
    quote: "string values must be enclosed within ______ when being assigned to variables.:",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "parentheses"
  },
  {
    quote: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    answer: "console.log"
  },
  
];

 
function setTime() {
    var timerInterval = setInterval(function () {
      secondsLeft--;
      timeEl.textContent = "Time left in quiz: " + secondsLeft;

      if (secondsLeft <= 0) {
        clearInterval(timerInterval);
        endQuiz();
      }
    }, 1000);
  }

function showQuestion() {
    document.getElementById("intro").setAttribute("class", "hide");
    var renderedQuestion = questions[questionIndex];
    headerSelect.textContent = renderedQuestion.quote;
    // emptying the choice element
    choiceSelect.innerHTML = "";
    //loop through choices
    renderedQuestion.choices.forEach(function (choice, index) {
        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("class", "btn");
        choiceBtn.setAttribute("value", choice);
        choiceBtn.textContent = index + 1 + ". " + choice;
        choiceBtn.onclick = checkAnswer;
        choiceSelect.appendChild(choiceBtn);
    })
}

function checkAnswer() {
    if (this.value !== questions[questionIndex].answer) {
      secondsLeft -= 5;
      feedbackEl.textContent = "I'm sorry, that's incorrect";
    } else {
      feedbackEl.textContent = "That is correct!";
    }
    feedbackEl.setAttribute("class","fb");
    setTimeout(function(){ feedbackEl.setAttribute("class", "fb hide"); }, 1500);
    questionIndex++;
    if (questionIndex === questions.length) {
      endQuiz();
    } else {
      showQuestion();
    }
}


function endQuiz() {
  headerSelect.textContent = "All Done!";
  subHead.textContent = "Your final score is: " + secondsLeft;
}

startEl.addEventListener("click", showQuestion);
startEl.addEventListener("click", setTime);