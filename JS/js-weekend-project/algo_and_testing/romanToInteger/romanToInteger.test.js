const { test, expect } = require("@jest/globals");
const romanToInt = require("./romanToInteger.easy");

test("Example 1", () => {
	expect(romanToInt("I")).toBe(1);
});

test("Example 2", () => {
	expect(romanToInt("M")).toBe(1000);
});
