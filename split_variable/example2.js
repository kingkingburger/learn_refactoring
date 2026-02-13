function discount (inputValue, quantity) {
  let result = inputValue;
  if (inputValue > 50) result = result - 2;
  if (quantity > 100) result = result - 1;
  return result;
}

// 변수 쪼개기로 입력매개변수를 처리할 수 있다.
// 호출자에 영향을 주지 않기 때문에 함수에 데이터를 전달하는 용도, 결과를 호출자에 반환하는 용도를 나눌 수 있다.
// 변수의 흐름을 처리하기 쉬운상태가됨