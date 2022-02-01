//global variables
var headerSelect = document.getElementById("question");
var choiceSelect = document.getElementById("choices");
var subHead = document.getElementById("subHeading");
var timeEl = document.getElementById("time");
var startEl = document.getElementById("startBtn");
var feedbackEl = document.getElementById("feedback");
var initialRequest = document.getElementById("initials");
var initialResultEl = document.getElementById("initialInput");
var saveBtnEl = document.getElementById("saveBtn");
var containerEl = document.getElementById("result");

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
    answer: "parentheses"
  },
  {
    quote: "Arrays in JavaScript can be used to store _____.:",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above",],
    answer: "all of the above"
  },
  {
    quote: "string values must be enclosed within ______ when being assigned to variables.:",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes"
  },
  {
    quote: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    answer: "console.log"
  },
  
];

var scoreArray = [];

//  sets the timer at the top left of the screen and counts down from 60. It stops when the time reaches 0 or all questions are answered
function setTime() {
    var timerInterval = setInterval(function () {
      secondsLeft--;
      timeEl.textContent = "Time left in quiz: " + secondsLeft;

      if (secondsLeft <= 0) {
        clearInterval(timerInterval);
        endQuiz();
      }
      if (questionIndex === questions.length) {
        clearInterval(timerInterval);
        endQuiz();
      }
    }, 1000);
  }

  // Adds the choices to the button we created and displays them to the web page
function showQuestion() {
    document.getElementById("intro").setAttribute("class", "hide");
    var renderedQuestion = questions[questionIndex];
    headerSelect.textContent = renderedQuestion.quote;
    // emptying the choice element
    choiceSelect.innerHTML = "";
    //loop through choices
    renderedQuestion.choices.forEach(function (choice, index) {
        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("class", "btn-info");
        choiceBtn.setAttribute("value", choice);
        choiceBtn.textContent = index + 1 + ". " + choice;
        choiceBtn.onclick = checkAnswer;
        choiceSelect.appendChild(choiceBtn);
    })
}

// Checks what the user clicked and responds right or wrong depending on the answer and then goes to the next question
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

// this ends the quiz and prints the final score to the console. It also asks the user for their initials to save their score locally
function endQuiz() {
  headerSelect.textContent = "All Done!";
  subHead.textContent = "Your final score is: " + secondsLeft;
  localStorage.setItem("score", secondsLeft);
  initialRequest.textContent = "Please put in your initials to save your score:";
  initialResultEl.classList.remove("hide");
  saveBtnEl.classList.remove("hide");
}

// saves the score and initials of the user locally
function saveLocal(event) {
  event.preventDefault();
  var saveBtnEl = event.target;
  var userInput = initialResultEl.value;
  console.log(userInput)
  localStorage.setItem("initials", userInput);
  // if (localStorage.getItem("initials") !== null) {
    
  // }
}


// event listener to start button to run the showQuestion function
startEl.addEventListener("click", showQuestion);
// event listener to start button to run the timer
startEl.addEventListener("click", setTime);
// event listener to save button to save the intials locally
containerEl.addEventListener("click", saveLocal);