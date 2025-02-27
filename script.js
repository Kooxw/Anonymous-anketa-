const questions = [
    "Твоё имя (или что-то загадочное)?",
    "Что бы ты мне сказал(а) первым делом?",
    "Какое слово у тебя ассоциируется со мной?",
    "Что бы ты посоветовал(а) мне сделать прямо сейчас?",
    "Что тебя заставило улыбнуться в последний раз?",
    "Оставь мне анонимное послание на будущее",
    "Твой плейлист для этого момента (ссылка):"
];

let currentQuestion = 0;
const character = document.querySelector('.character');
const progress = document.querySelector('.progress');

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        document.getElementById("question-text").textContent = questions[currentQuestion];
        progress.style.width = `${(currentQuestion / (questions.length - 1)) * 100}%`;

        // Перемещение персонажа по рельсам
        const positions = ["5%", "20%", "35%", "50%", "65%", "80%", "95%"];
        character.style.left = positions[currentQuestion];
    }
}

document.getElementById("question-text").textContent = questions[0];
