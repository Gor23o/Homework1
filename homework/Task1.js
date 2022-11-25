function bringLastToFront(number) {
  let result = "";
  let lastNumber = 0;

  if (number % 10 === 0) {
    result = number;
  } else if (number < 9) {
    result = number;
  } else {
    lastNumber = number % 10;
    number = (number - lastNumber) / 10;

    result = lastNumber.toString();

    result += number;
  }

  result = +result;
  return result;
}

console.log(bringLastToFront(367));
