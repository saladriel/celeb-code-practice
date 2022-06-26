/*
06.
log to the console each person who is male
*/
test("logs each person who is male", () => {
  // Arrange
  jest.spyOn(global.console, "log").mockImplementation(() => {});
  // Act
  require("../challenges/06.js");
  // Assert
  expect(console.log).toHaveBeenCalledTimes(3);
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
  // Cleanup
  console.log.mockRestore();
});
