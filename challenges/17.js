/*
17.
write a function 'fullNamesOfOverAchievers' that given a list of people returns a list of full
names of only the people who over-achieved with their partner
*/
const fullName = require("./07");
const overAchievedWithPartner = require("./14");

module.exports = function fullNamesOfOverAchievers(people) {
  let index = 0;
  const overAchievers = [];
  while (index < people.length) {
    if (overAchievedWithPartner(people[index])) {
      const name = fullName(people[index]);
      overAchievers.push(name);
    }
    index++;
  }
  return overAchievers;
};
