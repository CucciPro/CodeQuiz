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
            complete();
            clearInterval(counter);
        }
    };

    if (timer === 60) {
        var counter = setInterval(time, 1000);
    } 
};

function showAnswers() {
    var answerVis = document.getElementById("buttons");

    if (answerVis.style.visibility === "hidden") {
            answerVis.style.visibility = "visible";
          } else {
            answerVis.style.visibility = "visible";
          } 
};

function hideHeader() {
    var headerVis = document.getElementById("header");
    
    if (headerVis.style.visibility === "visible") {
            headerVis.style.visibility = "hidden";
          } else {
            headerVis.style.visibility = "hidden";
          } 
};

function hideQuiz() {
    var quizVis = document.getElementById("quiz");
    
    if (quizVis.style.visibility === "visible") {
            quizVis.style.visibility = "hidden";
          } else {
            quizVis.style.visibility = "hidden";
          } 
};

function showHighscore() {
    var highscoreVis = document.getElementById("highscore");

    if (highscoreVis.style.visibility === "hidden") {
            highscoreVis.style.visibility = "visible";
          } else {
            highscoreVis.style.visibility = "visible";
          } 
};


function complete() {
    document.getElementById("question").innerHTML = "<h3>All done!</h3>";
    document.getElementById("answers").innerHTML = "<p>Your final score is " + userScore + "</p><br/>";
    document.getElementById("alert").innerHTML = "<p>Enter initials: <input type='text' id='text1'></input><button id='submit'>Submit</button> </p>";
    document.getElementById("submit").addEventListener("click", highScore);

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
    hideQuiz();
    hideHeader();
    showHighscore();

    var username = document.getElementById("text1").value;

    var scoreInfo = {
        scores: userScore,
        name: username
    };

    score.push(scoreInfo);

    localStorage.setItem("score", JSON.stringify(score));

    if (score.length > 0) {
        storedScores = JSON.parse(localStorage.getItem("score"));
   }

    document.getElementById('disp').textContent = "";

    var oList = document.createElement("ol");
    for (i = 0; i < score.length; i++) {
        var list = document.createElement("li");
        list.textContent = score[i].name + " - " + score[i].scores;
        oList.appendChild(list);
        document.getElementById('disp').appendChild(oList);
    };

    document.getElementById('back').addEventListener("click", start);
    document.getElementById('clear').addEventListener("click", clearHS);


};

function clearHS() {
    localStorage.clear();
    scores = [];
    start();
};


start();
