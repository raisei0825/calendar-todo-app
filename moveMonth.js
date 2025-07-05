import { calender } from "./calender.js";

const nextButton = document.querySelector("#next-button");
const prevButton = document.querySelector("#prev-button");

let nextDate = new Date();

function renderCalender() {
  const displayYear = nextDate.getFullYear();
  const displayMonth = nextDate.getMonth() + 1;

  const today = new Date();
  const isThisMonth =
    today.getFullYear() === displayYear &&
    today.getMonth() + 1 === displayMonth;

  const todayDate = isThisMonth ? today.getDate() : null;

  calender(displayYear, displayMonth, todayDate);
}

nextButton.addEventListener("click", () => {
  nextDate.setMonth(nextDate.getMonth() + 1);
  renderCalender();
});

prevButton.addEventListener("click", () => {
  nextDate.setMonth(nextDate.getMonth() - 1);
  renderCalender();
});
