const buttons = document.querySelectorAll(".choice");
const result = document.getElementById("result");
const questionEl = document.getElementById("question");
const scoreElement = document.getElementById("score");
const retry = document.getElementById("retry");
const next = document.getElementById("next");

const questions = [
  {
    text: "日本の首都は？",
    choices: ["東京", "大阪", "京都"],
    answer: "東京"
  },
  {
    text: "1+1は？",
    choices: ["1", "2", "3"],
    answer: "2"
  }
];

let current = 0;
let score = 0;

// 問題を画面に出す
function showQuestion() {
  const q = questions[current];
  questionEl.textContent = q.text;

  buttons.forEach((btn, i) => {
    btn.textContent = q.choices[i];
    btn.disabled = false;
  });

  result.textContent = "";
  result.style.color = "";
  scoreElement.textContent = "スコア: " + score;
}

// 最初の問題を表示
showQuestion();

// 選択肢
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const q = questions[current];

    if (btn.textContent === q.answer) {
      result.textContent = "正解！";
      result.style.color = "green";
      score++;
      scoreElement.textContent = "スコア: " + score;
    } else {
      result.textContent = "不正解…";
      result.style.color = "red";
    }

    buttons.forEach((b) => {
      b.disabled = true;
    });
  });
});

// 次へ
next.addEventListener("click", () => {
  if (current < questions.length - 1) {
    current++;
    showQuestion();
  } else {
    result.textContent = "終了！正解数は " + score + " / " + questions.length;
    result.style.color = "blue";
    buttons.forEach((b) => {
      b.disabled = true;
    });
  }
});

// もう一度
retry.addEventListener("click", () => {
  current = 0;
  score = 0;
  showQuestion();
});