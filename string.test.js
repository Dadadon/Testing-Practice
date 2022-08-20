const string = require("./string");
const assert = require("assert");
//const reverseString = require("./string");


test("Checks test", () => {
  expect(string.stringLength("test")).toBe(4);
});

test("Checks testing functionality", () => {
  expect(string.stringLength("testing functionality")).toBe("Failed");
});

test("Checks t", () => {
  expect(string.stringLength("t")).toBe(1);
});

test("Checks empty string", () => {
  expect(string.stringLength("")).toBe("Failed");
});

test("Checks test string reversed", () => {
  expect(string.reverseString("test")).toBe("tset");
});

describe('Tests', function () {
  it('callback methods work', function () {
    const calculator = new string.calculator();
    assert(calculator.add(1, 2) === 3);
    assert(calculator.subtract(2, 1) === 1);
    assert(calculator.divide(6, 2) === 3);
    assert(calculator.multiply(1, 2) === 2);
  })
})

test("Checks capitalize first letter funtionality", () => {
  expect(string.capitalizeFirstLetter("testing")).toBe("Testing")
});