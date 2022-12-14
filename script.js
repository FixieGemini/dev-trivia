var questionBox =  document.getElementById('question-box');
var gameBox = document.querySelector('.game-box');
var nameBox = document.getElementById('name-box');
var scoreBox = document.getElementById('score-box');
var playButton = document.querySelector('.play-button');
var submitButton = document.getElementById('submit-button');
var questionsContainer = document.querySelector('.questions-container');
var answer = document.querySelectorAll('.answer');
var rightOrWrong = document.getElementById('rightOrWrong');
var timerElement = document.querySelector('.timer-count');
var totalPoints = document.querySelector('#points');
var nameForm = document.querySelector('#nameEntry');
var nameInput = document.querySelector("#nameInput");
var highestPlayerList = document.querySelector("#place");

var currentQuestion = 0;
var score = 0;

questionBox.style.display = 'none';
nameBox.style.display = 'none';
scoreBox.style.display = 'none';

var questions = [
    {
        question:'What are binary variables that have two possible values of true or false called?', 
        answers:['Strings', 'Objects', 'Booleans', 'Arrays'],
        correctAnswer: 'Booleans'
    },
    {
        question:'A ______ is a sequence of one or more characters that may consist of letters, numbers, or symbols.', 
        answers:['Modulus', 'Function', 'Boolean', 'String'],
        correctAnswer: 'String'
    },
    {
        question:'What is a set of statements that perform a task or calculates a value called?', 
        answers:['Function', 'Array', 'Variable', 'Object'],
        correctAnswer: 'Function'
    },
]

function  displayQuestion(){
    questionsContainer.textContent = questions[currentQuestion].question
    for(let i=0;i<4;i++){
        answer[i].textContent = questions[currentQuestion].answers[i]
    }
}

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount === 0) {
            questionBox.style.display = 'none';
            nameBox.style.display = 'block';
            clearInterval(timer);
        }
        if (nameBox.style.display === 'block') {
            totalPoints.innerHTML = `Your score : ${localStorage.getItem("score")}` 
            clearInterval(timer);
        }
    }, 1000);
}

function checkAnswer(){
    var userEntry = this.textContent
    console.log(userEntry);
    console.log(score);
    if(userEntry === questions[currentQuestion].correctAnswer){
        score += 10;
        localStorage.setItem("score", score);
        rightOrWrong.textContent = 'Correct';
    }else {
        rightOrWrong.textContent = 'Incorrect';
    }
    if(currentQuestion < questions.length - 1){
        currentQuestion++;
        displayQuestion();
    }else {
        questionBox.style.display = 'none';
        nameBox.style.display = 'block';
    }
}

for(let i=0;i<4;i++){
    answer[i].addEventListener("click", checkAnswer)
}

playButton.addEventListener("click", function(){
    questionBox.style.display = 'block';
    gameBox.style.display = 'none';
    timerCount = 10;
    displayQuestion();
    startTimer();
})

submitButton.addEventListener('click', function(){
    questionBox.style.display = 'none';
    gameBox.style.display = 'none';
    nameBox.style.display = 'none';
    scoreBox.style.display = 'block';

    let highestScorePlayerNames = {
    }

    highestPlayerList["name1"] =  nameInput.value;

    localStorage.getItem("name");

    localStorage.setItem("name", highestScorePlayerNames);

    highestPlayerList.innerHTML = localStorage.getItem("name");

})