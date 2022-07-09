/*
12.
write a function 'isMaleOlderThan45' that given a person returns whether they are a male and 45 
and up
*/
const isMale = require("./08");
const isOlderThan = require("./11");

module.exports = function isMaleOlderThan45(person) {
  return isMale(person) && isOlderThan(45, person);
};
