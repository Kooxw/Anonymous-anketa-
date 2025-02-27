const questions = [
    "Твоё имя (или что-то загадочное)?",
    "Что бы ты мне сказал(а) первым делом?",
    "Какое слово приходит в голову обо мне?",
    "Что бы ты посоветовал(а) мне сделать прямо сейчас?",
    "Что тебя заставило в последний раз искренне улыбнуться?",
    "Оставь мне анонимное послание на будущее:",
    "Твой плейлист для этого момента (ссылка):"
];

let currentQuestion = 0;
const questionBox = document.getElementById("question-box");
const questionText = document.getElementById("question-text");
const nextButton = document.getElementById("next-btn");
const character = document.querySelector(".character");

const positions = [
    { top: "10%", left: "5%" },
    { top: "30%", left: "25%" },
    { top: "50%", left: "45%" },
    { top: "60%", left: "65%" },
    { top: "80%", left: "85%" }
];

function showNextQuestion() {
    if (currentQuestion >= questions.length) {
        alert("Анкета завершена! Спасибо за участие!");
        return;
    }

    questionText.textContent = questions[currentQuestion];
    questionBox.classList.remove("hidden");

    if (positions[currentQuestion]) {
        character.style.top = positions[currentQuestion].top;
        character.style.left = positions[currentQuestion].left;
    }

    currentQuestion++;
}

nextButton.addEventListener("click", () => {
    questionBox.classList.add("hidden");
    setTimeout(showNextQuestion, 1000);
});

showNextQuestion();
