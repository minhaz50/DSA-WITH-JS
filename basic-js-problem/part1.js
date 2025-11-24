console.log("Problem Solving Part 1");

// Arithmetic operator +, -, *, /, %
/*
let a = 20;
let b = 8;

const addition = a + b; // addition
const subtraction = a - b; // subtraction
const multiply = a * b; // multiply
const division = Math.floor(a / b); // division
const mod = a % b; // mod || left side is devident and right side is devisor.
console.log("Addition of two numbers", addition);
console.log("subtraction of two numbers", subtraction);
console.log("multiply of two numbers", multiply);
console.log("division of two numbers", division);
console.log("mod of two numbers", mod);
*/
// Relational Operator >, < , <=, >=, !==

// Question 1
/*
let a = 11;
let b = 22;

let c = a + b + a++ + b++ + ++a + ++b;
console.log("a=", a);
console.log("b=", b);
console.log("c=", c);

// Question 2

// In js true means 1 and x++ increase it 1. So the output is 2. If it was false then false means 0. So the output is 1.
let x = true;
x++;
console.log(x); // Output: 2.

//Question 3

 
let l = 11++;
console.log(l); // It will give error.
*/
console.log(Math.round(10.4));
console.log(Math.ceil(10.1));
console.log(Math.floor(10.9));
console.log(Math.pow(2, 4));

console.log(Math.trunc(Math.random() * 9000 + 1000)); // use case for otp.

let a = 4;
let b = 5;
let c = 6;

let s = (a + b + c) / 2;

console.log("result", Math.sqrt(s * (s - a) * (s - b) * (s - c)));
