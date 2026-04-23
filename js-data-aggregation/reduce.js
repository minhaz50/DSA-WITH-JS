const numbers = [2, 5, 6, 7];
const numbers1 = [1, 2, 3, 4];

const sum = numbers.reduce((acc, curr) => {
  return acc + curr;
}, 0);

// short version
const total = numbers1.reduce((acc, curr) => acc + curr, 0);

console.log("Total is:", sum);
console.log("Total is:", total);
