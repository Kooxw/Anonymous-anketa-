const questions = [
  "Как тебя можно назвать (или оставь загадку)?",
  "Что бы ты сказал(а) мне первым делом?",
  "Какое слово у тебя ассоциируется со мной?",
  "Что мне стоит сделать прямо сейчас?",
  "Когда ты в последний раз чувствовал радость?",
  "Оставь мне анонимное послание на будущее:",
  "Поделись плейлистом (ссылка или название):"
];

let currentQuestionIndex = 0;
const questionDisplay = document.getElementById("question-display");
const answerInput = document.getElementById("answer-input");
const nextButton = document.getElementById("next-button");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const character = document.getElementById("character");
const checkpoints = document.querySelectorAll(".checkpoint");

function showQuestion(index) {
  questionDisplay.textContent = questions[index];
  answerInput.value = "";
  answerInput.focus();

  const progressPercent = ((index + 1) / questions.length) * 100;
  progressBar.style.width = progressPercent + "%";
  progressText.textContent = `Вопрос ${index + 1} из ${questions.length}`;

  const characterPosition = checkpoints[index]?.style.left || "90%";
  character.style.left = characterPosition;
}

nextButton.addEventListener("click", () => {
  const userAnswer = answerInput.value.trim();
  console.log(`Ответ: ${userAnswer}`);

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion(currentQuestionIndex);
  } else {
    finishSurvey();
  }
});

function finishSurvey() {
  questionDisplay.textContent = "Поздравляю! Ты завершил квест!";
  answerInput.style.display = "none";
  nextButton.style.display = "none";
  progressBar.style.width = "100%";
  progressText.textContent = "Квест завершён";
}

showQuestion(currentQuestionIndex);
