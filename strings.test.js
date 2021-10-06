const stringLength = require('./strings');

const username = "marilirulita";
const relative = "dad";

test('string lenght iqual 12', () => {
  expect(stringLength(username)).toBe(12);
});

test('string lenght iqual 3', () => {
  expect(stringLength(relative)).toBe(3);
});