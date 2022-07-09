/*
05.
log to the console each person's first name
*/
const { people } = require("../people");

let index = 0;
while (index < people.length) {
  console.log(people[index].firstName);
  index++;
}
