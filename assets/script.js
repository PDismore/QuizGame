const startButton = document.getElementById('start-button');
const startWindow = document.getElementById('start-window');
const quizContents = document.getElementById('quiz-content');
const questionContainer = document.getElementById('question-window');
const currentScore = document.getElementById('score');
const questionElement = document.getElementById('title');
const answerElement = document.getElementById('next')
let shuffledQuestions, currentQuestionIndex
var score = 0;

// Array storing the questions for the quiz and their answers
const questionArray = [
    
    {
        question: "Example question",
        answers: ['A', 'B', 'C', 'D'],
        correctAnswer: 1
    },


    {
        question: "How many hours did this take to figure out?",
        answers: ['A', 'b', 'c', 'd'],
        correctAnswer: 0
    }

];

startButton.addEventListener('click', startGame);

// hides the start window and shows the quiz window
function startGame(){
    // Timer
    var timeLeft = 60;
    var timer = setInterval(function(){
        timeLeft--;
        document.getElementById("count").textContent= timeLeft
        if(timeLeft <=0)
            clearInterval(timer);
    },1000);
    // Hides the start window and shows the question window
    startWindow.classList.add('hide');
    quizContents.classList.remove('hide');
    console.log('started');
    currentQuestionIndex = 0;
    

};

function setNextQuestion (){
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.textContent=question.question

}

console.log(questionElement)






// Function that will cycle through the questions in questionArray variable
// function showQuestions(q){

//      // shows the question from the array
//      var titleDiv = document.getElementById('title');
//      titleDiv.textContent= q[0].question;
        
//     // shows the answers for the question from array
//     var ans = document.querySelectorAll('.answers');
//      // console.log(ans);
//      console.log(q);
//      ans.forEach(function(element, index){
//          //sets the text from array
//          element.textContent = q[0].answers[index];
//          element.addEventListener('click', function(){

//             // Adds 1 to the score for a correct answer
//              if(q[q.length-1].correctAnswer==index){
//                  console.log('correct answer');
//                  score++;
//                  console.log(score);
//                 currentScore.innerHTML=score;

//                 //Subtracts 1 from the score on a wrong answer
//             } else{
//                  score--;
//                  console.log('wrong answer');
//                 console.log(score);
//                 currentScore.innerHTML= score;
//              }
//         }
//     );
//         });
//     };
//     showQuestions(questionArray);



console.log(score);




