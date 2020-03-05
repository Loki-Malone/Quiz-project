var question = document.getElementById('#question');
var choices = Array.from(document.getElementsByClassName('choice-text'));
console.log(choices);

let currentQuestions = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let avaiableQuestions =[];
