let n = +prompt();

let i = 0;
let j = 0;

if (n % 2 === 0 && !Math.floor(n / 10)) {
  i += 1;
}
if (n % 3 === 0 && n % 10 === 1) {
  j += 1;
}
