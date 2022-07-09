const attractivenessTier = require("./14");
/*
15.
write a function 'overAchievedWithPartner' that given a person returns whether their
partner is in a higher attractiveness tier
*/
function overAchievedWithPartner(person) {
  if (person.partner === undefined) {
    return false;
  }
  const scoreByTier = {
    "not attractive": 1,
    average: 2,
    attractive: 3,
    "very attractive": 4,
  };
  const personTier = attractivenessTier(person);
  const partnerTier = attractivenessTier(person.partner);
  const partnerTierIsHigher = scoreByTier[partnerTier] > scoreByTier[personTier];
  return partnerTierIsHigher;
}

// // no partner -> false
// console.log(overAchievedWithPartner({ attractiveness: 5, partner: undefined }));
// // partner is less attractive -> false
// console.log(overAchievedWithPartner({ attractiveness: 5, partner: { attractiveness: 4 } }));
// // partner is equally attractive -> false
// console.log(overAchievedWithPartner({ attractiveness: 5, partner: { attractiveness: 6 } }));
// // partner is more attractive -> true
// console.log(overAchievedWithPartner({ attractiveness: 5, partner: { attractiveness: 8 } }));
