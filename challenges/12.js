const isOlderThan = require("./11");
/*
12.
rewrite #10 'isOlderThan50' using #11 'isOlderThan'
*/

module.exports = function isOlderThan50(person) {
  return isOlderThan(50, person);
};
