let obj = { a: "1", b: "1", c: "1", d: "2" };
let newObj = {};
let arr = [1];

for (let i in obj) {
  for (let j in obj) {
    if (obj[i] === obj[j]) {
      arr.push(j);
    } else {
      newObj[obj[i]] = i;
    }

    if (arr.length > 1) {
      newObj[obj[i]] = arr;
    }
  }
  arr = [];
}
console.log(newObj, arr);
