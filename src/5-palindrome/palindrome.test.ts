import { isPalindrome } from "./palindrome";

describe("isPalindrome Tests", () => {
test("testIsPalindrome_EmptyString", () => {
  const result = isPalindrome("");
  expect(result).toBe(true);
});

test("testIsPalindrome_SingleCharacterPalindrome", () => {
  const result = isPalindrome("a");
  expect(result).toBe(true);
});

test("testIsPalindrome_PalindromeString", () => {
  const result = isPalindrome("radar");
  expect(result).toBe(true);
});

test("testIsPalindrome_NonPalindromeString", () => {
  const result = isPalindrome("hello");
  expect(result).toBe(false);
});
});