const startButton = document.getElementById('start-button');
const startWindow = document.getElementById('start-window');
const nextQuestion = document.getElementById('answer-buttons')
const quizContents = document.getElementById('quiz-content');
const questionContainer = document.getElementById('question-window');
const currentScore = document.getElementById('score');
const highScores = document.getElementById('highscores-window');
const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer-buttons');
// variables to allow randomization of question
let shuffledQuestions, currentQuestionIndex
var score = 0;


// Start button event listeners 
startButton.addEventListener('click', startGame);
startButton.addEventListener('click', startTimer);

// Next question after selecting answer
nextQuestion.addEventListener('click',()=>{
    currentQuestionIndex++;
    setNextQuestion()
});

// hides the start window and shows the quiz window
function startGame(){
    // Hides the start window and shows the question window
    startWindow.classList.add('hide');
    quizContents.classList.remove('hide');
    console.log('started');
    shuffledQuestions = questionArray.sort(()=>Math.random()- .5);
    currentQuestionIndex = 0;
    setNextQuestion()
    
};


//brings up the next question randomly from the array of questions
function setNextQuestion (){
    reset();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
};

// Adds the question and answer text and creates buttons for the answers
function showQuestion(question){
    questionElement.innerText=question.question
    question.answers.forEach(answer =>{
        const button = document.createElement('button')
        button.innerText= answer.text
        button.classList.add('btn');
        if(answer.correct){
            button.dataset.correct = answer.correct
        }

        button.addEventListener('click', selectAnswer)
        answerElement.appendChild(button)
    })
};

// Removes previous question content
function reset (){
    while(answerElement.firstChild){
        answerElement.removeChild(answerElement.firstChild)
    }
    
};
// Function that updates the current score by +1 or -1 based on user input
function selectAnswer(event){
    const selection = event.target 
    var correct = selection.dataset.correct
    if(correct){
        score++;
        currentScore.innerHTML=score;
    }else{
        score--;
        currentScore.innerHTML=score;
    };
    if(shuffledQuestions.length > currentQuestionIndex +1){

    }else{
        questionContainer.classList.add('hide');
        highScores.classList.remove('hide');

    };
    
    
    console.log(score);
};


// Timer
function startTimer(){
    var timeLeft = 60;
    var timer = setInterval(function(){
        timeLeft--;
        document.getElementById("count").textContent= timeLeft
        if(timeLeft <=0)
        clearInterval(timer);
    },1000
    );
};

// Array storing the questions for the quiz and their answers
const questionArray = [
    
    {
        question: "Example question",
        answers: [
            {text: 'Test 16', correct:true},
            {text: 'Test 2', correct:false},
            {text: 'Test 6', correct:false},
            {text: 'Test 5', correct:false},
            {text: 'Test 2', correct:false}
        ],

    },


    {
        question: "How many hours did this take to figure out?",
        answers: [
            {text: 'Test 1', correct:true},
            {text: 'Test 25', correct:false}
        ],
 
    },

    {
        question: "Example question2",
        answers: [
            {text: 'Test 12', correct:true},
            {text: 'Test 2', correct:false}
        ],

    },

    {
        question: "Example question3",
        answers: [
            {text: 'Test 1', correct:true},
            {text: 'Test 24', correct:false}
        ],

    },

    {
        question: "Example question4",
        answers: [
            {text: 'Test 14', correct:true},
            {text: 'Test 2', correct:false}
        ],

    },

];