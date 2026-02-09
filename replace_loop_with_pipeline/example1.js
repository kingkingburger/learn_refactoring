function acquireData(input) {
  const lines = input.split('\n');
  const result = [];
  const loopItems = lines
      .slice(1)
      .filter(line => line.trim() !== "")
      .map(record => record.trim())
      .filter(record => record[1] === "India")
      .map(record => ({city: record[0].trim(), phone: record[2].trim()}))
  ;
  return result;
}

// 내가 아는 함수형 프로그래밍 형식이다.
// 파이프라인을 타고 데이터를 만든다.
// 흐름을 이해하기 어렵지만 익숙지 않아서 그런거같아. 이런 방식을 자주 이용해야겠다. 보기 깔끔하다.