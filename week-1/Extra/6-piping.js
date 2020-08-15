/*
  PIPING FUNCTIONS
  ================
  1. Write 3 functions:
  - one that adds 2 numbers together
  - one that multiplies 2 numbers together
  - one that formats a number so it's returned as a string with a £ sign before it (e.g. 20 -> £20)

  2. Using the variable startingValue as input, perform the following operations using your functions all
  on one line (assign the result to the variable badCode):
  - add 10 to startingValue
  - multiply the result by 2
  - format it
  
  3. Write a more readable version of what you wrote in step 2 under the BETTER PRACTICE comment. Assign
  the final result to the variable goodCode
*/

function add(n1, n2) {
  return n1 + n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function format(n) {
  return "£" + n;
}

const startingValue = 2;

// Why can this code be seen as bad practice? Comment your answer.
let badCode = format(multiply(add(startingValue, 10), 2));

/* BETTER PRACTICE */

let goodCodeFunction = (n) => {
  let n_add = add(n, 10);
  let n_multiply = multiply(n_add, 2);
  let n_format = format(n_multiply);

  return n_format;
};

let goodCode = goodCodeFunction(startingValue);

/* ======= TESTS - DO NOT MODIFY ===== 
There are some Tests in this file that will help you work out if your code is working.

To run these tests type `node 2-piping.js` into your terminal
*/

const util = require("util");

function test(test_name, actual, expected) {
  let status;
  if (actual === expected) {
    status = "PASSED";
  } else {
    status = `FAILED: expected: ${util.inspect(
      expected
    )} but your code returned: ${util.inspect(actual)}`;
  }

  console.log(`${test_name}: ${status}`);
}

test("add function - case 1 works", add(1, 3), 4);
test("add function - case 2 works", add(2.4, 5), 7.4);
test("multiply function works", multiply(2, 3), 6);
test("format function works", format(16), "£16");
test("badCode variable correctly assigned", badCode, "£24");
test("goodCode variable correctly assigned", goodCode, "£24");
