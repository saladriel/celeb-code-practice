/*
04.
log to the console each person
*/
test("logs each person", () => {
  // Arrange
  jest.spyOn(global.console, "log").mockImplementation(() => {});
  // Act
  require("../challenges/04.js");
  // Assert
  expect(console.log).toHaveBeenCalledTimes(6);
  expect(console.log).toHaveBeenNthCalledWith(1, {
    firstName: "Brad",
    lastName: "Pitt",
    attractiveness: 7,
    dateOfBirth: new Date(1963, 11, 18),
    gender: "male",
  });
  expect(console.log).toHaveBeenNthCalledWith(2, {
    firstName: "Aaron",
    lastName: "Johnson",
    attractiveness: 9,
    dateOfBirth: new Date(1990, 5, 13),
    gender: "male",
    partner: expect.objectContaining({
      firstName: "Sam",
      lastName: "Taylor",
      attractiveness: 1,
      dateOfBirth: new Date(1967, 2, 4),
      gender: "female",
    }),
  });
  expect(console.log).toHaveBeenNthCalledWith(3, {
    firstName: "Sam",
    lastName: "Taylor",
    attractiveness: 1,
    dateOfBirth: new Date(1967, 2, 4),
    gender: "female",
    partner: expect.objectContaining({
      firstName: "Aaron",
      lastName: "Johnson",
      attractiveness: 9,
      dateOfBirth: new Date(1990, 5, 13),
      gender: "male",
    }),
  });
  expect(console.log).toHaveBeenNthCalledWith(4, {
    firstName: "Charlize",
    lastName: "Theron",
    attractiveness: 10,
    dateOfBirth: new Date(1975, 7, 7),
    gender: "female",
  });
  expect(console.log).toHaveBeenNthCalledWith(5, {
    firstName: "Keanu",
    lastName: "Reeves",
    attractiveness: 8,
    dateOfBirth: new Date(1964, 8, 2),
    gender: "male",
    partner: expect.objectContaining({
      firstName: "Alexandra",
      lastName: "Grant",
      attractiveness: 7,
      dateOfBirth: new Date(1973, 3, 4),
      gender: "female",
    }),
  });
  expect(console.log).toHaveBeenNthCalledWith(6, {
    firstName: "Alexandra",
    lastName: "Grant",
    attractiveness: 7,
    dateOfBirth: new Date(1973, 3, 4),
    gender: "female",
    partner: expect.objectContaining({
      firstName: "Keanu",
      lastName: "Reeves",
      attractiveness: 8,
      dateOfBirth: new Date(1964, 8, 2),
      gender: "male",
    }),
  });
  // Cleanup
  console.log.mockRestore();
});
