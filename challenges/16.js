/*
16.
write a function 'fullNames' that given a list of people returns a list of just their full names
*/
const fullName = require("./07");

module.exports = function fullNames(people) {
  let index = 0;
  const names = [];
  while (index < people.length) {
    const name = fullName(people[index]);
    names.push(name);
    index++;
  }
  return names;
};
