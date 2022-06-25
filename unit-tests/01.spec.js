/*
01.
log to the console the count of all the people
*/
test("logs the correct count", () => {
  // Arrange
  jest.spyOn(global.console, "log").mockImplementation(() => {});
  // Act
  require("../challenges/01.js");
  // Assert
  expect(console.log).toBeCalledWith(6);
  // Cleanup
  console.log.mockRestore();
});
