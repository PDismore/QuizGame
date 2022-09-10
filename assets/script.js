var startButton = document.getElementById('start-button');
var startWindow = document.getElementById('start-window');
var quizContents = document.getElementById('quiz-content')
var questionContainer = document.getElementById('question-window')

startButton.addEventListener('click', startGame);



function startGame(){

    console.log('started');
    startWindow.classList.add('hide');
    quizContents, questionContainer.classList.add('show');
    console.log(questionContainer)


}

function nextQuestion(){

}

function selectAnswer(){

}