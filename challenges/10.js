/*
10.
write a function 'isOlderThan50' that given a person returns whether they are 50 and up
*/
const age = require("./09");

module.exports = function isOlderThan50(person) {
  if (age(person) >= 50) {
    return true;
  }
  return false;
};
