const isOlderThan50 = require("./12");
const isMale = require("./09");

/*
13.
write a function 'isMaleOlderThan50' that given a person returns whether they are a male
and 50 and up (hint: use existing functions you've written)
*/
function isMaleOlderThan50(person) {
  return isMale(person) && isOlderThan50(person);
}

// console.log(isMaleOlderThan50({ dateOfBirth: new Date(1971, 6, 5), gender: "male" }));
// console.log(isMaleOlderThan50({ dateOfBirth: new Date(1971, 6, 5), gender: "female" }));
// console.log(isMaleOlderThan50({ dateOfBirth: new Date(1973, 6, 5), gender: "male" }));
// console.log(isMaleOlderThan50({ dateOfBirth: new Date(1973, 6, 5), gender: "female" }));
