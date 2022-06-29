const people = require("../people");
/*
05.
log to the console each person's first name
*/
let index = 0;
while (index < people.length) {
  console.log(people[index].firstName);
  index++;
}
