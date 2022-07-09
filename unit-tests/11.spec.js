/*
11.
write a function 'isOlderThan' that given an age and a person returns whether they are the given
age and up
*/
const isOlderThan = require("../challenges/11");
const { charlizeTheron } = require("../people");

beforeAll(() => {
  jest.useFakeTimers("modern");
  jest.setSystemTime(new Date(2022, 6, 9));
});

afterAll(() => {
  jest.useRealTimers();
});

test("returns true if person is older than given years", () => {
  // Arrange
  // Assert
  const actual = isOlderThan(45, charlizeTheron);
  // Act
  expect(actual).toBe(true);
});

test("returns false if person is younger than given years", () => {
  // Arrange
  // Assert
  const actual = isOlderThan(47, charlizeTheron);
  // Act
  expect(actual).toBe(false);
});

test("returns true if person is exactly given years", () => {
  // Arrange
  // Assert
  const actual = isOlderThan(46, charlizeTheron);
  // Act
  expect(actual).toBe(true);
});
