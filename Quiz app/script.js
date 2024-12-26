const question = [
    {
        question: "Which is largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question: "Which is the smallest containent in the world?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Australia", correct: true },
            { text: "Arctic", correct: false },
            { text: "Africa", correct: false },
        ]
    }, 
    {
        question: "Which is largest desert in the world?",
        answers: [
            { text: "Kalahari", correct: false },
            { text: "Gobi", correct: false },
            { text: "Sahara", correct: false },
            { text: "Antarctica", correct: true },
        ]

    },
    {
        question: "Which is the smallest countary in the world?",
        answers: [
            { text: "Vatican", correct: true },
            { text: "Bhutan", correct: false },
            { text: "Nepal", correct: false },
            { text: "Shri Lanka", correct: false },
        ]

    }
];

const questionElement = document.getElementById('question');
const answerButtons = document.querySelector('.answer-buttons');
const nextBtn = document.querySelector('#next-btn');

let quizIndex = 0;
let score = 0;

function startQuiz () {
    quizIndex = 0;
    score = 0;
    nextBtn.innerHTML = 'Next';
    showQuestion();
} 

function showQuestion() {
    resetState();
    let currentQuestion = question[quizIndex];
    let questionNo = quizIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question
    // console.log(currentQuestion)

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.classList.add("btn");
        button.innerHTML = answer.text;

        // console.log(button.dataset) 

        document.querySelector('.answer-buttons').appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextBtn.style.display = 'none';
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    // console.log(e.target)
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = 'block';
}

function showResult() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${question.length}!`;
    nextBtn.innerHTML = "play Again";
    nextBtn.style.display = "block";
}

function handleNextButton() {
    quizIndex++;
    if (quizIndex < question.length) {
        showQuestion();
    } else {
        showResult();
    }
}

nextBtn.addEventListener('click', () => {
    if (quizIndex < question.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();