import * as fs from "fs";

function main() {
  const data = fs.readFileSync(0, "utf8").trim().split(/\s+/);
  
  let index = 0;
  const t = Number(data[index++]);
  const numVars = 3;

  // Get the test cases
  const testCases = [];
  for (let i = 0; i < t; i++) {
    // Get the array of variables
    const testCase = [];
    for (let j = 0; j < numVars; j++) {
      testCase.push(data[index++]);
    }
    testCases.push(testCase);
  }

  // Test/solution
  const YES = "YES";
  const NO = "NO";
  for (let i = 0; i < t; i++) {
    const n = Number(testCases[i][0]);
    const a = Number(testCases[i][1]);
    const b = Number(testCases[i][2]);
    if (a <= b) {
      console.log((n % 2 === b % 2) ? YES : NO);
    }
    else {
      console.log((n % 2 === a % 2 && n % 2 === b % 2) ? YES : NO);
    }
  }
}

main();
