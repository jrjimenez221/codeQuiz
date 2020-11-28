//set global variables
let score = 0
let quizActive = false
console.log("hello")
console.log(5)
let $question1 = $("#question-1")
$('#question1').css('visibility', 'visible');
  

function timer() {
    var timeLeft = 60;

    var timeInterval = setInterval(function() {
      $("#timer").text( timeLeft + " seconds remaining");
      timeLeft--;
      console.log(timeLeft)

      if (timeLeft === 0) {
        $("#timer").text("Time's Up");
        //quizOver();
        clearInterval(timeInterval);
      }

    }, 1000);
}



//begin the quiz
function quiz() {
    //timer()
    console.log("fds")
  //$("#start-button").on("click", function(){
  //    let quizActive = true
  //    $(".correctBtn").on("click", function(event){
  //        $("#score").text(score += 10)
  //    })
  //    
  //    
  //  
  //})
}


$("#startButton").on("click", function(event){
    console.log("startquiz button working")
    timer()
    quiz()
})