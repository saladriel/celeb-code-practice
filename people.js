const bradPitt = {
  firstName: "Brad",
  lastName: "Pitt",
  attractiveness: 7,
  dateOfBirth: new Date(1963, 11, 18),
  gender: "male",
};

const aaronJohnson = {
  firstName: "Aaron",
  lastName: "Johnson",
  attractiveness: 9,
  dateOfBirth: new Date(1990, 5, 13),
  gender: "male",
};

const samTaylor = {
  firstName: "Sam",
  lastName: "Taylor",
  attractiveness: 1,
  dateOfBirth: new Date(1967, 2, 4),
  gender: "female",
};

const charlizeTheron = {
  firstName: "Charlize",
  lastName: "Theron",
  attractiveness: 10,
  dateOfBirth: new Date(1975, 7, 7),
  gender: "female",
};

const keanuReeves = {
  firstName: "Keanu",
  lastName: "Reeves",
  attractiveness: 8,
  dateOfBirth: new Date(1964, 8, 2),
  gender: "male",
};

const alexandraGrant = {
  firstName: "Alexandra",
  lastName: "Grant",
  attractiveness: 7,
  dateOfBirth: new Date(1973, 3, 4),
  gender: "female",
};

aaronJohnson.partner = samTaylor;

samTaylor.partner = aaronJohnson;

keanuReeves.partner = alexandraGrant;

alexandraGrant.partner = keanuReeves;

const people = [bradPitt, aaronJohnson, samTaylor, charlizeTheron, keanuReeves, alexandraGrant];

module.exports = people;
