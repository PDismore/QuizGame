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

    function showQuestions(questions, questionContainer){
        var output = [];
        var answers;
        for(var i=0; i<questions.length; i++){
            answers = [];
            for(letter in questions[i].answers){
                answers.push(
                    '<label>'
                    + '<input type="radio" name="question'+i+'"value="'+letter+'">'
                    + letter + ': '
                    + questions[i].answers[letter]
                    + '</label>'
                );
            }
            output.push(
                '<div class="question">'+questions[i].question+'</div>'
                +'<div class="answers">'+answers.join('')+'</div>'
            );
        }
        questionContainer.innerHtml= output.join('');
    }

    showQuestions(questions, questionContainer);



    // quizContents, questionContainer.classList.add('show');
    // console.log(questionContainer)
    console.log('started');


};
