/*
07.
write a function 'fullName' that given a person returns their full name (first and last)
*/
const fullName = require("../challenges/07");
const { bradPitt } = require("../people");

test("returns the full name of the given person", () => {
  // Arange
  // Act
  const actual = fullName(bradPitt);
  // Assert
  expect(actual).toBe("Brad Pitt");
});
