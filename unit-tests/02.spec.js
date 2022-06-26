/*
02.
log to the console the first person
*/
test("logs the first person", () => {
  // Arrange
  jest.spyOn(global.console, "log").mockImplementation(() => {});
  // Act
  require("../challenges/02.js");
  // Assert
  expect(console.log).toHaveBeenCalledTimes(1);
  expect(console.log).toHaveBeenCalledWith({
    firstName: "Brad",
    lastName: "Pitt",
    attractiveness: 7,
    dateOfBirth: new Date(1963, 11, 18),
    gender: "male",
  });
  // Cleanup
  console.log.mockRestore();
});
