/*
18.
write a function 'peopleSummaries' that given a list of people returns a list of people summaries
(full name and age)
*/
const fullName = require("./07");
const age = require("./09");

module.exports = function peopleSummaries(people) {
  let index = 0;
  const summaries = [];
  while (index < people.length) {
    const summary = {
      name: fullName(people[index]),
      age: age(people[index]),
    };
    summaries.push(summary);
    index++;
  }
  return summaries;
};
