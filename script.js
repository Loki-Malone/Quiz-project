var question = document.getElementById('question');
var choice = Array.from(document.getElementsByClassName('choice-text'));
console.log(choice);

let currentQuestions = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions =[];

let questions = [
    {
        question:'how many sides are to a square',
        choice1: '3',
        choice2: '4',
        choice3: '6',
        choice4: '2',
        answer: 1
    },
    {
        question:'how many sides are to a square',
        choice1: '3',
        choice2: '4',
        choice3: '6',
        choice4: '2',
        answer: 2
    },
    {
        question:'how many sides are to a square',
        choice1: '3',
        choice2: '4',
        choice3: '6',
        choice4: '2',
        answer: 3
    },
    {
        question:'how many sides are to a square',
        choice1: '3',
        choice2: '4',
        choice3: '6',
        choice4: '2',
        answer: 4
    }
];

var correct_bonus = 10;
var max_questions = 4;

startGame = () => {
    questionCounter = 0;
    score = 0;
    avaiableQuestions = [ ...questions];
    console.log(availableQuestions);
    getNewQustions();
};

getNewQustions = () => {
    questionCounter++;
    var questionIndex = Math.floor(Math.ramdom() * availableQuestions.length);
    currentQuestions = avaiableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        var number = choice.dataset['number'];
        choice.innerText = currentQuestions['choice' + number];
    })

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
    
};