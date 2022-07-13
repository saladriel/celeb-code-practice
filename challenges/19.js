/*
19.
write a function 'fullNamesByAttractivenessTier' that given a list of people returns an object
where each key is a tier and each value is an array of the full names of people in that tier
*/
const attractivenessTier = require("./13");
const fullName = require("./07");

module.exports = function fullNamesByAttractivenessTier(people) {
  const byAttractivenessTier = {};
  let index = 0;
  while (index < people.length) {
    const tier = attractivenessTier(people[index]);
    if (byAttractivenessTier[tier] === undefined) {
      byAttractivenessTier[tier] = [];
    }
    byAttractivenessTier[tier].push(fullName(people[index]));
    index++;
  }
  return byAttractivenessTier;
};
