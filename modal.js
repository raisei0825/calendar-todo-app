const modal = document.querySelector("#modal");
const modalDate = document.querySelector("#modal-date");
const goalInput = document.querySelector("#goal-input");
const saveBtn = document.querySelector("#save-goal");
const closeBtn = document.querySelector("#close");
const taskArea = document.querySelector("#task-area");

const goalArea = document.querySelector("#goal-area");
const goalDate = document.querySelector("#goal-date");
const goalText = document.querySelector("#goal-text");
const editGoal = document.querySelector("#edit-goal");

// グローバル変数として保存
let selectedDate = null;
const goals = {};

document.addEventListener("click", (e) => {
  // 親要素のtd[data-day]を取得する
  const td = e.target.closest("td[data-day]");
  if (!td) return;

  const day = td.dataset.day;
  const month = td.dataset.month;
  const year = td.dataset.year;

  selectedDate = { year, month, day };
  const key = `${year}-${month}-${day}`;

  goalDate.textContent = `${year}年${month}月${day}日の目標`;
  goalInput.value = "";
  goalArea.dataset.targetDay = key;
  goalText.textContent = goals[key] || "未設定です";
  goalArea.classList.remove("hidden");
});

editGoal.addEventListener("click", (e) => {
  const { year, month, day } = selectedDate;

  modalDate.textContent = `${year}年${month}月${day}日の目標`;
  goalInput.value = "";
  modal.dataset.targetDay = `${year}-${month}-${day}`;
  modal.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// 保存ボタン押したらカレンダーに表示（簡易版）
saveBtn.addEventListener("click", () => {
  const key = modal.dataset.targetDay;
  const goal = goalInput.value;

  goals[key] = goal;
  if (
    selectedDate &&
    `${selectedDate.year}-${selectedDate.month}-${selectedDate.day}` === key
  ) {
    goalText.textContent = goal;
  }
  modal.classList.add("hidden");
});
