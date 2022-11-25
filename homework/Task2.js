function sort(number1, number2, number3) {
  let arr = [number1, number2, number3];
  let temp = 0;

  for (let i = 0; i < 1; i++) {
    if (arr[i + 1] < arr[i]) {
      temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
    if (arr[i + 2] < arr[i + 1]) {
      temp = arr[i + 1];
      arr[i + 1] = arr[i + 2];
      arr[i + 2] = temp;
    }
    if (arr[i + 1] < arr[i]) {
      temp = arr[i + 1];
      arr[i + 1] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}
// Aranc loopi el klini;

console.log(sort(-23, -456, 0));
