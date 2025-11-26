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
// ---------------------------------------------------------------------------------

// Q2: Shop Discount.
// 1. 0 - 5000 = 0%,
// 2. 5001 - 7000 = 5%,
// 3. 7001 - 9000 = 10%
// 4. above 9000 = 15%

/*
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
*/

// ---------------------------------------------------------------------------------

// Q3: Electricity Bill
// unit               price
// upto 100           bdt 4/unit
// upto 101 - 200     bdt 6/unit
// upto 201 - 400     bdt 8/unit
// more than 400      bdt 13/unit

let unit = Number(prompt("Enter Your Electricity bill: "));
let amount = 0;

if (unit > 400) {
  // 500
  amount = (unit - 400) * 13; // 1300
  unit = 400;
}

if (unit > 200 && unit <= 400) {
  amount += (unit - 200) * 8; // 1600
  unit = 200;
}

if (unit > 100 && unit <= 200) {
  amount += (unit - 100) * 6; // 600
  unit = 100;
}

amount += unit * 4; // 400

console.log(amount);
