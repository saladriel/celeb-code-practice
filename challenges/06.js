/*
06.
log to the console each person who is male
*/
const { people } = require("../people");

let index = 0;
while (index < people.length) {
  if (people[index].gender === "male") {
    console.log(people[index]);
  }
  index++;
}
