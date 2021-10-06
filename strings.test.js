const stringLength = require('./stringsLength');
const reverseString = require('./stringsReverse');

const username = "marili";
const longUser = "marilirulita";
const relative = "dad";

// tests for strings length function

test('string lenght iqual 12', () => {
  expect(stringLength(username)).toBe(6);
});

test('string lenght iqual 3', () => {
  expect(stringLength(relative)).toBe(3);
});

test('string lenght is allowed (biger)', () => {
  expect(stringLength(relative)).toBeGreaterThan(1);
});

test('string lenght is allowed (smaller)', () => {
  expect(stringLength(username)).toBeLessThan(10);
});

test('string length not allowed', () => {
  expect(() => stringLength(longUser)).toThrow(Error);
});

// tests for reverse string function.

test('string is reversed', () => {
  expect(reverseString(longUser)).toMatch(/atiluriliram/);
});

test('string is reversed', () => {
  expect(reverseString(username)).toMatch(/iliram/);
});