function printOwing(invoice) {
  printBanner();
  let outstanding = cacluateOutstanding();

  // 세부 사항 출력
  console.log(`고객명: ${invoice.customer}`);
  console.log(`채무액: ${outstanding}`)

}

function printOwing2(invoice) {
  printBanner();
  let outstanding = cacluateOutstanding();
  printDetails(outstanding);

  function printDetails(outstanding){
    // 세부 사항 출력
    console.log(`고객명: ${invoice.customer}`);
    console.log(`채무액: ${outstanding}`)
  }
}
