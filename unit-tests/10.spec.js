/*
10.
write a function 'isOlderThan50' that given a person returns whether they are 50 and up
*/
const isOlderThan50 = require("../challenges/10");
const { charlizeTheron } = require("../people");

beforeAll(() => {
  jest.useFakeTimers("modern");
});

afterAll(() => {
  jest.useRealTimers();
});

test("returns false if person is 49", () => {
  // Arrange
  jest.setSystemTime(new Date(2024, 7, 7));
  // Act
  const actual = isOlderThan50(charlizeTheron);
  // Assert
  expect(actual).toBe(false);
});

test("returns true if person is 51", () => {
  // Arrange
  jest.setSystemTime(new Date(2026, 7, 7));
  // Act
  const actual = isOlderThan50(charlizeTheron);
  // Assert
  expect(actual).toBe(true);
});

test("returns true if person is exactly 50", () => {
  // Arrange
  jest.setSystemTime(new Date(2025, 7, 7));
  // Act
  const actual = isOlderThan50(charlizeTheron);
  // Assert
  expect(actual).toBe(true);
});
