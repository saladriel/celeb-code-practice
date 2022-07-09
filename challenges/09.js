/*
09.
write a function 'age' that given a person returns how many years old they are
*/
module.exports = function age(person) {
  const currentDate = new Date();
  const birthdayThisYear = new Date(
    currentDate.getFullYear(),
    person.dateOfBirth.getMonth(),
    person.dateOfBirth.getDate(),
  );
  const birthdayHasPast = currentDate.getTime() >= birthdayThisYear.getTime();
  if (birthdayHasPast) {
    return currentDate.getFullYear() - person.dateOfBirth.getFullYear();
  } else {
    return currentDate.getFullYear() - person.dateOfBirth.getFullYear() - 1;
  }
};
