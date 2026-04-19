// Question 1:  Write a function that calculates the sum of all numbers from 1 up to some number n.

function addUpTo(n) {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

let result = addUpTo(8);

console.log(result);

// Question 2: Write a function that accepts a string input and returns a reversed copy.
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));
