/**
15.
write a function 'averageAge' that given a list of people returns their average age (rounded down 
to the nearest integer)
*/
const averageAge = require("../challenges/15");
const { people } = require("../people");

beforeAll(() => {
  jest.useFakeTimers("modern");
  jest.setSystemTime(new Date(2022, 6, 9));
});

afterAll(() => {
  jest.useRealTimers();
});

test("returns the average age of the given people", () => {
  // Arrange
  // Assert
  const actual = averageAge(people);
  // Act
  expect(actual).toBe(45);
});
