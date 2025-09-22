const { capitalize, analyzeArray } = require("./main");
const { reverseString } = require("./main");
const { calculator } = require("./main");
const { caesarCipher } = require("./main");

// capitalize test
test("capitalizes first letter of a string", () => {
  const testWord = "example";
  const result = capitalize(testWord);
  expect(result.charAt(0)).toBe("E");
  expect(result.slice(1)).toBe("xample");
});

// reverseString test
test("reverses a string", () => {
  expect(reverseString("Drow")).toMatch("worD");
});

test("calculator performs all operations correctly", () => {
  const testCases = [
    ["add", 2, 2, 4],
    ["subtract", 5, 3, 2],
    ["multiply", 10, 5, 50],
    ["divide", 10, 5, 2]
  ];

  testCases.forEach(([operation, a, b, expected]) => {
    expect(calculator[operation](a, b)).toEqual(expected);
  });
});

// caesarCipher test
test("caesarCipher handles all cases correctly", () => {
  const testCases = [
    ["xyz", 3, "abc"], // wrapping from z to a
    ["HeLLo", 3, "KhOOr"], // lettercase preservation
    ["Hello, World!", 3, "Khoor, Zruog!"] // punctuation and spaces unchanged
  ];

  testCases.forEach(([input, shift, expected]) => {
    expect(caesarCipher(input, shift)).toBe(expected);
  });
});

// analyzeArray test
test("analyzeArray returns correct object properties", () => {
  const result = analyzeArray([1, 8, 3, 4, 2, 6]);

  expect(result).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});