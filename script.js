//set global variables
let score = 00;
let quizActive = false;
let timeLeft = 60;
let questions = [
  {
    question: "What was Ash's first pokemon?",
    answers: ["pikachu", "charmander", "squirtle", "tododile"],
    correctA: 0,
  },
  {
    question: "What type is Charmander?",
    answers: ["Water", "Fire", "Dragon", "Fairy"],
    correctA: 1,
  },
  {
    question: "Which of the following is a 3rd gen pokemon",
    answers: ["Entei", "Sudowoodo", "Sandshew", "Flygon"],
    correctA: 3,
  },
];
let currentQuestionIndex = 0


function timer() {
  var timeInterval = setInterval(function () {
    $("#timer").text(timeLeft + " seconds remaining");
    timeLeft--;
    console.log(timeLeft);

    if (timeLeft === 0) {
      $("#timer").text("Time's Up");
      quizOver();
      clearInterval(timeInterval);
    }
  }, 1000);
}
function quizOver() {
  let initials = prompt("Enter your initials");
  console.log(initials + ": " + score);
}

//begin the quiz
function quiz() {
  console.log("fds");
  firstQuestion()
}

function firstQuestion() {
  
  const onQuestion = questions[currentQuestionIndex];
  $("#question").text(onQuestion.question)
  $("#firstChoice").text("1. " + onQuestion.answers[0])
  $("#secondChoice").text("2. " + onQuestion.answers[1])
  $("#thirdChoice").text("3. " + onQuestion.answers[2])
  $("#fourthChoice").text("4. " + onQuestion.answers[3])
}


$("#answerBtn").on("click", function(event){
  currentQuestionIndex = currentQuestionIndex + 1
  // if (questions[currentQuestionIndex].correctA =  {

  // })
  document.querySelector("input[name='option']:checked").checked = false;
  firstQuestion()
})



$("#startButton").on("click", function (event) {
  timer();
  quiz();
});

