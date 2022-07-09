/*
16.
write a function 'fullNames' that given a list of people returns a list of just their full
names
*/
const fullNames = require("../challenges/16");
const { people } = require("../people");

test("returns a list of the first names of the given people", () => {
  // Arrange
  // Act
  const actual = fullNames(people);
  // Assert
  expect(actual).toEqual([
    "Brad Pitt",
    "Aaron Johnson",
    "Sam Taylor",
    "Charlize Theron",
    "Mark Foster",
    "Julia Garner",
    "Keanu Reeves",
    "Alexandra Grant",
  ]);
});
