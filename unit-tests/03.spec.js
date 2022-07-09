/*
03.
log to the console the last person
*/
const { alexandraGrant } = require("../people");

test("logs the last person", () => {
  // Arrange
  jest.spyOn(global.console, "log").mockImplementation(() => {});
  // Act
  require("../challenges/03.js");
  // Assert
  expect(console.log).toHaveBeenCalledTimes(1);
  expect(console.log).toHaveBeenCalledWith(alexandraGrant);
  // Cleanup
  console.log.mockRestore();
});
