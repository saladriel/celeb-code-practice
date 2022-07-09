/*
20.
write a function 'couples' that given a list of people returns a list of couples
(hint: a single couple might look like ['person 1', 'person 2'])
*/
const couples = require("../challenges/20");
const { people } = require("../people");

test("returns a list of couples from the given people", () => {
  // Arrange
  // Act
  const actual = couples(people);
  // Assert
  expect(actual).toEqual([
    ["Aaron Johnson", "Sam Taylor"],
    ["Mark Foster", "Julia Garner"],
    ["Keanu Reeves", "Alexandra Grant"],
  ]);
});
