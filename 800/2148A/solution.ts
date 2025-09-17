import * as fs from "fs";

function main() {
  const data = fs.readFileSync(0, "utf8").trim().split(/\s+/);

  let index = 0;
  const t = Number(data[index++]);
  const numVars = 2;

  // Get the test cases
  const testCases = [];
  for (let i = 0; i < t; i++) {
    // Get the array of variables
    const testCase = [];
    for (let j = 0; j < numVars; j++) {
      testCase.push(Number(data[index++]));
    }
    testCases.push(testCase);
  }

  // Test
  testCases.forEach((testCase) => {
    if (testCase[1] % 2) {
      console.log(testCase[0]);
    }
    else {
      console.log(0);
    }
  });
}

main();

