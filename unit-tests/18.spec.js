/*
18.
write a function 'peopleSummaries' that given a list of people returns a list of people
summaries (full names and age)
*/
const peopleSummaries = require("../challenges/18");
const { people } = require("../people");

beforeAll(() => {
  jest.useFakeTimers("modern");
  jest.setSystemTime(new Date(2022, 6, 9));
});

afterAll(() => {
  jest.useRealTimers();
});

test("returns a list of the summaries of the given people", () => {
  // Arrange
  // Act
  const actual = peopleSummaries(people);
  // Assert
  expect(actual).toEqual([
    { name: "Brad Pitt", age: 58 },
    { name: "Aaron Johnson", age: 32 },
    { name: "Sam Taylor", age: 55 },
    { name: "Charlize Theron", age: 46 },
    { name: "Mark Foster", age: 38 },
    { name: "Julia Garner", age: 28 },
    { name: "Keanu Reeves", age: 57 },
    { name: "Alexandra Grant", age: 49 },
  ]);
});
