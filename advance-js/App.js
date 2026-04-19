// Question 1 : Write a program that will left rotation by 1 element

let arr = [1, 2, 3, 4, 5];

let copy = arr[0];

// console.log(copy);

for (let i = 0; i < arr.length - 1; i++) {
  arr[i] = arr[i + 1];
}

arr[arr.length - 1] = copy;

console.log(arr);

// // Question 2 : Write a program that will right rotation by 1 element

let arr1 = [1, 2, 3, 4, 5];

let copy1 = arr1[arr1.length - 1];

for (let i = arr1.length - 1; i > 0; i--) {
  arr1[i] = arr1[i - 1];
}

arr1[0] = copy1;
console.log(arr1);
