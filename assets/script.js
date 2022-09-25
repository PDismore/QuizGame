var startButton = document.getElementById('start-button');
var startWindow = document.getElementById('start-window');
var quizContents = document.getElementById('quiz-content');
var questionContainer = document.getElementById('question-window');
const currentScore = document.getElementById('score');
const nextBtn = document.getElementById('next')
var currentQuestion = 0;
var score = 0;

nextBtn.addEventListener("click", next)
var questionArray = [
    
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
    var timeLeft = 60;
    var timer = setInterval(function(){
        timeLeft--;
        document.getElementById("count").textContent= timeLeft
        if(timeLeft <=0)
            clearInterval(timer);
    },1000);
    startWindow.classList.add('hide');
    quizContents.classList.remove('hide');
    console.log('started');



    currentQuestion =0;


    // // Function that will cycle through the questions in questionArray variable
    function showQuestions(q){

        // shows the question from the array
        var titleDiv = document.getElementById('title');
        titleDiv.textContent= q[0].question;
        
        // shows the answers for the question from array
        var ans = document.querySelectorAll('.answers');
        // console.log(ans);
        console.log(q);
        ans.forEach(function(element, index){
            element.textContent = q[0].answers[index];
            element.addEventListener('click', function(){
                if(q[q.length-1].correctAnswer==index){
                    console.log('correct answer');
                    score++;
                    console.log(score);
                    currentScore.innerHTML=score;
                } else{
                    score--;
                    console.log('wrong answer');
                    console.log(score);
                    currentScore.innerHTML= score;
                }
            }
            );
        });
    }
    showQuestions(questionArray);



};
console.log(score);




