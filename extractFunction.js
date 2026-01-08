function printOwing(invoice) {
  // 서문 출력
  printPreface();

  const outstanding = calculateOutstanding(invoice);

  // 마감일(dueDate)를 기록한다.
  recordDueDate(invoice);

  // 세부 사항을 출력한다.
  printDetails(invoice, outstanding);
}

function printPreface() {
  console.log("*****************");
  console.log("**** 고객 채무 ****");
  console.log("*****************");
}

function printDetails(invoice, outstanding) {
  console.log(`고객명: ${invoice.customer}`);
  console.log(`채무액: ${outstanding}`);
  console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`);
}

function recordDueDate(invoice) {
  const today = Clock.today;
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(),
      today.getDate() + 30);
}

// 미해결 채무(outstanding)를 게산한다.
function calculateOutstanding(invoice) {
  let result = 0;
  for (const o of invoice.orders) {
    result += o.amount;
  }
  return result;
}
