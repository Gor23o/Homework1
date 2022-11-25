let shape = prompt("please enter the shapes name");
let firstSide = prompt("please enter the first side's number ");
let secondSide = prompt("please enter the second side's number ");
let result = "";
let rectangleArea = firstSide * secondSide;
let triangleArea = (firstSide * secondSide) / 2;

if (firstSide <= 0 || secondSide <= 0) {
  result = "please enter only positive numbers";
} else if (shape === "rectangle") {
  result = `Square of the  ${shape} is ${rectangleArea}`;
} else if (shape === "triangle") {
  result = `Square of the  ${shape} is ${triangleArea}`;
}
console.log(result);
