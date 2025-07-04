const weeks = ["日", "月", "火", "水", "木", "金", "土"];

// 初期化
const date = new Date();
// 年取得
const year = date.getFullYear();
// 月取得
const month = date.getMonth() + 1;
// 日にち取得
const today = date.getDate();

//月の最初の日を取得
// 例：`year = 2025`, `month = 7`（7月）のとき → `new Date(2025, 6, 1)` → 2025年7月1日
const startDate = new Date(year, month - 1, 1);
const startDay = startDate.getDay();

// 月の最後の日を取得
// month 月の 0日 は、JavaScriptでは 前月の末日 を意味します。
// でも Date(year, 7, 0) にすると、JavaScriptは 「7月0日」= 6月30日 と解釈する
// つまり 「7月の0日目＝6月の最終日」この「テクニック」で、1か月先を指定し、その0日目を取ると、前の月の末日が取れる！
const endDate = new Date(year, month, 0);

// `endDate` から「日（day）」の数値を取り出す。
// 例：7月なら → `endDay = 31`
const endDay = endDate.getDate();

let dayCount = 1;
// カレンダー作成
let calendarHtml = "";

calendarHtml += `<h1>${year}年${month}月${today}日</h1>`;
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
      calendarHtml += "<td class='today'>" + dayCount + "</td>";
      dayCount++;
    } else {
      calendarHtml += "<td>" + dayCount + "</td>";
      dayCount++;
    }
  }
  calendarHtml += `</tr>`;
}

calendarHtml += "</table>";

document.querySelector("#calendar").innerHTML = calendarHtml;
