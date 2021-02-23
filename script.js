let score = 0;
let hiScoreName = "Blu";
let hiScore = 25;
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
    question: "Which of the following is a pokemon from the hoenn region?",
    answers: ["Entei", "Sudowoodo", "Sandshew", "Flygon"],
    correctA: 3,
  },
  {
    question: "Team _____ is blasting off again!",
    answers: ["Galactic", "Aqua", "Players", "Rocket"],
    correctA: 3,
  },
  {
    question: "How old is Ash?",
    answers: ["12", "At least 20?", "Hasn't he been 10 since 1997?", "Old enough?"],
    correctA: 2,
  },
  {
    question: "What were pokemon originally called?",
    answers: ["Duel Monsters", "Pocket Monsters", "Gremlins", "Digimon"],
    correctA: 1,
  },
];
let ranks = [
  {
    ranking: "Magikarp",
    desc: "You're as knowledgeable as a Magikarp is useful. But maybe one day, you'll evolve into a Gyarados.",
    img: "./assets/magikarp.png"
  },
  {
    ranking: "Ash",
    desc: "All those hours catching caterpies is starting to pay off. You're a late bloomer, but you'll get there. Just hold out till season 20 ;) .",
    img: "./assets/ashderp.png"
  },
  {
    ranking: "Red",
    desc: "Should come down from that mountain. Does your mom know what you've been up to?",
    img: "./assets/red.png"
  }
];
let currentQuestionIndex = 0
$("#score").text("Score: " + score)

$("#startButton").on("click", function (event) {
  timer();
  quiz();
});

function timer() {
  var timeInterval = setInterval(function () {
    $("#timer").text(timeLeft + " seconds remaining");
    timeLeft--;
    window.timeLeft
    
    if (timeLeft === 50) {
      console.log("60 secs left")
    }
    else if (timeLeft === 45){
      console.log("45 secs left")
    }
    else if (timeLeft === 30){
      console.log("30 secs left")
    }
    else if (timeLeft === 15){
      console.log("15 secs left")
    }
    else if (timeLeft <= 0) {
      $("#timer").text("No Bonus");
      console.log("no bonus")
      clearInterval(timeInterval);
    }
  }, 1000);
}

function quiz() {
  currentQuestionIndex = 0
  score = 0
  $("#hiScore").text(hiScore)
  $("#hiScoreName").text(hiScoreName)
  $("#jumbo").addClass("disdiv")
  $(".busy").removeClass("disdiv")
  console.log("fds");
  firstQuestion()
  
}

function firstQuestion() {
  if (currentQuestionIndex === 6){
    quizOver(score)
  }
  console.log(questions[currentQuestionIndex].question);
  console.log(questions[currentQuestionIndex].answers);
  const onQuestion = questions[currentQuestionIndex];
  $("#question").text(onQuestion.question)
  $("#firstChoice").text("A. " + onQuestion.answers[0])
  $("#secondChoice").text("B. " + onQuestion.answers[1])
  $("#thirdChoice").text("C. " + onQuestion.answers[2])
  $("#fourthChoice").text("D. " + onQuestion.answers[3])
  
}


$("#answerBtn").on("click", function(event){
  let chosen = document.getElementsByName("option");
  if(chosen[0].checked)
  {
    answerCheck(0, score, timeLeft)
    
  }
  else if( chosen[1].checked)
  {
    answerCheck(1, score, timeLeft)
  }
  else if( chosen[2].checked)
  {
    answerCheck(2, score, timeLeft)
  }
  else if( chosen[3].checked)
  {
    answerCheck(3, score, timeLeft)
  }
  
  document.querySelector("input[name='option']:checked").checked = false;
  currentQuestionIndex = currentQuestionIndex + 1
  firstQuestion()
})

function answerCheck(x, s, t){
  console.log("you answered " + questions[currentQuestionIndex].answers[x])
  if (x === questions[currentQuestionIndex].correctA){
    console.log("Correct")
    score = s + 10
    timeLeft = t + 5
    $("#score").text("Score: " + score)
    console.log(score)
  }
  else  {
    console.log("wrong")
    score = s - 5
    timeLeft = t - 5
    $("#score").text("Score: " + score)
  }
}

function quizOver(x) {
  console.log("Time bonus: " + timeLeft + " points!")
  score = x + timeLeft
  timeLeft = 0
  let initials = prompt("You scored:" + score + " points. Enter your initials");
  console.log(initials + ": " + score);

  $(".over").removeClass("disdiv")
  $(".busy").addClass("disdiv")
  $("#finalscore").text("You scored " + score)
  if(score < 40){
    $("#card-Img").attr("src", ranks[0].img)
    $("#card-Title").text(ranks[0].ranking)
    $("#card-Desc").text(ranks[0].desc)
  }
  else if(score >= 41 && score <= 100){
    $("#card-Img").attr("src", ranks[1].img)
    $("#card-Title").text( ranks[1].ranking)
    $("#card-Desc").text( ranks[1].desc)
  }
  else if(score >= 101){
    $("#card-Img").attr("src", ranks[2].img)
    $("#card-Title").text( ranks[2].ranking)
    $("#card-Desc").text(ranks[2].desc)
  }
  newHigh(initials, score, hiScore)
}

$("#again").click(function() {
  currentQuestionIndex= 0
  score = 0
  timeLeft = 60

  $("#score").text(score),
  $(".over").addClass("disdiv"),
  $(".busy").removeClass("disdiv"),
  
  quiz()
  timer()
})
function newHigh(x, y, z){
  if (y > z){
    hiScore = y,
    hiScoreName = x
  }
  

}