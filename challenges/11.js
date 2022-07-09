const age = require("./08");
/*
11.
write a function 'isOlderThan' that given an age and a person returns whether they are the
given age and up
*/
module.exports = function isOlderThan(years, person) {
  if (age(person) >= years) {
    return true;
  }
  return false;
};
// console.log(isOlderThan(20, { dateOfBirth: new Date(2003, 6, 6) }));
// console.log(isOlderThan(20, { dateOfBirth: new Date(2002, 6, 6) }));
// console.log(isOlderThan(20, { dateOfBirth: new Date(2001, 6, 6) }));
