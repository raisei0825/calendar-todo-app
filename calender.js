const weeks = ["日", "月", "火", "水", "木", "金", "土"];
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const today = date.getDate();

calender(year, month, today);

// カレンダー作成
export function calender(year, month, today) {
  //月の最初の日を取得
  // 例：`year = 2025`, `month = 7`（7月）のとき → `new Date(2025, 6, 1)` → 2025年7月1日
  const startDate = new Date(year, month - 1, 1);
  const startDay = startDate.getDay();

  // Date(year, 8, 0) にすると、JavaScriptは 「8月0日」= 7月31日 と解釈する
  const endDate = new Date(year, month, 0);

  // `endDate` から「日（day）」の数値を取り出す。
  // 例：7月なら → `endDay = 31`
  const endDay = endDate.getDate();

  let dayCount = 1;
  let calendarHtml = "";

  calendarHtml += `<h1>${year}年${month}月</h1>`;
  calendarHtml += "<table>";

  for (let i = 0; i < weeks.length; i++) {
    calendarHtml += `<td>${weeks[i]}</td>`;
  }
  for (let j = 0; j < 6; j++) {
    // 縦の配列を作成
    calendarHtml += `<tr>`;
    for (let d = 0; d < 7; d++) {
      if (j == 0 && d < startDay) {
        // 最初の行（1週目）で、月の始まりが水曜（startDay = 3）などの場合、その前に空白セルを入れる。
        calendarHtml += `<td></td>`;
      } else if (dayCount > endDay) {
        // 月末を過ぎたら、残りのセルも空白にする。
        calendarHtml += `<td></td>`;
      } else if (dayCount === today) {
        calendarHtml += `<td class='today' data-day="${dayCount}" data-month="${month}" data-year="${year}">
        ${dayCount}
        </td>`;
        dayCount++;
      } else {
        calendarHtml += `<td data-day="${dayCount}" data-month="${month}" data-year="${year}">
        ${dayCount}
        </td>`;
        dayCount++;
      }
    }
    calendarHtml += `</tr>`;
  }

  calendarHtml += "</table>";
  document.querySelector("#calendar").innerHTML = calendarHtml;
}

document.querySelectorAll("td[data-day]").forEach((td) => {
  td.addEventListener("click", () => {
    const day = td.dataset.day; // ← ここで日付が取得できる！
    console.log(`クリックされた日は ${day} 日です`);
  });
});
