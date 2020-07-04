/*

# Question Game

## Instructions

* Starting from a blank HTML file, create an array with 10 question objects. Each object in the array should be structured as follows: 

  `{ q: "QUESTION", a: "ANSWER" }`

* Check the user's answer against the correct answer, and provide them with an alert telling them if they are right or wrong.
*/

var questions = [
    { q: "Commonly used data types do NOT include:", o1: "strings", o2: "booleans", o3: "alerts", o4: "numbers", a: "alerts" },
    { q: "The condition in an if / else statement is enclosed with: _________.", o1: "brackets", o2: "parenthesis", o3: "quotes", o4: "apostrophes", a: "parenthesis" },
    { q: "Arrays in Javascript can be used to store________.", o1: "numbers and strings", o2: "other arrays", o3: "booleans", o4: "all of the above", a: "all of the above" },
    { q: "String values must be enclosed within ________ when being assigned to variables.", o1: "parenthesis", o2: "quotes", o3: "good friends", o4: "all of the above", a: "quotes" },
    { q: "A very useful tool used during the development and debugging for printing content to the debugger is:", o1: "JavaScript", o2: "terminal/bash", o3: "for loops", o4: "console.og", a: "for loops" },
]

var currentQ = 0;
var score = [];
var timer = 60;
var totalQ = questions.length;

var timerStart = function() {
    var time = function() {
        document.getElementById("count").innerText = timer;
        timer--;
        if (timer === 0) {
            document.getElementById("alert").innerHTML = "<p>Times Up!</p>";
            clearInterval(counter);
        }
    };

    if (timer === 60) {
        var counter = setInterval(time, 1000);
    } 
};

var start = function() {
    currentQ = 0;
    timer = 60;
    document.getElementById("start").innerHTML = "<p>Click the button below to begin!</p></br><button id='button'>Start Quiz!</button>";
    document.getElementById("button").addEventListener("click", getQuestions);
    document.getElementById("button").addEventListener("click", timerStart);
    return;
};

var getQuestions = function() {

};

start();
