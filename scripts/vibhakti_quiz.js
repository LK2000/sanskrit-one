// vibhakti_quiz.js

const questionText = document.getElementById("question-text");
const optionsForm = document.getElementById("options-form");
const submitBtn = document.getElementById("submit-btn");
const skipBtn = document.getElementById("skip-btn");
const showBtn = document.getElementById("show-btn");
const restartBtn = document.getElementById("restart-btn");

const feedbackBox = document.getElementById("feedback");
const feedbackMessage = document.getElementById("feedback-message");

const scoreCorrect = document.getElementById("score-correct");
const scoreWrong = document.getElementById("score-wrong");
const progress = document.getElementById("progress");

const quizTitle = document.getElementById("quiz-title");
const translateTooltip = document.getElementById("translate");

let shuffledData = [];
let currentQuestionIndex = 0;
let correctCount = 0;
let wrongCount = 0;

function updateQuizTitle() {
  const wordCount = quizData.length;
  quizTitle.textContent = `(${wordCount} words)`;
}

function shuffleArray(array) {
    const arr = array.slice();

    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
}

function loadQuestion() {
    const entry = shuffledData[currentQuestionIndex];

    if (!entry)
    {
        return;
    }

    // Sanskrit sentence
    questionText.textContent = entry.sans;

    // English tooltip
    //questionText.title = entry.en;
    translateTooltip.dataset.tooltip = entry.en;

    const correctAnswer = entry.opts[0];

    const shuffledOptions = shuffleArray(entry.opts);

    optionsForm.innerHTML = shuffledOptions.map((opt) =>
    {
        return `
            <label>
                <input type="radio" name="option" value="${opt}">
                ${opt}
            </label>
        `;
    }).join("");
}

function updateScore() {
    const questionNumber = Math.min(
        currentQuestionIndex + 1,
        shuffledData.length
    );

    scoreCorrect.textContent = correctCount;
    scoreWrong.textContent = wrongCount;
    progress.textContent = `${questionNumber} of ${shuffledData.length}`;
}

function showFeedback(message) {
    feedbackMessage.textContent = message;
    feedbackBox.classList.remove("hidden");
}

function closeFeedback() {
    feedbackBox.classList.add("hidden");
    nextQuestion();
}

window.closeFeedback = closeFeedback;

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < shuffledData.length)
    {
        loadQuestion();
        updateScore();
    }
    else
    {
        questionText.textContent = "Quiz completed!";
        questionText.title = "";

        optionsForm.innerHTML = "";

        submitBtn.style.display = "none";
        skipBtn.style.display = "none";
        showBtn.style.display = "none";
        restartBtn.style.display = "inline-block";

        updateScore();
    }
}

submitBtn.addEventListener("click", async (e) =>
{
    e.preventDefault();

    const selected =
        optionsForm.querySelector('input[name="option"]:checked');

    if (!selected)
    {
        return;
    }

    const entry = shuffledData[currentQuestionIndex];
    const correctAnswer = entry.opts[0];

    if (selected.value === correctAnswer)
    {
        correctCount++;
        nextQuestion();
    }
    else
    {
        wrongCount++;

        showFeedback(
            `❌ Wrong! Correct answer is: ${correctAnswer}`
        );
    }
});

skipBtn.addEventListener("click", (e) =>
{
    e.preventDefault();

    correctCount++;
    nextQuestion();
});

showBtn.addEventListener("click", () =>
{
    const entry = shuffledData[currentQuestionIndex];

    if (!entry)
    {
        return;
    }

    const correctAnswer = entry.opts[0];

    const options =
        optionsForm.querySelectorAll('input[name="option"]');

    options.forEach((opt) =>
    {
        if (opt.value === correctAnswer)
        {
            opt.checked = true;
        }
    });
});

restartBtn.addEventListener("click", () =>
{
    startQuiz();
});

function startQuiz() {
    shuffledData = shuffleArray(quizData);

    currentQuestionIndex = 0;
    correctCount = 0;
    wrongCount = 0;

    submitBtn.style.display = "inline-block";
    skipBtn.style.display = "inline-block";
    showBtn.style.display = "inline-block";
    restartBtn.style.display = "none";

    updateQuizTitle();
    loadQuestion();
    updateScore();
}

startQuiz();

/*
For a richer tooltip (instead of the browser's default title tooltip), replace:

questionText.title = entry.en;

with whatever tooltip mechanism you already use on your Sanskrit
story pages. That will let the English translation appear in your existing styled tooltip.

*/