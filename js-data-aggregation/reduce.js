const numbers = [2, 5, 6, 7];
const numbers1 = [1, 2, 3, 4];

const sum = numbers.reduce((acc, curr) => {
  return acc + curr;
}, 0);

// short version
const total = numbers1.reduce((acc, curr) => acc + curr, 0);

console.log("Total is:", sum);
console.log("Total is:", total);

// Find Maximum Number

const nums = [4, 6, 2, 62, 23, 65];

const maxNums = nums.reduce((acc, curr) => {
  return curr > acc ? curr : acc;
}, nums[0]);

console.log("The maximum number is: ", maxNums);

// Count items

const fruits = ["apple", "banana", "apple", "banana", "Watermealon"];

const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count);

// Flatten Array

const arr = [[1, 2], [3, 4], [5]];

const flat = arr.reduce((acc, curr) => acc.concat(curr), []);

console.log(flat);
