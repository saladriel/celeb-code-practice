/*
08.
write a function 'isMale' that given a person returns whether they are male
*/
const isMale = require("../challenges/08");
const { bradPitt, charlizeTheron } = require("../people");

test("returns true if person is male", () => {
  // Arange
  // Act
  const actual = isMale(bradPitt);
  // Assert
  expect(actual).toBe(true);
});

test("returns false if person is not male", () => {
  // Arange
  // Act
  const actual = isMale(charlizeTheron);
  // Assert
  expect(actual).toBe(false);
});
