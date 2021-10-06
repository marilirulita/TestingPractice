const stringLength = require('./strings');

const username = "marili";
const relative = "dad";

test('string lenght iqual 12', () => {
  expect(stringLength(username)).toBe(6);
});

test('string lenght iqual 3', () => {
  expect(stringLength(relative)).toBe(3);
});

test('string length not allowed', () => {
  expect(() => stringLength("marilirulita")).toThrow(Error);
});