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
];

var currentQ = 0;
var score = [];
var timer = 60;
var totalQ = questions.length;
var correct = "";
var userScore = 0;

function timerStart() {
    var time = function() {
        document.getElementById("count").innerText = timer;
        timer--;
        if (timer === 0) {
            document.getElementById("alert").innerHTML = "<p>Times Up!</p>";
            clearInterval(counter);
        }
        else if (currentQ === totalQ) {
            document.getElementById("question").innerHTML = "<h3>All done!</h3>";
            document.getElementById("answers").innerHTML = "<p>Your final score is " + userScore + "</p><br/>";
            document.getElementById("alert").innerHTML = "<p>Enter initials: <input type='text' id='text1'></input><button id='submit'>Submit</button> </p>";
            document.getElementById("submit").addEventListener("click", highScore);
            clearInterval(counter);
        }
    };

    if (timer === 60) {
        var counter = setInterval(time, 1000);
    } 
};

function showAnswers() {
    var hide = document.getElementById("buttons");

    if (hide.style.visibility === "hidden") {
            hide.style.visibility = "visible";
          } else {
            hide.style.visibility = "visible";
          } 
};


function start() {
    currentQ = 0;
    timer = 60;
    document.getElementById("question").innerHTML = "<p>Click the button below to begin!</p></br><button id='button'>Start Quiz!</button>";
    document.getElementById("button").addEventListener("click", timerStart);
    document.getElementById("button").addEventListener("click", getQuiz);
    document.getElementById("button").addEventListener("click", showAnswers);
    return;
};

function getQuiz() {

    document.getElementById("question").innerText = questions[currentQ].q;

    document.getElementById("option1").innerText = questions[currentQ].o1;
    document.getElementById("option2").innerText = questions[currentQ].o2;
    document.getElementById("option3").innerText = questions[currentQ].o3;
    document.getElementById("option4").innerText = questions[currentQ].o4;

    document.getElementById("option1").addEventListener("click", checkAnswers);
    document.getElementById("option2").addEventListener("click", checkAnswers);
    document.getElementById("option3").addEventListener("click", checkAnswers);
    document.getElementById("option4").addEventListener("click", checkAnswers);

};

function checkAnswers(e) {

    var selectedOption = e.target;


    if (selectedOption.textContent === questions[currentQ].a) {
        correct = "Correct!"
        userScore += 10;
    } else {
        correct = "Wrong!";
        timer -= 10;
    }
    currentQ++;
    document.getElementById("alert").innerHTML = correct;
    return getQuiz();
};

function highScore (){
    var username = document.getElementById("text1").value;

    score.push([userScore, username]);

    window.localStorage.setItem("score", JSON.stringify(score));

    var storedScores = JSON.parse(window.localStorage.getItem("score"));
        
    document.getElementById('disp').innerHTML= storedScores;
};


start();
