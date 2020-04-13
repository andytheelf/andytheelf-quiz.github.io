// Quiz question var
var buttonOne = document.getElementById("btn0");
var buttonTwo = document.getElementById("btn1");
var buttonThree = document.getElementById("btn2");
var buttonFour = document.getElementById("btn3");
var startQuiz = document.getElementById("start-quiz");
var seconds = document.getElementById("countdown");
var quizProgress = document.getElementById("progress");
var gridElement = document.getElementById("gridStyle");
var correctAnwser = document.getElementById("correct");
var wrong = document.getElementById("wrong");
var scores = document.getElementById("score-container");
var initialsEntry = document.getElementById("enter-in");
var saveScoreBtn = document.getElementById("save-score");
var quizVar = document.getElementById("quiz");
var highScores = document.getElementById("highScore")
var scoreFinal;
var restartQ = document.getElementById("restartQuiz");

//Questions Array
var questions = [
  {
    question: "Commonly used data types do not include",
    choiceA: 'strings',
    choiceB: 'booleans',
    choiceC: 'alerts',
    choiceD: 'numbers',
    correctAnswer: '2'
  },
  {
    question: "The condition of an if/else statement is enclosed in..?",
    choiceA: 'quotes',
    choiceB: 'curly braces',
    choiceC: 'parantheses',
    choiceD: 'square brackets',
    correctAnswer: '2'
  },
  {
    question: "Arrays in Javascript can be used to store?",
    choiceA: 'numbers & strings',
    choice: 'other arrays',
    choiceC: 'booleans',
    choiceD: 'All of the Above',
    correctAnswer: '3'
  },

  {
    question: "String Values must be enclosed within __ when being assigned to variables?",
    choiceA: 'parentheses',
    choiceB: 'curly braces',
    choiceC: 'commas',
    choiceD: 'quotes',
    correctAnswer: '3'
  },

  {
    question: "A very useful tool during development and debugging for printing content in the debugger is?",
    choiceA: 'Javascript',
    choiceB: 'terminal bash',
    choiceC: 'for loops',
    choiceD: 'console.log',
    correctAnswer: '3'
  },
];

var lastQuestion = questions.length - 1;
var runningQuestion = 0;
var timer = 0;
var counterTime = 75;
var TIMER;
var score = 0;


//Timer Function
function myStopFunction() {
  clearInterval(TIMER);
}


function startTimer() {

  if (counterTime >= 1 && counterTime < 500) {
    counterTime--;
    TIMER = counterTime;
    countdown.innerHTML = "Timer: " + TIMER;
  } else if (counterTime == 0) {
    showScore();
    counterTime = 666;
  } else {

  }

}

//Funtion question cycle and quiz begin
function presentQuestion() {
  let q = questions[runningQuestion];
  question.innerHTML = "<p>" + q.question + "</p>";
  btn0.innerHTML = q.choiceA;
  btn1.innerHTML = q.choiceB;
  btn2.innerHTML = q.choiceC;
  btn3.innerHTML = q.choiceD;
}

function quizBegin() {
  startQuiz.style.display = "none";
  presentQuestion();
  gridElement.style.display = "grid";
  progressProvide();
  TIMER = setInterval(startTimer, 1000);
}

function progressProvide() {
  for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
    progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
  }
}

//Check answer function
function checkAnswer(btn) {
  if (btn == questions[runningQuestion].correctAnswer) {
    score++;
    answerCorrect();
  } else {
    counterTime--;
    counterTime--;
    counterTime--;
    counterTime--;
    counterTime--;
    counterTime--;
    counterTime--;
    counterTime--;
    counterTime--;
    counterTime--;
    TIMER = counterTime;
    countdown.innerHTML = "Timer: " + TIMER;
    answerWrong();
  }
  count = 0;
  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    presentQuestion();
  } else {
    showScore();
    return;
  }
  return;
}

//Incorrect Answer
function answerWrong() {
  document.getElementById("wrong").style.display = "block";
  document.getElementById("correct").style.display = "none";
}

//Correct Answer
function answerCorrect() {
  document.getElementById("correct").style.display = "block";
  document.getElementById("wrong").style.display = "none";
}

function showScore() {
  //gridElement.style.display = "none";
  document.getElementById("correct").style.display = "none";
  document.getElementById("wrong").style.display = "none";
  document.getElementById("quizTitle").style.display = "none";
  document.getElementById("question").style.display = "none";
  document.getElementById("btn0").style.display = "none";
  document.getElementById("btn1").style.display = "none";
  document.getElementById("btn2").style.display = "none";
  document.getElementById("btn3").style.display = "none";
  document.getElementById("score-container").style.display = "grid";
  scoreFinal = Math.round(100 * score / questions.length);
  scores.innerHTML += "<p>" + scoreFinal + "</p>";
  //console.log(scoreFinal);
  counterTime = 666;
  return false;
}


function populateStorage() {
  var array = ["initials", storeInitials, "score", scoreFinal];
  localStorage.setItem("array", JSON.stringify(array));
  array = JSON.parse(localStorage.getItem("array"));

}

//Reload Quiz 
function reloadQuiz() {
  location.reload();
}

function addScore() {
  alert("okay");
  entryId = localStorage.length + 1;
  localStorage.setItem(entryId, "Initials: " + document.getElementById("initials").value + " Score: " + scoreFinal)
}

//Event Listeners
//saveScoreBtn.addEventListener("click", populateStorage);
startQuiz.addEventListener("click", quizBegin);
//document.getElementById("restartQuiz").addEventListener("click", reloadQuiz {location.reload());

