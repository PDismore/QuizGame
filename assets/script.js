var startButton = document.getElementById('start-button');
var startWindow = document.getElementById('start-window');
var quizContents = document.getElementById('quiz-content');
var questionContainer = document.getElementById('question-window');
const currentScore = document.getElementById('score');
var currentQuestion = 0;
var score = 0;
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

    startWindow.classList.add('hide');
    quizContents.classList.remove('hide');
    console.log('started');

    currentQuestion =0;


    // // Function that will cycle through the questions in questionArray variable
    function showQuestions(q){

        // shows the question from the array
        var titleDiv = document.getElementById('title');
        titleDiv.textContent= q[0].question;
        
        // shows the answers for the question
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
            });
            // var scoreCount = document.getElementById('score')
            // scoreCount.textContent=score;
        });
    }
    showQuestions(questionArray);



};
console.log(score);
// Attempt 2 functions


    // function showQuestions(questions, quizContents){
    //     var output = [];
    //     var answers;
    //     console.log(answers);
    //     for(var i=0; i<questions.length; i++){
    //         answers = [];
    //         for(letter in questions[i].answers){
    //             answers.push(
    //                 '<label>'
    //                 + '<input type="radio" name="question'+i+'"value="'+letter+'">'
    //                 + letter + ': '
    //                 + questions[i].answers[letter]
    //                 + '</label>'
    //             );
    //         }
    //         output.push(
    //             '<div class="question">'+questions[i].question+'</div>'
    //             +'<div class="answers">'+answers.join('')+'</div>'
    //         );
    //     }
    //     // quizContainer.innerHtml= output.join('');
    // }
    // showQuestions(questionArray);
    // function showResults(questions, quizContents, resultsContainer){
    //     var answers = quizContents.querySelectorAll('.answers');
    //     var userAnswer = '';
    //     var numCorrect = 0;

    //     for(var i=0; i<questions.length; i++){
    //         userAnswer=(answers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
    //         if(answers===questions[i].correctAnswer){
    //             numCorrect++;
    //             answers[i].style.color='lightgreen';
    //         }
    //         else{
    //             answers[i].style.color='red';
    //         }
    //     }
    //     resultsContainer.innerHtml = numCorrect+'out of ' +questions.length;
    // };
//    submitButton.onclick= function(){
//     showResults(questions);
//    }



