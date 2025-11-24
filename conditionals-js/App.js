// practice conditional Statement

// Q1: Valid Voter or not.

/*
let ans = Number(prompt("What is your age: "));

if (isNaN(ans)) {
  console.log("Wrong input.");
} else if (ans >= 18) {
  console.log("You can vote.");
} else {
  console.log("You can not vote");
}
*/

// Q2: Shop Discount.
// 1. 0 - 5000 = 0%,
// 2. 5001 - 7000 = 5%,
// 3. 7001 - 9000 = 10%
// 4. above 9000 = 15%

let amount = Number(prompt("Enter the amount: "));
discount = 0;

if (isNaN(amount) || amount <= 0) {
  console.log("Please enter a positive value.");
} else if (amount > 0 && amount <= 5000) {
  discount = 0;
  console.log("No discount applied");
} else if (amount > 5000 && amount <= 7000) {
  discount = 5;
} else if (amount > 7000 && amount <= 9000) {
  discount = 10;
} else if (amount > 9000) {
  discount = 15;
}

let finalBill = amount - Math.floor((discount * amount) / 100);

console.log(
  `Final bill to pay after ${discount}% discount applied: ${finalBill} `
);
