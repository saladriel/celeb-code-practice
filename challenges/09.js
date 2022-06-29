/*
09.
write a function 'isMale' that given a person returns whether they are male
*/
module.exports = function isMale(person) {
  if (person.gender === "male") {
    return true;
  } else {
    return false;
  }
};
