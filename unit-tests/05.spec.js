/*
05.
log to the console each person's first name
*/
test("logs each person's first name", () => {
  // Arrange
  jest.spyOn(global.console, "log").mockImplementation(() => {});
  // Act
  require("../challenges/05.js");
  // Assert
  expect(console.log).toHaveBeenCalledTimes(6);
  expect(console.log).toHaveBeenNthCalledWith(1, "Brad");
  expect(console.log).toHaveBeenNthCalledWith(2, "Aaron");
  expect(console.log).toHaveBeenNthCalledWith(3, "Sam");
  expect(console.log).toHaveBeenNthCalledWith(4, "Charlize");
  expect(console.log).toHaveBeenNthCalledWith(5, "Keanu");
  expect(console.log).toHaveBeenNthCalledWith(6, "Alexandra");
  // Cleanup
  console.log.mockRestore();
});
