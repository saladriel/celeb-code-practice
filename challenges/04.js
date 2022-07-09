/*
04.
log to the console each person
*/
const { people } = require("../people");

// for (let index = 0; index < people.length; index++) {
//     console.log(people[index]);
// }
let index = 0;
while (index < people.length) {
  console.log(people[index]);
  index++;
}
