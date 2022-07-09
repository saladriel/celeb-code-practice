/*
13.
write a function 'attractivenessTier' that given a person returns:
- 'not attractive' for 1-4
- 'average' for 5-7
- 'attractive' for 8-9
- 'extremely attractive' for 10
*/
module.exports = function attractivenessTier(person) {
  if (person.attractiveness <= 4) {
    return "not attractive";
  }
  if (person.attractiveness >= 5 && person.attractiveness <= 7) {
    return "average";
  }
  if (person.attractiveness >= 8 && person.attractiveness <= 9) {
    return "attractive";
  }
  return "extremely attractive";
};
