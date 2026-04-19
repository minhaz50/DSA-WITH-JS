const startTime = performance.now();
console.log(startTime);
for (let i = 0; i <= 5000; i++) {
  console.log(i);
}

const endTime = performance.now();
console.log(endTime);

console.log(`This code took ${endTime - startTime} ms.`);
