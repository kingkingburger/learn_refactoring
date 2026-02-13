function discount (inputValue, quantity) {
  if (inputValue > 50) inputValue = inputValue - 2;
  if (inputValue > 100) inputValue = inputValue - 1;
  return inputValue;
}