const age = require("./08");
/*
10.
write a function 'isOlderThan50' that given a person returns whether they are 50 and up
*/
function isOlderThan50(person) {
  if (age(person) >= 50) {
    return true;
  }
  return false;
}
// console.log(isOlderThan50({ dateOfBirth: new Date(1972, 6, 5) }));
// console.log(isOlderThan50({ dateOfBirth: new Date(1971, 6, 5) }));
// console.log(isOlderThan50({ dateOfBirth: new Date(1973, 6, 5) }));
