var question = document.getElementById('#question');
var choices = Array.from(document.getElementsByClassName('choice-text'));
console.log(choices);

let currentQuestions = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let avaiableQuestions =[];

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
var max_questions = 3;

startGame = () => {
    questionCounter=0;
    score=0;
    avaiableQuestions =[ ...questions];
    console.log(avaiableQuestions);
    getNewQustions();
}