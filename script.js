const quizData = [ {
    question: "What was the name of Walt Disney's first animated short?",

    options: ["Steamboat Willie", "The Barnyard Battle", "The Sorcerer's Apprentice", "The Three Little Pigs"],

    answer: 0},

    {question: "What was the name of the Walt Disney's character before Mickey Mouse?",

    options: ["Mortimer Mouse", "Mickey Mouse", "Donald Duck", "Goofy"],

    answer: 0},

    {question: "What was the name of the rabbit Walt Disney created before Mickey Mouse?",
    
    options: ["Bugs Bunny", "Roger Rabbit", "Oswald the Lucky Rabbit", "Peter Cottontail"],

    answer: 2},

    {question: "What was Walt Disney Studio's first full feature animated film?",

    options: [ "The Barnyard Battle", "Snow White and the Seven Dwarfs", "The Sorcerer's Apprentice", "The Three Little Pigs"],

    answer: 1},

    {question: "What is the name of the animation company that Walt Disney aquired in 2006?",
    
    options: ["Dreamworks", "Nickelodeon", "Pixar", "Universal Studios"],

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

