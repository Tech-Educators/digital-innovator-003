// We want functions that live elsewhere to be available here, so we IMPORT them. for INternal use. GET IN HERE!
// Imports from our own javascript file
import { add, multiply } from "./calculator.js";
// Imports from Vitest
import { describe, test, expect } from "vitest";

//Our first test suite!
describe("Addition tests", function () {
  // We need to describe a test to be run.
  // This is a singular test. We separate them out
  test("will add 3 and 3 to make 6", function () {
    // Inside here is the test to be run
    expect(add(3, 3)).toBe(6);
  });

  test("will add 10 to 5 to make 15", function () {
    expect(add(10, 5)).toBe(15);
  });

  test("will add 20 to 20 to make 40", function () {
    const result = add(20, 20);
    const answer = 40;
    expect(result).toBe(answer);
  });
});

describe("Multiply tests", function () {
  test("10 and 8 multiply to 80", function () {
    const result = multiply(10, 8);
    const answer = 80;
    expect(result).toBe(answer);
  });
});
