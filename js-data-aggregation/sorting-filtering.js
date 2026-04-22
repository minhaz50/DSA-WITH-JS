const numbers = [40, 2, 1, 32, 53, 23, 4];
const fruits = ["Banana", "cherry", "apple", "date", "Mango", "lemon"];

const sortedNumbers = [...numbers].sort((a, b) => a - b);
const sortedFruits = fruits.sort((a, b) => b.localeCompare(a));

console.log("This is original Numbers: ", numbers);
console.log("This is sorted Numbers:", sortedNumbers);

console.log(sortedFruits);
