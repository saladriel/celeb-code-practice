/*
17.
write a function 'fullNamesOfOverAchievers' that given a list of people returns a list of
full names of only the people who over-achieved with their partner
*/
const fullNamesOfOverAchievers = require("../challenges/17");
const { people } = require("../people");

test("returns a list of the full names of people who over-achieved with their partner", () => {
  // Arrange
  // Act
  const actual = fullNamesOfOverAchievers(people);
  // Assert
  expect(actual).toEqual(["Sam Taylor", "Alexandra Grant"]);
});
