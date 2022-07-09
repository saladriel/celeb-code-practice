/*
19.
write a function 'fullNamesByAttractivenessTier' that given a list of people returns an
object where each key is a tier and each value is an array of the full names of people in that tier
*/
const fullNamesByAttractivenessTier = require("../challenges/19");
const { people } = require("../people");

test("returns a mapping of attractiveness tier to people within that tier", () => {
  // Arrange
  // Act
  const actual = fullNamesByAttractivenessTier(people);
  // Assert
  expect(actual).toEqual({
    "not attractive": ["Sam Taylor"],
    average: ["Brad Pitt", "Mark Foster", "Julia Garner", "Alexandra Grant"],
    attractive: ["Aaron Johnson", "Keanu Reeves"],
    "extremely attractive": ["Charlize Theron"],
  });
});
