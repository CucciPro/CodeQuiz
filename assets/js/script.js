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
var userScore = 0;
var totalQ = questions.length;
var correct = "";
var userScore = 0;
var answerVis = document.getElementById("buttons");
var headerVis = document.getElementById("header");
var quizVis = document.getElementById("quiz");
var highscoreVis = document.getElementById("highscore");
var completeVis = document.getElementById("complete");
var alertVis = document.getElementById("alert");

function showAnswers() {
    if (answerVis.style.visibility === "hidden") {
            answerVis.style.visibility = "visible";
          } else {
            answerVis.style.visibility = "visible";
          } 
};
function hideAnswers() {
    if (answerVis.style.visibility === "visible") {
            answerVis.style.visibility = "hidden";
          } else {
            answerVis.style.visibility = "hidden";
          } 
};

function showHeader() {
    if (headerVis.style.visibility === "hidden") {
            headerVis.style.visibility = "visible";
          } else {
            headerVis.style.visibility = "visible";
          } 
};

function hideHeader() {
    if (headerVis.style.visibility === "visible") {
            headerVis.style.visibility = "hidden";
          } else {
            headerVis.style.visibility = "hidden";
          } 
};

function showQuiz() {
    if (quizVis.style.visibility === "hidden") {
            quizVis.style.visibility = "visible";
          } else {
            quizVis.style.visibility = "visible";
          } 
};

function hideQuiz() {
    if (quizVis.style.visibility === "visible") {
            quizVis.style.visibility = "hidden";
          } else {
            quizVis.style.visibility = "hidden";
          } 
};

function showHighscore() {
    if (highscoreVis.style.visibility === "hidden") {
            highscoreVis.style.visibility = "visible";
          } else {
            highscoreVis.style.visibility = "visible";
          } 
};

function hideHighscore() {
    if (highscoreVis.style.visibility === "visible") {
            highscoreVis.style.visibility = "hidden";
          } else {
            highscoreVis.style.visibility = "hidden";
          } 
};

function showComplete() {
    if (completeVis.style.visibility === "hidden") {
            completeVis.style.visibility = "visible";
          } else {
            completeVis.style.visibility = "visible";
          } 
};

function hideComplete() {
    if (completeVis.style.visibility === "visible") {
            completeVis.style.visibility = "hidden";
          } else {
            completeVis.style.visibility = "hidden";
          } 
};

function showAlert() {
    if (alertVis.style.visibility === "hidden") {
            alertVis.style.visibility = "visible";
          } else {
            alertVis.style.visibility = "visible";
          } 
};

function hideAlert() {
    if (alertVis.style.visibility === "visible") {
            alertVis.style.visibility = "hidden";
          } else {
            alertVis.style.visibility = "hidden";
          } 
};

function start() {
    currentQ = 0;
    timer = 60;
    showQuiz();
    hideAlert();
    showHeader();
    hideHighscore();
    hideAnswers();
    hideComplete();
    document.getElementById("question").innerHTML = "<p>Click the button below to begin!</p></br><button id='button'>Start Quiz!</button>";
    document.getElementById("button").addEventListener("click", timerStart);
    document.getElementById("button").addEventListener("click", getQuiz);
    document.getElementById("button").addEventListener("click", showAnswers);
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
    } else {
        correct = "Wrong!";
        timer -= 10;
    }
    currentQ++;
    document.getElementById("alert").innerHTML = correct;
    showAlert();
    return getQuiz();
};

function timerStart() {
    var time = function() {
        document.getElementById("count").innerText = timer;
        timer--;
        if (timer === 0) {
            document.getElementById("alert").innerHTML = "<p>Times Up!</p>";
            clearInterval(counter);
        }
        else if (currentQ === totalQ) {
            userScore = timer;
            complete();
            hideQuiz();
            hideAnswers();
            clearInterval(counter);
        }
    };

    if (timer === 60) {
        var counter = setInterval(time, 1000);
    } 
};

function complete() {
    showComplete();
    hideHighscore();
    hideAlert();
    document.getElementById("message").innerHTML = "<h3>All done!</h3>";
    document.getElementById("score").innerHTML = "<p>Your final score is " + userScore+ "</p><br/>";
    document.getElementById("section").innerHTML = "<p>Enter initials: <input type='text' id='text1'></input><button id='submit'>Submit</button> </p>";
    document.getElementById("submit").addEventListener("click", highScore);

};

function highScore (){
    hideHeader();
    hideComplete();
    showHighscore();
    hideQuiz();

    var username = document.getElementById("text1").value;

    var scoreInfo = {
        scores: timer,
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

function viewHighscore() {
    hideHeader();
    hideComplete();
    showHighscore();
    hideQuiz();

    document.getElementById('disp').textContent = oList;

    document.getElementById('back').addEventListener("click", start);
    document.getElementById('clear').addEventListener("click", clearHS);
}

function clearHS() {
    localStorage.clear();
    score = [];
    document.getElementById('disp').textContent = "";
    start();
};


start();
document.getElementById("viewHS").addEventListener("click", viewHighscore);
