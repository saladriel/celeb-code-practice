/*
14.
write a function 'overAchievedWithPartner' that given a person returns whether their partner is in
a higher attractiveness tier
*/
const attractivenessTier = require("./13");

module.exports = function overAchievedWithPartner(person) {
  if (person.partner === undefined) {
    return false;
  }
  const scoreByTier = {
    "not attractive": 1,
    average: 2,
    attractive: 3,
    "extremely attractive": 4,
  };
  const personTier = attractivenessTier(person);
  const partnerTier = attractivenessTier(person.partner);
  const partnerTierIsHigher = scoreByTier[partnerTier] > scoreByTier[personTier];
  return partnerTierIsHigher;
};
