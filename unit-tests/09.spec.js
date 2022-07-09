/*
09.
write a function 'age' that given a person returns how many years old they are
*/
const age = require("../challenges/09");
const { keanuReeves, markFoster } = require("../people");

beforeAll(() => {
  jest.useFakeTimers("modern");
});

afterAll(() => {
  jest.useRealTimers();
});

test("returns the person's age when their birthday this year has passed", () => {
  // Arrange
  jest.setSystemTime(new Date(2022, 8, 3));
  // Act
  const actual = age(keanuReeves);
  //Assert
  expect(actual).toBe(58);
});

test("returns the person's age when their birthday this year has not passed", () => {
  // Arrange
  jest.setSystemTime(new Date(2022, 8, 1));
  // Act
  const actual = age(keanuReeves);
  //Assert
  expect(actual).toBe(57);
});

test("returns the person's age when today is their birthday", () => {
  // Arrange
  jest.setSystemTime(new Date(2022, 8, 2));
  // Act
  const actual = age(keanuReeves);
  //Assert
  expect(actual).toBe(58);
});

test("returns the person's age when their birthday is a leap day and today is March 1 on a non-leap year", () => {
  // Arrange
  jest.setSystemTime(new Date(2022, 2, 1));
  // Act
  const actual = age(markFoster);
  //Assert
  expect(actual).toBe(38);
});

test("returns the person's age when their birthday is a leap day and today is February 28 on a non-leap year", () => {
  // Arrange
  jest.setSystemTime(new Date(2022, 1, 28));
  // Act
  const actual = age(markFoster);
  //Assert
  expect(actual).toBe(37);
});

test("returns the person's age when their birthday is a leap day and today is February 29 on a leap year", () => {
  // Arrange
  jest.setSystemTime(new Date(2020, 1, 29));
  // Act
  const actual = age(markFoster);
  //Assert
  expect(actual).toBe(36);
});
