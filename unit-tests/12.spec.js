/*
12.
write a function 'isMaleOlderThan45' that given a person returns whether they are a male and 45 
and up
*/
const isMaleOlderThan45 = require("../challenges/12");
const { bradPitt, aaronJohnson, samTaylor, juliaGarner } = require("../people");

beforeAll(() => {
  jest.useFakeTimers("modern");
  jest.setSystemTime(new Date(2022, 6, 9));
});

afterAll(() => {
  jest.useRealTimers();
});

test("returns true if person is male older than 45", () => {
  // Arrange
  // Act
  const actual = isMaleOlderThan45(bradPitt);
  // Assert
  expect(actual).toBe(true);
});

test("returns false if person is female older than 45", () => {
  // Arrange
  // Act
  const actual = isMaleOlderThan45(samTaylor);
  // Assert
  expect(actual).toBe(false);
});

test("returns false if person is male younger than 45", () => {
  // Arrange
  // Act
  const actual = isMaleOlderThan45(aaronJohnson);
  // Assert
  expect(actual).toBe(false);
});

test("returns false if person is female younger than 45", () => {
  // Arrange
  // Act
  const actual = isMaleOlderThan45(juliaGarner);
  // Assert
  expect(actual).toBe(false);
});
