/*
14.
write a function 'overAchievedWithPartner' that given a person returns whether their partner is in
a higher attractiveness tier
*/
const overAchievedWithPartner = require("../challenges/14");
const { bradPitt, aaronJohnson, markFoster, samTaylor } = require("../people");

test.each([
  {
    description: "no partner",
    person: bradPitt,
    expected: false,
  },
  {
    description: "partner is lower attractiveness tier",
    person: aaronJohnson,
    expected: false,
  },
  {
    description: "partner is same attractiveness tier",
    person: markFoster,
    expected: false,
  },
  {
    description: "partner is higher attractiveness tier",
    person: samTaylor,
    expected: true,
  },
])("returns $expected if $description", ({ person, expected }) => {
  // Arrange
  // Act
  const actual = overAchievedWithPartner(person);
  // Assert
  expect(actual).toBe(expected);
});
