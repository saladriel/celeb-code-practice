/*
01.
log to the console the count of all the people
*/
test("logs the count of all the people", () => {
  // Arrange
  jest.spyOn(global.console, "log").mockImplementation(() => {});
  // Act
  require("../challenges/01.js");
  // Assert
  expect(console.log).toHaveBeenCalledTimes(1);
  expect(console.log).toHaveBeenCalledWith(6);
  // Cleanup
  console.log.mockRestore();
});
