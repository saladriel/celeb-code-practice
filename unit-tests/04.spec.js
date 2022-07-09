/*
04.
log to the console each person
*/
const {
  bradPitt,
  aaronJohnson,
  samTaylor,
  charlizeTheron,
  markFoster,
  keanuReeves,
  alexandraGrant,
  juliaGarner,
} = require("../people");

test("logs each person", () => {
  // Arrange
  jest.spyOn(global.console, "log").mockImplementation(() => {});
  // Act
  require("../challenges/04.js");
  // Assert
  expect(console.log).toHaveBeenCalledTimes(8);
  expect(console.log).toHaveBeenNthCalledWith(1, bradPitt);
  expect(console.log).toHaveBeenNthCalledWith(2, aaronJohnson);
  expect(console.log).toHaveBeenNthCalledWith(3, samTaylor);
  expect(console.log).toHaveBeenNthCalledWith(4, charlizeTheron);
  expect(console.log).toHaveBeenNthCalledWith(5, markFoster);
  expect(console.log).toHaveBeenNthCalledWith(6, juliaGarner);
  expect(console.log).toHaveBeenNthCalledWith(7, keanuReeves);
  expect(console.log).toHaveBeenNthCalledWith(8, alexandraGrant);
  // Cleanup
  console.log.mockRestore();
});
