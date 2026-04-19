const fruits = [
  "mango",
  "Apple",
  "Guava",
  "Banana",
  "Water Mealon",
  "mango",
  "Apple",
];

// Brute Force

const removeDupArr = (arr) => {
  const newArry = [];

  fruits.forEach((element) => {
    if (!newArry.includes(element)) {
      newArry.push(element);
    }
  });
  return newArry;
};
console.log(removeDupArr(fruits));

// set implementation

const removeDupSet = (fruits) => {
  const set = new Set(fruits);

  return Array.from(set);
};

console.log(removeDupSet(fruits));
