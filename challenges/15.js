/*
15.
write a function 'averageAge' that given a list of people returns their average age (rounded down 
to the nearest integer)
*/
const age = require("./09");

module.exports = function averageAge(people) {
  let totalAgeCombined = 0;
  let index = 0;
  while (index < people.length) {
    totalAgeCombined = totalAgeCombined + age(people[index]);
    index++;
  }
  return Math.floor(totalAgeCombined / people.length);
};
