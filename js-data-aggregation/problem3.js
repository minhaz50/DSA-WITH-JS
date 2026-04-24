// Scenario: Count every survey and group by response

//? input
const surveyResponses = [
  "A",
  "C",
  "B",
  "A",
  "B",
  "B",
  "C",
  "A",
  "B",
  "D",
  "A",
  "C",
  "B",
  "A",
];
// Method 1
const result = surveyResponses.reduce((table, response) => {
  table[response] = (table[response] || 0) + 1;

  return table;
}, {});

console.log("result", result);

// Method 2

const count = surveyResponses.reduce((table, response) => {
  console.log(table, ":", response);
  if (table[response]) {
    table[response] += 1;
  } else {
    table[response] = 1;
  }
  return table;
}, {});

console.log("count ", count);
//? Output
// { A: 5, C: 3, B: 5, D: 1 }
