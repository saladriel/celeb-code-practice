const isMale = require("../challenges/09");
/*
09.
write a function 'isMale' that given a person returns whether they are male
*/
test("returns true if person is male", () => {
  // Arange
  const person = {
    firstName: "Brad",
    lastName: "Pitt",
    attractiveness: 7,
    dateOfBirth: new Date(1963, 11, 18),
    gender: "male",
  };
  // Act
  const actual = isMale(person);
  // Assert
  expect(actual).toBe(true);
});

test("returns false if person is not male", () => {
  // Arange
  const person = {
    firstName: "Charlize",
    lastName: "Theron",
    attractiveness: 10,
    dateOfBirth: new Date(1975, 7, 7),
    gender: "female",
  };
  // Act
  const actual = isMale(person);
  // Assert
  expect(actual).toBe(false);
});
