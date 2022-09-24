var startButton = document.getElementById('start-button');
var startWindow = document.getElementById('start-window');
var quizContents = document.getElementById('quiz-content');
var questionContainer = document.getElementById('question-window');
var questions = [
    {
        question: "Example question",
        answers: {
            a: 'ex1',
            b: 'ex2',
        },
        correctAnswer: 'b'
    },
    {
        question: "Example question",
        answers: {
            a: 'ex1',
            b: 'ex2',
        },
        correctAnswer: 'a'
    }
];

startButton.addEventListener('click', startGame);



function startGame(){

    startWindow.classList.add('hide');
    quizContents, questionContainer.classList.remove('hide');
    console.log(questionContainer);
    console.log('started');


};

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


