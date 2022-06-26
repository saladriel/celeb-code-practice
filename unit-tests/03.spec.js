/*
03.
log to the console the last person
*/
test("logs the last person", () => {
  // Arrange
  jest.spyOn(global.console, "log").mockImplementation(() => {});
  // Act
  require("../challenges/03.js");
  // Assert
  expect(console.log).toHaveBeenCalledTimes(1);
  expect(console.log).toHaveBeenCalledWith({
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
