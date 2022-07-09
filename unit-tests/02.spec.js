/*
02.
log to the console the first person
*/
const { bradPitt } = require("../people");

test("logs the first person", () => {
  // Arrange
  jest.spyOn(global.console, "log").mockImplementation(() => {});
  // Act
  require("../challenges/02.js");
  // Assert
  expect(console.log).toHaveBeenCalledTimes(1);
  expect(console.log).toHaveBeenCalledWith(bradPitt);
  // Cleanup
  console.log.mockRestore();
});
