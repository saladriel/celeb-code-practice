/*
20.
write a function 'couples' that given a list of people returns a list of couples (where a couple
might look like ['person 1', 'person 2'])
*/
const fullName = require("./07");

module.exports = function couples(people) {
  const allCouples = [];
  const alreadyInCouples = {};
  let index = 0;
  while (index < people.length) {
    if (people[index].partner !== undefined) {
      const personFullName = fullName(people[index]);
      const partnerFullName = fullName(people[index].partner);
      if (alreadyInCouples[personFullName] !== true) {
        const couple = [personFullName, partnerFullName];
        allCouples.push(couple);
      }
      alreadyInCouples[partnerFullName] = true;
    }
    index++;
  }
  return allCouples;
};

// function couples(people) {
//   let index = 0;
//   const allCouples = [];
//   while (index < people.length) {
//     if (people[index].partner !== undefined) {
//       const personFullName = fullName(people[index]);
//       const partnerFullName = fullName(people[index].partner);
//       let couplesIndex = 0;
//       let personAlreadyInCouples = false;
//       while (couplesIndex < allCouples.length) {
//         // check if persons full name is equal to either person in the couple
//         if (
//           personFullName === allCouples[couplesIndex][0] ||
//           personFullName === allCouples[couplesIndex][1]
//         ) {
//           personAlreadyInCouples = true;
//         }
//         couplesIndex++;
//       }
//       if (personAlreadyInCouples === false) {
//         const couple = [personFullName, partnerFullName];
//         allCouples.push(couple);
//       }
//     }
//     index++;
//   }
//   return allCouples;
// }
