/*
06.
log to the console each person who is male
*/
const { bradPitt, aaronJohnson, markFoster, keanuReeves } = require("../people");

test("logs each person who is male", () => {
  // Arrange
  jest.spyOn(global.console, "log").mockImplementation(() => {});
  // Act
  require("../challenges/06.js");
  // Assert
  expect(console.log).toHaveBeenCalledTimes(4);
  expect(console.log).toHaveBeenNthCalledWith(1, bradPitt);
  expect(console.log).toHaveBeenNthCalledWith(2, aaronJohnson);
  expect(console.log).toHaveBeenNthCalledWith(3, markFoster);
  expect(console.log).toHaveBeenNthCalledWith(4, keanuReeves);
  // Cleanup
  console.log.mockRestore();
});
