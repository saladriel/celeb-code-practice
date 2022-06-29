const fullName = require("../challenges/07");
/*
07.
write a function 'fullName' that given a person returns their full name (first and last)
*/
test("returns the full name of the given person", () => {
  // Arange
  const person = {
    firstName: "Brad",
    lastName: "Pitt",
    attractiveness: 7,
    dateOfBirth: new Date(1963, 11, 18),
    gender: "male",
  };
  // Act
  const actual = fullName(person);
  // Assert
  expect(actual).toBe("Brad Pitt");
});
