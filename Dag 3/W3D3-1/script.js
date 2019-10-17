function sum(...numbers) {
  return numbers.reduce((prev, current) => prev + current);
}
console.log(sum(5, 9, 8));

function sums(x, y) {
  return x + y;
}
let nums = [6, 8];

console.log(sum(...nums));
