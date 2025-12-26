const quizData = [ {
    question: "Random question 1?",

    options: ["Option A", "Option B", "Option C", "Option D"],

    answer: 2},

    {question: "Random question 2?",

    options: ["Option A", "Option B", "Option C", "Option D"],

    answer: 0},

    {question: "Random question 3?",
    
    options: ["Option A", "Option B", "Option C", "Option D"],

    answer: 3},

    {question: "Random question 4?",

    options: ["Option A", "Option B", "Option C", "Option D"],

    answer: 1},

    {question: "Random question 5?",
    
    options: ["Option A", "Option B", "Option C", "Option D"],

    answer: 2}
];

const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-buttons');
const nextButton = document.getElementById('next-button');
const scoreContainer = document.getElementById('score-container');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-button');

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {

    const currentQuestion = quizData[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;

    optionsContainer.innerHTML = '';    

    currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optionButton);
    });

    nextButton.style.display = 'none';
}

function handleAnswerSelection(selectedIndex) {
    const currentQuestion = quizData[currentQuestionIndex];
    Array.from(optionsContainer.children).forEach((button, index) => {
        button.disabled = true;
        if (index === currentQuestion.answer) {
            button.style.backgroundColor = 'green';
        } else {
            button.style.backgroundColor = 'red';
        }
});
    if (selectedIndex === currentQuestion.answer) {
        score++;
    }
nextButton.style.display = 'block';
}

function selectOption(selectedIndex) {
    handleAnswerSelection(selectedIndex);
}


//function selectOption(selectedIndex) {
//    const currentQuestion = quizData[currentQuestionIndex];
//    if (selectedIndex === currentQuestion.answer) {
//        score++;
 //   }
//    currentQuestionIndex++;
//    if (currentQuestionIndex < quizData.length) {
//        loadQuestion();
 //   } else {
//        showScore();
//    }       
//}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    questionContainer.style.display = 'none';
    scoreContainer.style.display = 'block';
    scoreElement.textContent = `Your score: ${score} out of ${quizData.length}`;
}


nextButton.addEventListener('click', nextQuestion);

restartButton.addEventListener('click', restartQuiz);

const startScreen = document.getElementById('start-screen');
const startButton = document.getElementById('start-button');

startButton.addEventListener('click', startQuiz);

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    startScreen.style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    scoreContainer.style.display = 'none';
    questionContainer.style.display = 'block';
    loadQuestion();
}

loadQuestion();


function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('quiz-container').style.display = 'block';
    questionContainer.style.display = 'block';
    scoreContainer.style.display = 'none';
    loadQuestion();
}

