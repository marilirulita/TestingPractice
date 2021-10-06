const stringLength = require('./strings');

const username = "marili";
const relative = "dad";

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
  expect(() => stringLength("marilirulita")).toThrow(Error);
});