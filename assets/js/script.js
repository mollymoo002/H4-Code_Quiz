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
var buttonSelect = document.querySelectorAll("button");
var aList = document.getElementById("a");
var bList = document.getElementById("b");
var cList = document.getElementById("c");
var dList = document.getElementById("d");
var fScore = document.getElementById("finalScore");
var timeEl = document.getElementById("time");
var secondsLeft = 60;

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
      }
  
    }, 1000);
  }

setTime();

function endQuiz() {
    headerSelect.textContent = "All Done!"
    fScore.textContent = "Your final score is: "
}



/*
Coding quiz challenge: Try to answer the following code-related questions within the time limit. Keep in mind the incorrect answers will penalize your score time by ten seconds!

Commonly used data types DO NOT include: 1.String 2.booleans 3.alerts 4.numbers

the condition in an if/else statement is enclosed within ______.: 1.quotes 2.curly brackets 3.parentheses 4.square brackets

Arrays in JavaScript can be used to store _____.: 1.numbers and strings 2.other arrays 3.booleans 4.all of the above

string values must be enclosed within _____ when being assigned to variables.: 1.commas 2.curly brackets 3.quotes 4.parentheses

A very useful tool used during development and debugging for printing content to the debugger is: 1.JavaScript 2.terminal/bash 3.fir loops 4.console.log
*/