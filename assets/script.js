var startButton = document.getElementById('start-button');
var startWindow = document.getElementById('start-window');
var quizContents = document.getElementById('quiz-content');
var questionContainer = document.getElementById('question-window');
var questionArray = [
    
    {
        question: "Example question",
        answers: ['A', 'B', 'C', 'D'],
        correctAnswer: 1
    },


    {
        question: "Example question",
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
    // Function that will cycle through the questions in questionArray variable
    function showQuestions(q){

        var titleDiv = document.getElementById('title');
        titleDiv.textContent= q[0].question;

        var ans = document.querySelectorAll('.answers');
        console.log(ans);
        console.log(q);
        ans.forEach(function(element, index){
            element.textContent = q[1].answers[index];
            element.addEventListener('click', function(){
                if(q[q.length-1].correctAnswer==index){
                    console.log('correct answer');
                } else{
                    console.log('wrong answer');
                }
            });
        });

    }
    showQuestions(questionArray);



};
console.log(questionArray);
// Attempt 2 functions

// function startQuiz(questions, quizContents, resultsContainer, submitButton){
   
//     // startWindow.classList.add('hide');
//     function showQuestions(questions, quizContents){
//         var output = [];
//         var answers;
//         for(var i=0; i<questions.length; i++){
//             answers = [];
//             for(letter in questions[i].answers){
//                 answers.push(
//                     '<label>'
//                     + '<input type="radio" name="question'+i+'"value="'+letter+'">'
//                     + letter + ': '
//                     + questions[i].answers[letter]
//                     + '</label>'
//                 );
//             }
//             output.push(
//                 '<div class="question">'+questions[i].question+'</div>'
//                 +'<div class="answers">'+answers.join('')+'</div>'
//             );
//         }
//         quizContainer.innerHtml= output.join('');
//     }
//     showQuestions(questions, quizContainer);
//     function showResults(questions, quizContents, resultsContainer){
//         var answers = quizContents.querySelectorAll('.answers');
//         var userAnswer = '';
//         var numCorrect = 0;

//         for(var i=0; i<questions.length; i++){
//             userAnswer=(answers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
//             if(answers===questions[i].correctAnswer){
//                 numCorrect++;
//                 answers[i].style.color='lightgreen';
//             }
//             else{
//                 answers[i].style.color='red';
//             }
//         }
//         resultsContainer.innerHtml = numCorrect+'out of ' +questions.length;
//     }
//    submitButton.onclick= function(){
//     showResults(questions, quizContainer, resultsContainer);
//    }
// }
// startQuiz(questions, quizContainer, resultsContainer, submitButton);


