/*
13.
write a function 'attractivenessTier' that given a person returns:
- 'not attractive' for 1-4
- 'average' for 5-7
- 'attractive' for 8-9
- 'extremely attractive' for 10
*/
const attractivenessTier = require("../challenges/13");
const { bradPitt, aaronJohnson, samTaylor, charlizeTheron } = require("../people");

test.each([
  { person: samTaylor, attractiveness: 4, tier: "not attractive" },
  { person: bradPitt, attractiveness: 7, tier: "average" },
  { person: aaronJohnson, attractiveness: 9, tier: "attractive" },
  { person: charlizeTheron, attractiveness: 10, tier: "extremely attractive" },
])("returns '$tier' if person's attractiveness is $attractiveness", ({ person, tier }) => {
  // Arrange
  // Act
  const actual = attractivenessTier(person);
  // Assert
  expect(actual).toBe(tier);
});
