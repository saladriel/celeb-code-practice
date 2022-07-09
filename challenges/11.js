/*
11.
write a function 'isOlderThan' that given an age and a person returns whether they are the given
age and up
*/
const age = require("./09");

module.exports = function isOlderThan(years, person) {
  if (age(person) >= years) {
    return true;
  }
  return false;
};
