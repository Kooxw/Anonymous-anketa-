// Список вопросов — можешь заменить своими
const questions = [
  "Твоё имя (или что-то загадочное)?",
  "Что бы ты мне сказал(а) первым делом?",
  "Какое слово приходит в голову обо мне?",
  "Что бы ты посоветовал(а) мне сделать прямо сейчас?",
  "Что тебя заставило в последний раз искренне улыбнуться?",
  "Оставь мне анонимное послание на будущее:",
  "Твой плейлист для этого момента (ссылка):"
];

let currentQuestionIndex = 0;

// Находим элементы
const questionDisplay = document.getElementById("question-display");
const answerInput = document.getElementById("answer-input");
const nextButton = document.getElementById("next-button");

// Функция для показа вопроса
function showQuestion(index) {
  questionDisplay.textContent = questions[index];
  answerInput.value = "";
  answerInput.focus(); // чтобы курсор сразу был в поле ввода
}

// Обработчик нажатия на кнопку "Далее"
nextButton.addEventListener("click", () => {
  // Здесь можно сохранить ответ куда-то, если нужно
  const userAnswer = answerInput.value;
  console.log("Ответ:", userAnswer);

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion(currentQuestionIndex);
  } else {
    // Если вопросы закончились
    questionDisplay.textContent = "Спасибо за прохождение анкеты!";
    answerInput.style.display = "none";
    nextButton.style.display = "none";
  }
});

// Показываем первый вопрос
showQuestion(currentQuestionIndex);
