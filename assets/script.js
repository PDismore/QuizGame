var startButton = document.getElementById('start-button')
var questionContainer = document.getElementById('question-window')

startButton.addEventListener('click', startGame);


function startGame(){
var displaySetting = document.getElementById('start-button')
if(displaySetting=="block"){
    startButton.style.display='none';
}
// document.getElementById('start-button').style.dispaly='none';
console.log('started');
}

function nextQuestion(){

}

function selectAnswer(){

}