/*

# Question Game

## Instructions

* Starting from a blank HTML file, create an array with 10 question objects. Each object in the array should be structured as follows: 

  `{ q: "QUESTION", a: "ANSWER" }`

* Check the user's answer against the correct answer, and provide them with an alert telling them if they are right or wrong.
*/

var questions = [
    {q: "what year is it 1?", a:"20201", b:"20191", c:"20181", correct:"20171"},
    {q: "what year is it 2?", correct:"20202", b:"20192", c:"20182", d:"20172"},
    {q: "what year is it? 3", acorrect:"2020", b:"20193", c:"20183", d:"20173"}
]


var button = document.getElementById("nextBtn")
var i = 0
button.addEventListener("click", function(){

var question = document.getElementById("question")
question.innerText = questions[i].q


var label = document.getElementById("label1")
label.innerText = questions[i].a

var label = document.getElementById("label2")
label.innerText = questions[i].b

var label = document.getElementById("label3")
label.innerText = questions[i].c

var label = document.getElementById("label4")
label.innerText = questions[i].d

i++
var answer = document.getElementById("answer1")
answer.value = label.innerText = questions[2].a

answer.addEventListener("click", function(){
    console.log(event)
    var chosenAnswer = event.target.value

    if(chosenAnswer == true){
        //do something
    } else {
        // do something else
    }
})
})

